import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Truck, Warehouse, Wrench, CarFront, Phone, CalendarCheck, Globe, Languages, Star, Shield, Award, ChevronRight } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import warehouseGate from '../assets/images/warehouse-gate.jpg'
import tractorWarehouse from '../assets/images/xcmg-tractor-6x4-warehouse.jpg'
import realPortSunset from '../assets/images/real-rotterdam-port-sunset.jpg'
import tractorOfficial from '../assets/images/xcmg-tractor-6x4-official.jpg'
import dumpSite from '../assets/images/xcmg-dump-6x4-site.jpg'
import dumpLift from '../assets/images/xcmg-dump-6x4-lift.jpg'
import lightCarry from '../assets/images/truck-light-carry.jpg'
import vanBox from '../assets/images/van-box.jpg'

type VKey = 'tractor6x4' | 'dump6x4' | 'tractor4x2' | 'van' | 'light'
const vehicleImgs: Record<VKey, { main: string; hero?: string }> = {
  tractor6x4: { main: tractorOfficial, hero: tractorWarehouse },
  dump6x4:    { main: dumpLift, hero: dumpSite },
  tractor4x2: { main: tractorWarehouse },
  van:        { main: vanBox },
  light:      { main: lightCarry },
}

export default function Home() {
  const { t, lang } = useI18n()

  const showVehicles: VKey[] = ['tractor6x4', 'dump6x4', 'light', 'van']

  const services2x2 = [
    { icon: Truck, title: t.home.services[0].title, desc: t.home.services[0].desc, no: '01', to: '/services#vehicles' },
    { icon: Warehouse, title: t.home.services[1].title, desc: t.home.services[1].desc, no: '02', to: '/services#warehouse' },
    { icon: Wrench, title: t.home.services[2].title, desc: t.home.services[2].desc, no: '03', to: '/services#parts' },
    { icon: CarFront, title: t.home.services[3].title, desc: t.home.services[3].desc, no: '04', to: '/services#parking' },
  ]

  const stats = t.home.stats

  // ========== 工具：点击 ripple 坐标注入 ==========
  const setRipple = (e: React.MouseEvent<HTMLElement>) => {
    const tgt = e.currentTarget
    const rect = tgt.getBoundingClientRect()
    tgt.style.setProperty('--rx', `${e.clientX - rect.left}px`)
    tgt.style.setProperty('--ry', `${e.clientY - rect.top}px`)
  }

  // ========== 工具：数字计数器 ==========
  function Counter({ to, suffix, duration = 2000, trigger }: { to: number; suffix?: string; duration?: number; trigger: boolean }) {
    const [val, setVal] = useState(0)
    useEffect(() => {
      if (!trigger) return
      let raf = 0
      const start = performance.now()
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration)
        const e = 1 - Math.pow(1 - t, 3) // easeOutCubic
        setVal(Math.round(to * e))
        if (t < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
      return () => cancelAnimationFrame(raf)
    }, [trigger, to, duration])
    return <>{val.toLocaleString(lang === 'zh' ? 'zh-CN' : 'fr-FR')}{suffix}</>
  }
  function parseStat(v: string) {
    const m = v.match(/^([\d\s]+)/)
    if (!m) return { n: 0, suffix: v }
    const n = parseInt(m[1].replace(/\s/g, ''), 10) || 0
    return { n, suffix: v.substring(m[1].length) }
  }
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' })
  // Hero 进入后才开始 counter — 如果 statsInView 太早（首屏即出现），另外用 mount 延时
  const [heroMounted, setHeroMounted] = useState(false)
  useEffect(() => { const t = setTimeout(() => setHeroMounted(true), 400); return () => clearTimeout(t) }, [])
  const triggerCounters = heroMounted || statsInView

  // ========== 分词 stagger 工具 ==========
  const StaggerWords = ({ text, className }: { text: string; className?: string }) => {
    const words = text.split(' ')
    return (
      <span className={className}>
        {words.map((w, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.25em]"
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.75, delay: 0.15 + i * 0.05, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {w}
          </motion.span>
        ))}
      </span>
    )
  }

  return (
    <div className="text-[color:var(--color-ink-900)]">

      {/* ========================================================= */}
      {/* HERO 大图主视觉                                          */}
      {/* ========================================================= */}
      <section className="relative min-h-[94vh] overflow-hidden">
        {/* 背景图 + slow pan（首屏 LCP 大图：eager + fetchpriority=high + decoding=async） */}
        <div className="absolute inset-0" aria-hidden="true">
          <img src={realPortSunset} alt="塔马塔夫港口日落实景（中盛贸易所在地 Toamasina Madagascar Port Sunset）" fetchPriority="high" decoding="async" className="w-full h-full object-cover slow-pan" />
          {/* 渐变遮罩 + mesh 叠层 + grain */}
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-ink-900)]/85 via-[color:var(--color-ink-900)]/40 to-[color:var(--color-amber-500)]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-warm)] via-[color:var(--color-warm)]/30 to-transparent" />
          <div className="absolute inset-0 bg-mesh-ink opacity-60" />
          <div className="absolute inset-0 bg-grain-overlay" />
        </div>

        {/* 左上编号装饰 */}
        <div className="hidden md:block absolute top-28 left-8 lg:left-14 text-white/50 font-mono text-xs tracking-[0.4em]">
          <div className="flex items-center gap-3">
            <span className="w-12 h-px bg-white/35" />
            N° 01 / {t.home.location}
          </div>
        </div>
        {/* 右下巨大水印装饰字 */}
        <div className="pointer-events-none hidden lg:block absolute -right-6 bottom-10 font-display font-black leading-none select-none">
          <span className="block text-[260px] text-white/[0.04]">EXPORT</span>
          <span className="block -mt-20 ml-20 text-[150px] text-[color:var(--color-amber-500)]/10">TRADE</span>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-36 md:pt-40 lg:pt-48 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            {/* 左 8 列主文案 —— 玻璃卡叠加 */}
            <div className="lg:col-span-8">
              {/* 玻璃卡容器 */}
              <div className="relative p-6 sm:p-8 md:p-10 glass-dark rounded-[32px] overflow-hidden shine-sweep">
                {/* 琥珀高光 */}
                <div className="pointer-events-none absolute -top-20 -right-16 w-72 h-72 rounded-full bg-[color:var(--color-amber-500)]/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-8 w-56 h-56 rounded-full bg-white/5 blur-3xl" />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative"
                >
                  <div className="chip-skew mb-6 md:mb-8">
                    <span className="w-2 h-2 rounded-full bg-[color:var(--color-ink-900)] pulse-ring inline-block" />
                    {t.home.location} · {t.home.trustCard}
                  </div>

                  <h1 className="font-display text-white font-black leading-[0.95] tracking-tight">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="block text-[12px] sm:text-[16px] md:text-[20px] font-bold text-gradient-amber mb-2 sm:mb-3 md:mb-5 tracking-[0.22em] sm:tracking-[0.28em] uppercase"
                    >
                      {lang === 'zh' ? 'MADAGASCAR · 马达加斯加' : 'MADAGASCAR · TOAMASINA II'}
                    </motion.span>
                    <StaggerWords
                      text={t.home.heroTitleLine1}
                      className="block text-[32px] sm:text-[46px] md:text-[76px] lg:text-[94px]"
                    />
                    <StaggerWords
                      text={t.home.heroTitleLine2}
                      className="block text-[26px] sm:text-[38px] md:text-[62px] lg:text-[80px] text-white/90 mt-1 sm:mt-2"
                    />
                  </h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.7 }}
                    className="mt-4 sm:mt-6 md:mt-8 max-w-xl sm:max-w-2xl text-white/75 text-[13px] sm:text-[14px] md:text-[17px] leading-relaxed"
                  >
                    {t.home.heroDesc}
                  </motion.p>

                  {/* 双按钮 btn-ripple */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4"
                  >
                    <Link to="/services" onClick={setRipple}
                          className="btn-ripple btn btn-amber pulse-ring text-sm sm:text-base">
                      {t.home.heroButtons.services}
                      <ChevronRight className="w-4 h-4 -mr-1" strokeWidth={3} />
                    </Link>
                    <Link to="/contact" onClick={setRipple}
                          className="btn-ripple btn btn-outline !text-white !border-white/60 hover:!bg-white hover:!text-[color:var(--color-ink-900)] text-sm sm:text-base">
                      <Phone className="w-4 h-4" strokeWidth={2.5} />
                      {t.home.heroButtons.contact}
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* stats 条 — 数字动画 */}
              <div ref={statsRef} className="mt-8 sm:mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-3 md:gap-x-8 max-w-4xl">
                {stats.map((s, i) => {
                  const { n, suffix } = parseStat(s.value)
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
                      className="relative group glass-light !bg-white/60 !border-white/25 rounded-[18px] sm:rounded-[22px] px-3 sm:px-4 py-3 sm:py-4 md:px-5 md:py-5 backdrop-blur-md"
                    >
                      {i > 0 && i < 2 && <span className="hidden sm:block md:hidden absolute -left-1.5 top-4 bottom-4 w-px bg-[color:var(--color-amber-500)]/30" />}
                      {i > 0 && <span className="hidden md:block absolute -left-4 top-5 bottom-5 w-px bg-[color:var(--color-amber-500)]/30" />}
                      <div className="hero-counter text-[26px] sm:text-[34px] md:text-[48px] leading-none bg-gradient-to-br from-white via-white to-[#FFD362] bg-clip-text text-transparent">
                        <Counter to={n} suffix={suffix} trigger={triggerCounters} duration={1800 + i * 150} />
                      </div>
                      <div className="mt-1.5 sm:mt-2 text-[10px] sm:text-[11px] md:text-[13px] text-white/70 tracking-wider font-semibold leading-snug">
                        {s.label}
                      </div>
                      {/* data 条装饰 */}
                      <div className="mt-2 sm:mt-3 bar-track h-[3px] sm:h-[4px] !bg-white/10">
                        <div className="bar-fill" style={{ width: `${70 + (i % 3) * 10}%` }} />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* 右 4 列: 浮动特色车卡 —— 3D tilt + float */}
            <div className="hidden lg:block lg:col-span-4 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 60, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: -1 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                className="relative float-y"
              >
                <div className="tilt-lift rounded-[32px] p-3 glass-dark overflow-hidden">
                  <div className="relative aspect-[4/5.2] overflow-hidden rounded-[22px] ring-1 ring-white/15">
                    <img src={tractorWarehouse} alt="徐工 6x4 牵引车停靠中盛贸易自有仓库" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                    {/* 价格 tag */}
                    <div className="absolute top-4 right-4 chip-skew !text-[13px]">
                      {t.vehicles.tractor6x4.priceShort}
                    </div>
                    {/* N°角签 */}
                    <div className="absolute top-4 left-4 font-mono text-xs tracking-[0.3em] text-white/70 font-black">
                      N° / 01
                    </div>
                    {/* 底部信息 */}
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                      <div className="divider-industrial mb-4 text-white">
                        <span className="dot" />
                      </div>
                      <div className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-amber-500)] font-black">
                        徐工 XCMG · 6×4
                      </div>
                      <div className="font-display text-white text-[22px] md:text-[26px] font-black mt-1 leading-tight">
                        {t.vehicles.tractor6x4.name}
                      </div>
                      <div className="mt-3 flex items-center gap-3 text-white/75 text-xs">
                        <span className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5" /> {t.vehicles.tractor6x4.specs[0]}</span>
                        <span className="w-px h-3 bg-white/25" />
                        <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-[color:var(--color-amber-500)]" /> {lang === 'zh' ? '官方授权' : 'Authorized'}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 左下小字角签 */}
                <div className="absolute -bottom-4 -left-5 bg-[color:var(--color-amber-500)] border border-[color:var(--color-amber-500)] shadow-[0_10px_30px_-10px_rgba(232,164,0,0.7)] px-5 py-2.5 rounded-[14px] text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink-900)] font-black rotate-[-4deg]">
                  ZS · FLEET · 2026
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 底部滚动画廊: 5 张车型小图 */}
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-10 -mt-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            {(['tractor6x4', 'dump6x4', 'light', 'van'] as VKey[]).map((k, i) => (
              <Link to="/services" key={k}
                    className="group relative aspect-[5/4] overflow-hidden rounded-[14px] sm:rounded-[18px] ring-1 ring-white/20 bg-[color:var(--color-ink-900)]/50 shine-sweep tilt-lift">
                <img src={vehicleImgs[k].main} alt={t.vehicles[k].name} loading="lazy" decoding="async" className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                {/* 渐变加深 + 延长渐变黑覆盖到中部，保证底部长标题不被车图浅色背景淹没（对比度≥4.5:1） */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent" />
                {/* 底部内容内边距 16px（原 12px 太小，中文双行易贴边裁切） */}
                <div className="absolute left-3 right-3 bottom-3 sm:left-4 sm:right-4 sm:bottom-4">
                  <div className="text-[9px] sm:text-[10px] text-[color:var(--color-amber-500)] font-black tracking-[0.22em] uppercase mb-1">
                    FLEET · {String(i + 1).padStart(2, '0')}
                  </div>
                  {/* 中文长名（如"徐工漢風 G 7 6×4 自卸车（翻斗车）"）常需双行，所以 line-clamp-3 兜底 + 行高 1.35 */}
                  <div className="text-white text-[11px] sm:text-[12px] md:text-[14px] leading-[1.3] font-bold tracking-tight line-clamp-2 sm:line-clamp-3">
                    {t.vehicles[k].name}
                  </div>
                </div>
              </Link>
            ))}
            {/* 第5张 官方合作 CTA */}
            <Link to="/about" className="group relative aspect-[4/3] sm:aspect-[5/4] md:aspect-[4/3] overflow-hidden rounded-[14px] sm:rounded-[18px] ring-1 ring-white/20 bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)] flex flex-col justify-between p-3 sm:p-4 md:p-5 tilt-lift">
              <div className="flex items-center justify-between">
                <div className="text-[8px] sm:text-[9px] font-black tracking-[0.22em] uppercase opacity-85">
                  {t.home.coreBiz}
                </div>
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-[color:var(--color-ink-900)]" />
              </div>
              <div className="corner-number hidden sm:block" style={{ fontSize: '96px', right: '4px', bottom: '-8px' }}>ZS</div>
              <div className="relative">
                <div className="font-display text-[16px] sm:text-[18px] md:text-[22px] leading-tight font-black">
                  {t.common.companyShort}
                </div>
                <div className="mt-1 sm:mt-2 flex items-center gap-1 text-xs sm:text-sm font-bold group-hover:gap-2 transition-all">
                  {lang === 'zh' ? '了解中盛' : 'About Zhong Sheng'}
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={3} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 信任条 · 跑马灯 marquee                               */}
      {/* ========================================================= */}
      <section className="relative bg-[color:var(--color-ink-900)] text-white overflow-hidden border-y-4 border-[color:var(--color-amber-500)] py-6 md:py-7">
        {/* 文字说明放在左边（作为 marquee 起始的一张 "卡"） */}
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mb-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <div className="text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-amber-500)] font-black">
                OFFICIAL PARTNER · 官方合作伙伴
              </div>
              <div className="mt-1 font-display text-xl md:text-2xl font-extrabold">
                {lang === 'zh' ? '徐工 XCMG · 开瑞 KARRY · 中盛贸易联合' : 'XCMG · KARRY · ZHONG SHENG · PARTNERS'}
              </div>
              <div className="mt-1 text-sm text-white/60 max-w-lg">
                {lang === 'zh' ? '正规授权渠道 · 原厂品质保障 · 本地售后与配件支持' : 'Authorized channel · OEM quality · Local after-sales support'}
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3 text-xs text-white/50">
              <Globe className="w-4 h-4" /> <span>MG · CN · FR · WORLDWIDE</span>
            </div>
          </div>
        </div>
        {/* 无限滚动 marquee 信任卡 */}
        <div className="relative [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
          <div className="marquee gap-4 md:gap-5 px-4 md:px-10">
            {[...Array(2)].flatMap((_, dup) => [
              { t: 'XCMG 徐工', s: 'OFFICIAL PARTNER' },
              { t: 'KARRY 开瑞', s: 'AUTHORIZED DEALER' },
              { t: '10+ YEARS', s: lang === 'zh' ? '行业经验' : 'Experience' },
              { t: 'BILINGUAL', s: lang === 'zh' ? '中 / 法 双语' : 'ZH / FR Service' },
              { t: '20 000+㎡', s: lang === 'zh' ? '仓储面积' : 'Warehouse Area' },
              { t: 'FAST DELIVERY', s: lang === 'zh' ? '港口直发' : 'Port to Door' },
              { t: 'CIF / FOB', s: lang === 'zh' ? '全程贸易条款' : 'Trade Terms' },
              { t: 'TOAMASINA II', s: lang === 'zh' ? '塔马塔夫 二号公路' : 'RN2 — Madagascar' },
            ].map((b, idx) => (
              <div key={`${dup}-${idx}`} className="tilt-lift shrink-0 min-w-[220px] md:min-w-[260px] rounded-[18px] border border-white/10 p-4 md:p-5 bg-white/[0.04] hover:bg-white/[0.08] transition-colors relative overflow-hidden">
                <div className="font-display text-2xl md:text-3xl font-black tracking-tight">{b.t}</div>
                <div className="mt-1 text-[10px] tracking-[0.25em] uppercase text-white/40 font-semibold">{b.s}</div>
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[color:var(--color-amber-500)]" />
                <div className="absolute -right-6 -bottom-8 font-display text-[80px] leading-none font-black text-white/[0.04]">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>
            )))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 核心业务 4 卡片 · 加港航船尾迹纹 bg-wake（贴合"货物流转"语义） */}
      {/* ========================================================= */}
      <section className="relative py-14 sm:py-16 md:py-20 lg:py-28 bg-wake">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* 标题 */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 md:mb-16">
            <div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-ink-500)] font-black mb-3 sm:mb-4">
                {lang === 'zh' ? 'CORE BUSINESS · N° 02' : 'CORE BUSINESS · SECTION 02'}
              </div>
              <h2 className="font-display text-[28px] sm:text-[32px] md:text-[52px] font-black leading-[1.05] tracking-tight max-w-2xl">
                {t.home.coreBiz}
                <span className="block text-[color:var(--color-ink-500)] text-[16px] sm:text-[18px] md:text-[24px] font-bold mt-1 sm:mt-2 tracking-normal">
                  {t.home.coreBizDesc}
                </span>
              </h2>
              <span className="hr-heavy mt-4 sm:mt-5" />
            </div>
            <Link to="/services" className="btn btn-primary self-start md:self-end text-sm sm:text-base !py-3 sm:!py-[14px]">
              {t.common.learnMore}
              <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          </div>

          {/* 4 卡片 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {services2x2.map((s) => (
              <Link
                to={s.to}
                key={s.no}
                className="group tilt-lift card-paper p-4 sm:p-5 md:p-8 flex gap-4 sm:gap-5 md:gap-6 transition-all"
              >
                {/* 左编号+图标 */}
                <div className="flex flex-col items-center gap-2 sm:gap-3">
                  <div className="text-[10px] sm:text-[11px] font-mono font-black text-[color:var(--color-ink-400)] tracking-widest">
                    — {s.no} —
                  </div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0">
                    <div className="absolute inset-0 border border-[color:var(--color-ink-900)]" />
                    <div className="absolute top-1.5 right-1.5 left-1.5 bottom-1.5 bg-[color:var(--color-ink-900)] flex items-center justify-center transition-colors group-hover:bg-[color:var(--color-amber-500)]">
                      <s.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white group-hover:text-[color:var(--color-ink-900)] transition-colors" strokeWidth={1.8} />
                    </div>
                  </div>
                </div>
                {/* 右内容 */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-black text-[color:var(--color-ink-900)] group-hover:text-[color:var(--color-amber-600)] transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-[13px] sm:text-[14px] md:text-[15px] text-[color:var(--color-ink-600)] leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="mt-3 sm:mt-5 text-[12px] sm:text-[13px] font-bold text-[color:var(--color-ink-900)] flex items-center gap-2 group-hover:text-[color:var(--color-amber-600)] transition-colors">
                    {t.common.seeMore}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 精品车型 : 主推4款大图展示                               */}
      {/* ========================================================= */}
      <section className="relative py-14 sm:py-16 md:py-20 lg:py-28 bg-[color:var(--color-ink-900)] text-white overflow-hidden">
        <div className="pointer-events-none absolute -right-20 top-40 font-display text-[200px] sm:text-[320px] leading-none font-black text-white/[0.04] select-none">
          FLEET
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-amber-500)] font-black mb-3 sm:mb-4">
            {lang === 'zh' ? 'FEATURED VEHICLES · N° 03' : 'FEATURED VEHICLES · SECTION 03'}
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 md:mb-16">
            <h2 className="font-display text-[28px] sm:text-[32px] md:text-[52px] font-black leading-[1.05] tracking-tight">
              {t.home.vehicleTitle}
              <span className="block text-white/50 text-[16px] sm:text-[18px] md:text-[24px] font-bold mt-1 sm:mt-2 tracking-normal">
                {t.home.vehicleDesc}
              </span>
            </h2>
            <Link to="/services" className="btn btn-amber self-start text-sm sm:text-base !py-3 sm:!py-[14px]">
              {t.home.vehicleCta}
              <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          </div>

          {/* 2 列车型大图卡 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {showVehicles.map((k, idx) => {
              const v = t.vehicles[k]
              const img = vehicleImgs[k].main
              return (
                <Link
                  to={`/services#${k}`}
                  key={k}
                  className={`group relative block bg-black overflow-hidden border border-white/10 shine-sweep ${
                    idx === 0 ? 'lg:aspect-[4/3.6]' : ''
                  }`}
                  style={{ aspectRatio: idx === 0 ? undefined : undefined, minHeight: idx === 0 ? '380px' : '340px', minWidth: '0' }}
                >
                  <img src={img} alt={v.name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

                  {/* 左上编号 */}
                  <div className="absolute top-3 sm:top-5 left-3 sm:left-5 flex items-center gap-2 sm:gap-3">
                    <span className="badge-ink !bg-white/10 backdrop-blur-sm !border !border-white/20 !text-white !rounded-none !p-1.5 sm:!p-2 text-[9px] sm:text-[10px] font-black tracking-[0.3em]">
                      {String(idx + 1).padStart(2, '0')} / 04
                    </span>
                    <span className="badge-ink !bg-[color:var(--color-amber-500)] !text-[color:var(--color-ink-900)] !rounded-none !p-1.5 sm:!p-2 text-[9px] sm:text-[10px] font-black tracking-[0.2em]">
                      {v.tag}
                    </span>
                  </div>

                  {/* 右下价格 tag */}
                  <div className="absolute top-3 sm:top-5 right-3 sm:right-5 price-tag text-[12px] sm:text-[14px] md:text-[16px]">
                    {v.priceShort}
                  </div>

                  {/* 底部内容 */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8">
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/50 font-bold mb-1 sm:mb-2">
                      {v.brand}
                    </div>
                    {/* 中文长名如"徐工漢風 G 7 6×4 自卸车（翻斗车）"双行：line-clamp-3 保底 + 行高 1.15→1.2 */}
                    <h3 className="font-display text-[20px] sm:text-[24px] md:text-[30px] lg:text-[32px] font-black text-white leading-[1.2] tracking-tight line-clamp-2 sm:line-clamp-3">
                      {v.name}
                    </h3>
                    {/* specs 4 格 */}
                    <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-1.5 sm:gap-2 max-w-md">
                      {v.specs.slice(0, 4).map((s) => (
                        <div key={s} className="px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-[12px] md:text-[13px] text-white/80 border border-white/15 bg-white/[0.04]">
                          {s}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 sm:mt-5 flex items-center justify-between">
                      <div className="text-[12px] sm:text-[13px] text-[color:var(--color-amber-500)] font-bold">
                        {v.highlight}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white/80 flex items-center gap-1 group-hover:text-[color:var(--color-amber-500)] group-hover:gap-2 transition-all">
                        {t.home.vehicleConsult}
                      </div>
                    </div>
                    {/* 库存进度条 */}
                    <div className="mt-3 sm:mt-5 space-y-1 sm:space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-bold tracking-wider">
                        <span className="text-white/50 uppercase">{lang === 'zh' ? '现车库存' : 'IN STOCK'}</span>
                        <span className="text-[color:var(--color-amber-500)] font-mono">
                          {idx === 0 ? '12 / 15' : idx === 1 ? '8 / 10' : idx === 2 ? '18 / 20' : '6 / 8'}
                        </span>
                      </div>
                      <div className="bar-track h-[3px] sm:h-[6px]" style={{ background: 'rgba(255,255,255,0.1)' }}>
                        <div className="bar-fill" style={{
                          width: idx === 0 ? '80%' : idx === 1 ? '80%' : idx === 2 ? '90%' : '75%'
                        }} />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 为什么选中盛: 纸面卡片 + 4理由 + 信任三连                 */}
      {/* ========================================================= */}
      <section className="relative py-14 sm:py-16 md:py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* 左 5 列 标题+图 */}
            <div className="lg:col-span-5">
              <div className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-ink-500)] font-black mb-3 sm:mb-4">
                {lang === 'zh' ? 'WHY US · N° 04' : 'WHY ZHONG SHENG'}
              </div>
              <h2 className="font-display text-[28px] sm:text-[32px] md:text-[48px] font-black leading-[1.05] tracking-tight">
                {t.home.whyTitle}
              </h2>
              <span className="hr-heavy mt-4 sm:mt-5" />
              <p className="mt-4 sm:mt-6 text-[14px] sm:text-[15px] md:text-[16px] text-[color:var(--color-ink-600)] leading-relaxed">
                {t.home.whyDesc}
              </p>

              {/* 信任三连 */}
              <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { icon: Shield, t: lang === 'zh' ? '正规实体' : 'Registered', s: lang === 'zh' ? '资质齐全' : 'Legal' },
                  { icon: Star, t: lang === 'zh' ? '诚信经营' : 'Integrity', s: lang === 'zh' ? '多年口碑' : 'Reputation' },
                  { icon: Award, t: lang === 'zh' ? '官方渠道' : 'Authorized', s: lang === 'zh' ? '品质保障' : 'Quality' },
                ].map((b, i) => (
                  <div key={i} className="card-paper p-3 sm:p-4 text-center">
                    <div className="mx-auto w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)]">
                      <b.icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.2} />
                    </div>
                    <div className="mt-2 sm:mt-3 font-bold text-[12px] sm:text-[13px] text-[color:var(--color-ink-900)]">{b.t}</div>
                    <div className="text-[10px] sm:text-[11px] text-[color:var(--color-ink-500)] mt-0.5 sm:mt-1 leading-tight">{b.s}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 右 7 列: 4 个理由卡 + 时间轴式排布 */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* 时间轴淡灰竖线（贯穿 4 条理由） */}
                <span className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-[color:var(--color-ink-200)]" />

                <div className="space-y-3 sm:space-y-4">
                  {t.home.whyPoints.map((p, i) => (
                    <div key={i} className="relative pl-10 sm:pl-11 md:pl-14">
                      {/* 数字圈 */}
                      <span className="absolute left-0 top-1 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-[color:var(--color-ink-900)] bg-[color:var(--color-warm)] flex items-center justify-center">
                        <span className="font-display font-black text-[12px] sm:text-[14px]">{i + 1}</span>
                      </span>
                      <div className="card-paper p-4 sm:p-5 md:p-6 hover:-translate-y-0.5 transition-transform">
                        <p className="text-[13.5px] sm:text-[14.5px] md:text-[15.5px] text-[color:var(--color-ink-800)] leading-relaxed font-medium">
                          {p}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 双语&到岗 承诺 */}
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                <div className="card-paper p-3 sm:p-5 flex items-center gap-3 sm:gap-4">
                  <Languages className="w-6 h-6 sm:w-8 sm:h-8 text-[color:var(--color-amber-600)]" strokeWidth={1.8} />
                  <div>
                    <div className="font-bold text-[color:var(--color-ink-900)] text-xs sm:text-sm">{lang === 'zh' ? '中 / 法 双语' : 'Bilingual'}</div>
                    <div className="text-[10px] sm:text-xs text-[color:var(--color-ink-500)] mt-0.5">{lang === 'zh' ? '沟通零障碍' : 'Bilingual service'}</div>
                  </div>
                </div>
                <div className="card-paper p-3 sm:p-5 flex items-center gap-3 sm:gap-4">
                  <CalendarCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[color:var(--color-amber-600)]" strokeWidth={1.8} />
                  <div>
                    <div className="font-bold text-[color:var(--color-ink-900)] text-xs sm:text-sm">{lang === 'zh' ? '到店看车' : 'On-site visit'}</div>
                    <div className="text-[10px] sm:text-xs text-[color:var(--color-ink-500)] mt-0.5">{lang === 'zh' ? '可实地考察' : 'Visit us anytime'}</div>
                  </div>
                </div>
                <div className="card-paper p-3 sm:p-5 flex items-center gap-3 sm:gap-4">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-[color:var(--color-amber-600)]" strokeWidth={1.8} />
                  <div>
                    <div className="font-bold text-[color:var(--color-ink-900)] text-xs sm:text-sm">{lang === 'zh' ? '本地服务' : 'Local in MG'}</div>
                    <div className="text-[10px] sm:text-xs text-[color:var(--color-ink-500)] mt-0.5">{lang === 'zh' ? '塔马塔夫园区' : 'Toamasina II'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA 条: 有购车租仓需求 立即联系                           */}
      {/* ========================================================= */}
      <section className="relative bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
             style={{ backgroundImage: `url(${warehouseGate})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-14 md:py-16 lg:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
          <div>
            <div className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-black opacity-70 mb-2 sm:mb-3">
              {lang === 'zh' ? 'GET IN TOUCH · CONTACT' : 'CONTACTEZ-NOUS'}
            </div>
            <h2 className="font-display text-[24px] sm:text-[28px] md:text-[40px] font-black leading-tight max-w-3xl">
              {t.home.ctaTitle}
            </h2>
            <p className="mt-2 sm:mt-3 text-[13px] sm:text-[15px] md:text-[17px] opacity-80 font-medium">
              {t.home.ctaDesc}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-3">
            <a href={`tel:${t.contact.phones[0].tel}`} className="btn btn-primary text-sm sm:text-base !py-3 sm:!py-[14px] justify-center">
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              {t.common.hotline} · {t.contact.phones[0].display}
            </a>
            <Link to="/contact" className="btn btn-outline !text-[color:var(--color-ink-900)] !border-[color:var(--color-ink-900)] hover:!bg-[color:var(--color-ink-900)] hover:!text-white text-sm sm:text-base !py-3 sm:!py-[14px] justify-center">
              {t.common.contactNow}
              <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
