/**
 * 自托管字体：从 Google Fonts 拉取 Chrome-129 UA 对应的 CSS → 提取 unicode-range + woff2 URL →
 * 下载所有 woff2 到 public/fonts/ → 生成 public/fonts/fonts.css 供 style.css @import
 *
 * 用法: node scripts/selfhost-fonts.cjs
 * 注意: 该脚本只在本地字体缺失时运行一次；每次升级字体族/权重时手动重跑
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'public', 'fonts');
if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });

const CHROME_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36';

const CSS_URL =
  'https://fonts.googleapis.com/css2?family=' +
  'Fraunces:ital,opsz,wght@0,9..144,900;1,9..144,900' +
  '&family=Sora:wght@400;700;800' +
  '&family=Noto+Serif+SC:wght@700;900' +
  '&family=Noto+Sans+SC:wght@400;500;700' +
  '&display=swap';

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': CHROME_UA, Accept: 'text/css,*/*;q=0.1' } }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          get(res.headers.location).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error('HTTP ' + res.statusCode + ' ' + url));
          return;
        }
        let body = '';
        res.setEncoding('utf8');
        res.on('data', (c) => (body += c));
        res.on('end', () => resolve(body));
      })
      .on('error', reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, { headers: { 'User-Agent': CHROME_UA } }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          download(res.headers.location, dest).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error('HTTP ' + res.statusCode));
          return;
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      })
      .on('error', reject);
  });
}

function safeName(s) {
  return s.replace(/[^a-zA-Z0-9.\-]/g, '');
}

(async () => {
  console.log('① Fetch Google Fonts CSS…');
  const cssText = await get(CSS_URL);

  const faces = [...cssText.matchAll(/@font-face\s*\{([\s\S]*?)\}/g)].map((m) => m[1]);
  console.log('② Parsed @font-face blocks:', faces.length);

  const manifest = [];
  let counter = 0;
  for (const block of faces) {
    const fm = block.match(/font-family:\s*["']([^"']+)["']/)?.[1];
    const wt = block.match(/font-weight:\s*([\d\w]+)/)?.[1] || '400';
    const st = block.match(/font-style:\s*(\w+)/)?.[1] || 'normal';
    const range = block.match(/unicode-range:\s*([^;]+)/)?.[1] || 'U+0-10FFFF';
    const u = block.match(/url\((https:[^)]+)\)/)?.[1];
    if (!fm || !u) continue;
    const fname = safeName(`${fm}-${wt}-${st}-${String(counter).padStart(2, '0')}.woff2`);
    counter++;
    manifest.push({ fm, wt, st, range, fname, u });
  }

  // 生成 self-hosted CSS
  let out =
    '/* ========================================================= *\\\n' +
    '   Self-hosted fonts for Zhong Sheng Trade\n' +
    '   Source: Google Fonts, extracted woff2 subsets + unicode-range\n' +
    '   Fallback chain: /fonts/*.woff2 (self-hosted)\n' +
    '                   → Google CDN (see index.html <link rel=preconnect>)\n' +
    '                   → system serif (Songti / PingFang)\n' +
    '   Font-display: swap (avoids invisible text on slow loads)\n' +
    '\\* ========================================================= */\n\n';

  for (const f of manifest) {
    out += `@font-face {\n`;
    out += `  font-family: "${f.fm}";\n`;
    out += `  font-style: ${f.st};\n`;
    out += `  font-weight: ${f.wt};\n`;
    out += `  font-display: swap;\n`;
    out += `  src: url("/fonts/${f.fname}") format("woff2");\n`;
    out += `  unicode-range: ${f.range};\n`;
    out += `}\n\n`;
  }

  fs.writeFileSync(path.join(DIR, 'fonts.css'), out, 'utf8');
  console.log(`③ Wrote public/fonts/fonts.css (${out.split('\n').length} lines)`);

  let dlOK = 0;
  for (const f of manifest) {
    const p = path.join(DIR, f.fname);
    if (fs.existsSync(p) && fs.statSync(p).size > 2000) {
      console.log(`  skip (cached): ${f.fname}`);
      dlOK++;
      continue;
    }
    try {
      await download(f.u, p);
      const sz = (fs.statSync(p).size / 1024).toFixed(1);
      console.log(`  ✓ ${f.fm} ${f.wt} ${f.st} → ${f.fname}  (${sz} KB)`);
      dlOK++;
    } catch (e) {
      console.error(`  ✗ failed: ${f.fname} — ${e.message}`);
    }
  }

  const sizes = fs.readdirSync(DIR).filter(x => x.endsWith('.woff2')).map(x => fs.statSync(path.join(DIR, x)).size);
  const total = sizes.reduce((a, b) => a + b, 0);
  console.log(`\n✅ Done. ${dlOK}/${manifest.length} fonts self-hosted. Total woff2 size: ${(total/1024).toFixed(1)} KB`);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
