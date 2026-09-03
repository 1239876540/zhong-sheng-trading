import { Link } from 'react-router-dom'
import { MapPin, Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import companyLogo from '../assets/images/company-logo.png'

/** 从 role 字段提取最后一段标签，去掉国旗 emoji/前缀，仅保留"销售热线"/"Ventes"等小标签
 *  中文: "🇲🇬 马达加斯加 · 销售热线 1" → "销售热线 1"
 *  法语: "📱 WeChat / WhatsApp ① (Ventes)" → "Ventes"
 */
function shortRole(s: string) {
  if (!s) return ''
  // 优先取括号内
  const m1 = s.match(/[（(]([^）)]+)[）)]/)
  if (m1 && m1[1]) return m1[1]
  // 再取"·" / " · "之后的片段
  const m2 = s.split(/\s*·\s*/).pop()
  if (m2) return m2
  return s
}

export default function Footer() {
  const { t, lang } = useI18n()
  return (
    <footer className="mt-20 bg-[color:var(--color-ink-900)] text-white relative overflow-hidden">
      {/* 装饰: 左下方大字母 */}
      <div className="pointer-events-none absolute -left-6 -bottom-10 font-display text-[280px] leading-none font-black text-white/[0.03] select-none">
        ZS
      </div>
      <div className="pointer-events-none absolute right-0 top-0 w-72 h-72 bg-[color:var(--color-amber-500)]/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-14 md:py-16 md:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">

          {/* 公司栏 - 占 5 列 */}
          <div className="md:col-span-2 lg:col-span-5 order-1">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6" aria-label={t.common.companyFull}>
              <span className="relative w-11 h-11 sm:w-14 sm:h-14 flex-shrink-0">
                <span className="absolute inset-0 rounded-full border-2 border-white/80" aria-hidden="true" />
                <span className="absolute -right-0.5 -bottom-0.5 w-[30%] h-[30%] rounded-tr-full rounded-bl-full bg-[color:var(--color-amber-500)]" aria-hidden="true" />
                <img src={companyLogo} alt="" aria-hidden="true" className="absolute inset-1 rounded-full w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover" />
              </span>
              <div>
                <div className="font-display text-lg sm:text-2xl font-extrabold tracking-tight">
                  {lang === 'zh' ? t.common.companyFull : t.common.companyEn}
                </div>
                <div className="mt-0.5 sm:mt-1 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-white/40 font-semibold">
                  {t.common.companyEn}
                </div>
              </div>
            </Link>
            <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-white/60 max-w-lg mb-5 sm:mb-7">
              {t.footer.intro}
            </p>

            {/* 主营业务徽章 - 4 个并排胶囊 */}
            <div className="flex flex-wrap gap-2">
              {t.footer.biz.map((x) => (
                <span key={x} className="px-3 py-1.5 text-[12px] font-semibold text-white/80 border border-white/15 bg-white/[0.03]">
                  {x}
                </span>
              ))}
            </div>
          </div>

          {/* 导航 + 快速跳转 - 占 3 列 */}
          <div className="lg:col-span-3 order-2 md:order-2">
            <h4 className="text-sm font-bold tracking-[0.16em] uppercase text-white/40 mb-6">
              {t.footer.quickNav}
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: t.nav.home, id: '01' },
                { to: '/about', label: t.nav.about, id: '02' },
                { to: '/services', label: t.nav.services, id: '03' },
                { to: '/contact', label: t.nav.contact, id: '04' },
              ].map((it) => (
                <li key={it.to}>
                  <Link
                    to={it.to}
                    className="group flex items-center justify-between py-1.5 text-[15px] text-white/70 hover:text-white transition-colors border-b border-white/5"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-[color:var(--color-amber-500)] tracking-wider">{it.id}</span>
                      <span>{it.label}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 - 占 4 列 */}
          <div className="lg:col-span-4 order-3 md:order-3">
            <h4 className="text-sm font-bold tracking-[0.16em] uppercase text-white/40 mb-6">
              {t.footer.contact}
            </h4>
            <ul className="space-y-5">
              {/* 地址 */}
              <li className="flex gap-3">
                <div className="mt-1 w-9 h-9 flex-shrink-0 flex items-center justify-center border border-white/15 bg-white/[0.04]" aria-hidden="true">
                  <MapPin className="w-4 h-4 text-[color:var(--color-amber-500)]" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{t.footer.addrTitle}</div>
                  <div className="text-white/85 text-[14px] leading-relaxed">
                    {t.contact.address.zh}
                  </div>
                  <div className="text-[12px] text-white/40 mt-1 leading-relaxed">
                    {t.contact.address.fr}
                  </div>
                </div>
              </li>
              {/* 电话 */}
              <li className="flex gap-3">
                <div className="mt-1 w-9 h-9 flex-shrink-0 flex items-center justify-center border border-white/15 bg-white/[0.04]" aria-hidden="true">
                  <Phone className="w-4 h-4 text-[color:var(--color-amber-500)]" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{t.footer.phoneTitle}</div>
                  <div className="space-y-1">
                    {t.contact.phones.map((p) => (
                      <a
                        key={p.tel}
                        href={`tel:${p.tel}`}
                        aria-label={`${shortRole(p.role)} ${p.display}`}
                        className="block text-white hover:text-[color:var(--color-amber-500)] text-[15px] font-bold transition-colors"
                      >
                        {p.display}
                        <span className="ml-2 text-[11px] font-normal text-white/40">{shortRole(p.role)}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </li>
              {/* 微信 */}
              <li className="flex gap-3">
                <div className="mt-1 w-9 h-9 flex-shrink-0 flex items-center justify-center border border-white/15 bg-white/[0.04]" aria-hidden="true">
                  <MessageCircle className="w-4 h-4 text-[color:var(--color-amber-500)]" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{t.footer.wxTitle}</div>
                  <div className="space-y-0.5">
                    {t.contact.wechat.map((w) => (
                      <div key={w.id} className="text-white/80 text-[14px] font-mono tracking-wider">
                        {w.id}
                        <span className="ml-2 text-[11px] font-sans text-white/40 tracking-normal">{shortRole(w.role)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* 底部分割线 */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/40">
          <div>© {new Date().getFullYear()} {t.footer.copyright}</div>
          <div className="tracking-[0.2em] uppercase text-white/30">{t.footer.bizTagline}</div>
        </div>
      </div>
    </footer>
  )
}
