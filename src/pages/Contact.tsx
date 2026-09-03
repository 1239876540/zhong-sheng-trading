import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Phone, MapPin, Clock, MessageCircle,
  Copy, PhoneCall, Users, Truck, Handshake, ChevronRight,
  Warehouse, Wrench,
} from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import companyPoster from '../assets/images/company-poster.jpg'
import companyLogo from '../assets/images/company-logo.png'
import warehouseGate from '../assets/images/warehouse-gate.jpg'

type ContactItem = { label: string; value: string; tel?: string; copyKey: string }

export default function Contact() {
  const { t, lang } = useI18n()
  const [copied, setCopied] = useState<string>('')

  const copy = (val: string, key: string) => {
    navigator.clipboard?.writeText(val).then(() => {
      setCopied(key)
      setTimeout(() => setCopied(''), 1500)
    })
  }

  const groups: {
    icon: any
    no: string
    title: string
    subtitle: string
    accent: 'amber' | 'emerald' | 'ink' | 'rose'
    items: ContactItem[]
  }[] = [
    {
      icon: PhoneCall,
      no: '01',
      title: t.contact.phonesTitle,
      subtitle: lang === 'zh' ? '直接拨打，最快速响应' : 'Appelez-nous directement',
      accent: 'amber',
      items: t.contact.phones.map((p) => ({
        label: p.role, value: p.display, tel: p.tel, copyKey: 'tel-' + p.tel,
      })),
    },
    {
      icon: MessageCircle,
      no: '02',
      title: t.contact.wechatTitle,
      subtitle: lang === 'zh' ? '加微信，发图片/语音沟通' : 'WeChat pour photos & audios',
      accent: 'emerald',
      items: t.contact.wechat.map((p) => ({
        label: p.role, value: p.id, copyKey: 'wx-' + p.id,
      })),
    },
    {
      icon: MapPin,
      no: '03',
      title: t.contact.addressTitle,
      subtitle: lang === 'zh' ? '欢迎来现场看车/参观仓库' : 'Visites sur place bienvenues',
      accent: 'ink',
      items: [
        { label: t.contact.address.zhLabel, value: t.contact.address.zh, copyKey: 'addr-zh' },
        { label: t.contact.address.frLabel, value: t.contact.address.fr, copyKey: 'addr-fr' },
        { label: t.contact.address.landmarkLabel, value: t.contact.address.landmark, copyKey: 'addr-lm' },
      ],
    },
    {
      icon: Clock,
      no: '04',
      title: t.contact.hoursTitle,
      subtitle: lang === 'zh' ? '紧急情况请拨打电话' : 'Urgence : appelez le téléphone',
      accent: 'rose',
      items: t.contact.hours.map((h) => ({
        label: h.day, value: h.time, copyKey: 'hr-' + h.day,
      })),
    },
  ]

  const accentMap: Record<string, {
    solid: string; text: string; ring: string; bg: string;
    textHover: string; copyRest: string; copyHover: string;
  }> = {
    amber: {
      solid: 'bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)]',
      text: 'text-[color:var(--color-amber-500)]',
      ring: 'ring-[color:var(--color-amber-500)]/20',
      bg: 'bg-[color:var(--color-amber-500)]/12',
      textHover: 'hover:text-[color:var(--color-amber-500)]',
      copyRest: 'bg-white ring-1 ring-[color:var(--color-ink-900)]/10 text-[color:var(--color-ink-900)]/70',
      copyHover: 'hover:bg-[color:var(--color-amber-500)] hover:ring-transparent hover:text-[color:var(--color-ink-900)]',
    },
    emerald: {
      solid: 'bg-emerald-500 text-white',
      text: 'text-emerald-600',
      ring: 'ring-emerald-500/20',
      bg: 'bg-emerald-500/12',
      textHover: 'hover:text-emerald-600',
      copyRest: 'bg-white ring-1 ring-[color:var(--color-ink-900)]/10 text-[color:var(--color-ink-900)]/70',
      copyHover: 'hover:bg-emerald-500 hover:ring-transparent hover:text-white',
    },
    ink: {
      solid: 'bg-[color:var(--color-ink-900)] text-white',
      text: 'text-[color:var(--color-ink-900)]',
      ring: 'ring-[color:var(--color-ink-900)]/20',
      bg: 'bg-[color:var(--color-ink-900)]/8',
      textHover: 'hover:text-[color:var(--color-ink-900)]',
      copyRest: 'bg-white ring-1 ring-[color:var(--color-ink-900)]/10 text-[color:var(--color-ink-900)]/70',
      copyHover: 'hover:bg-[color:var(--color-ink-900)] hover:ring-transparent hover:text-white',
    },
    rose: {
      solid: 'bg-rose-500 text-white',
      text: 'text-rose-600',
      ring: 'ring-rose-500/20',
      bg: 'bg-rose-500/12',
      textHover: 'hover:text-rose-600',
      copyRest: 'bg-white ring-1 ring-[color:var(--color-ink-900)]/10 text-[color:var(--color-ink-900)]/70',
      copyHover: 'hover:bg-rose-500 hover:ring-transparent hover:text-white',
    },
  }

  return (
    <div className="text-[color:var(--color-ink-900)]">

      {/* ========================================================= */}
      {/* HERO                                                       */}
      {/* ========================================================= */}
      <section className="relative min-h-[78vh] overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <img src={warehouseGate} alt="Contact Hero - 中盛贸易实体仓储大门 Toamasina Warehouse Gate" loading="eager" fetchPriority="high" decoding="async" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-ink-900)]/92 via-[color:var(--color-ink-900)]/60 to-[color:var(--color-amber-500)]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-warm)] via-transparent to-transparent" />
        </div>

        <div className="hidden md:block absolute top-28 left-8 lg:left-14 text-white/40 font-mono text-xs tracking-[0.4em]">
          <div className="flex items-center gap-3">
            <span className="w-12 h-px bg-white/30" />
            N° 04 / {lang === 'zh' ? '联系我们 · CONTACT' : 'CONTACT · NOUS REJOINDRE'}
          </div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-36 md:pt-44 pb-24">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-9">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

                <div className="inline-flex items-center gap-3 px-4 py-2 border border-[color:var(--color-amber-500)]/40 bg-[color:var(--color-amber-500)]/10 backdrop-blur-sm text-[color:var(--color-amber-500)] text-xs md:text-sm font-semibold mb-6 md:mb-8">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--color-amber-500)] animate-pulse" />
                  {lang === 'zh' ? 'CONTACT · 7j/7 响应' : 'CONTACT · 7j/7 disponible'}
                </div>

                <h1 className="font-display text-white font-black leading-[0.95] tracking-tight">
                  <span className="block text-[12px] sm:text-[16px] md:text-[20px] font-bold text-[color:var(--color-amber-500)] mb-2 sm:mb-3 md:mb-5 tracking-[0.18em] sm:tracking-[0.22em] uppercase">
                    {lang === 'zh' ? 'TOAMASINA II · MADAGASCAR · 塔马塔夫' : 'SIÈGE : TOAMASINA II · MADAGASCAR'}
                  </span>
                  <span className="block text-[30px] sm:text-[44px] md:text-[68px] lg:text-[88px] leading-[0.98]">
                    {t.contactPage.title}
                  </span>
                  <span className="block text-[24px] sm:text-[36px] md:text-[50px] lg:text-[64px] text-transparent bg-clip-text mt-1 sm:mt-2"
                        style={{ backgroundImage: 'linear-gradient(90deg,#E8A400 0%,#F5F3EE 70%,#E8A400 100%)' }}>
                    {t.contactPage.sub}
                  </span>
                </h1>

                <p className="mt-5 sm:mt-8 md:mt-10 max-w-3xl text-[14px] sm:text-[17px] md:text-[19px] leading-[1.7] sm:leading-[1.85] text-white/80">
                  {t.contactPage.desc}
                </p>

                {/* 快速联系按钮组 */}
                <div className="mt-7 sm:mt-10 md:mt-14 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                  <a href={`tel:${t.contact.phones[0].tel}`}
                     className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)] font-bold hover:bg-[#FFBD1F] transition-colors shadow-xl shadow-[color:var(--color-amber-500)]/25 text-sm sm:text-base">
                    <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                    {t.contact.phones[0].display}
                  </a>
                  <a href="#form"
                     onClick={(e) => {
                       e.preventDefault()
                       copy(t.contact.phones[0].tel, 'hero-tel-' + t.contact.phones[0].tel)
                     }}
                     className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold hover:bg-white hover:text-[color:var(--color-ink-900)] hover:border-white transition-all text-sm sm:text-base cursor-pointer">
                    <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                    {copied === 'hero-tel-' + t.contact.phones[0].tel
                      ? (lang === 'zh' ? '✓ 已复制' : '✓ Copié')
                      : (lang === 'zh' ? '复制电话' : 'Copier')}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* POSTER CARD  公司海报 + 信息概览                           */}
      {/* ========================================================= */}
      <section className="py-14 md:py-20 -mt-6 md:-mt-10 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
          >
            {/* 左 海报大图 */}
            <div className="lg:col-span-7 overflow-hidden rounded-[28px] shadow-[0_30px_80px_-30px_rgba(15,26,45,0.35)] ring-1 ring-[color:var(--color-ink-900)]/8 bg-white relative group">
              <img src={companyPoster} alt="中盛贸易公司官方海报 Zhong Sheng Company Poster" loading="lazy" decoding="async" className="w-full h-full object-cover min-h-[320px] md:min-h-[420px] group-hover:scale-[1.03] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink-900)]/70 via-transparent to-transparent" />
              {/* 印章 */}
              <div className="absolute top-6 right-6 badge-ink rotate-[-5deg]">
                {lang === 'zh' ? '实 体 公 司' : 'SIÈGE RÉEL'}
              </div>
              {/* 左下数据 */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-end justify-between flex-wrap gap-4">
                  <div>
                    <div className="text-white/60 text-xs font-mono tracking-widest mb-1">{t.common.companyFull}</div>
                    <div className="font-display font-black text-white text-2xl md:text-3xl leading-tight">
                      ZHONG SHENG TRADE Co., Ltd.
                    </div>
                  </div>
                  <div className="price-tag text-sm">
                    {t.home.location}
                  </div>
                </div>
              </div>
            </div>

            {/* 右 公司信息 + 统计 */}
            <div className="lg:col-span-5 bg-white rounded-[28px] shadow-[0_30px_80px_-40px_rgba(15,26,45,0.35)] ring-1 ring-[color:var(--color-ink-900)]/8 p-7 md:p-9 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[color:var(--color-amber-500)]/10" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-7">
                  <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-[20px] overflow-hidden shadow-md flex-shrink-0 ring-2 ring-white">
                    <img src={companyLogo} alt="中盛贸易 Logo" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-black text-xl md:text-[22px] leading-tight text-[color:var(--color-ink-900)]">
                      {t.common.companyFull}
                    </div>
                    <div className="text-sm text-[color:var(--color-ink-900)]/55 mt-1 tracking-wide">ZHONG SHENG TRADE Co., Ltd.</div>
                  </div>
                </div>

                <h3 className="font-display font-black text-2xl md:text-[28px] mb-4 leading-tight">
                  {t.contactPage.welcome}
                </h3>
                <p className="text-[15px] md:text-base leading-[1.85] text-[color:var(--color-ink-900)]/65 mb-7">
                  {t.contactPage.welcomeDesc}
                </p>

                {/* 统计 3 卡 */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[
                    { icon: Truck, k: lang === 'zh' ? '在售车型' : 'Modèles', v: '5+' },
                    { icon: Users, k: lang === 'zh' ? '客户覆盖' : 'Clients', v: lang === 'zh' ? '全马' : 'National' },
                    { icon: Handshake, k: lang === 'zh' ? '合作年限' : 'Expérience', v: '5+' },
                  ].map((s, i) => (
                    <div key={i} className="rounded-[18px] p-4 bg-[color:var(--color-warm)]/70 border border-[color:var(--color-ink-900)]/5 text-center">
                      <s.icon className="w-5.5 h-5.5 mx-auto text-[color:var(--color-amber-500)] mb-2" />
                      <div className="font-display font-black text-xl md:text-2xl leading-none text-[color:var(--color-ink-900)]">{s.v}</div>
                      <div className="text-[11px] md:text-xs text-[color:var(--color-ink-900)]/60 mt-1.5 leading-tight">{s.k}</div>
                    </div>
                  ))}
                </div>
              </div>

              <a href={`tel:${t.contact.phones[0].tel}`}
                 onClick={(e) => {
                   const rect = e.currentTarget.getBoundingClientRect()
                   e.currentTarget.style.setProperty('--rx', `${e.clientX - rect.left}px`)
                   e.currentTarget.style.setProperty('--ry', `${e.clientY - rect.top}px`)
                 }}
                 className="btn-primary btn-ripple inline-flex items-center justify-center gap-2 w-full text-base relative">
                <PhoneCall className="w-5 h-5" /> {t.contact.phones[0].display}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT GRID  四种联系方式 · 蓝图角规（正规企业联系卡）   */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-14 md:py-20 relative bg-corners">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

          <div className="flex items-end justify-between flex-wrap gap-4 mb-8 sm:mb-10 md:mb-12 md:mb-16">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[color:var(--color-amber-500)] font-bold text-sm tracking-[0.3em]">— N° 01</span>
                <span className="h-px w-12 md:w-20 bg-[color:var(--color-ink-900)]/30" />
              </div>
              <h2 className="font-display text-[28px] sm:text-[36px] md:text-[52px] font-black leading-[1.05] tracking-tight">
                {t.contactPage.wayTitle}
                <span className="block text-sm md:text-lg text-[color:var(--color-ink-900)]/50 font-sans font-medium mt-1 md:mt-2 md:mt-3 tracking-widest">
                  4 WAYS TO REACH US
                </span>
              </h2>
              <p className="mt-3 sm:mt-4 text-[color:var(--color-ink-900)]/60 text-[13px] sm:text-[15px] md:text-base">{t.contactPage.wayDesc}</p>
            </div>
            <div className="badge-ink hidden md:block">
              {lang === 'zh' ? '中 · 法 双 语' : 'ZH · FR'}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {groups.map((g, i) => {
              const Icon = g.icon
              const a = accentMap[g.accent]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative group bg-white rounded-[20px] sm:rounded-[26px] p-5 sm:p-6 md:p-7 md:p-8 ring-1 ring-[color:var(--color-ink-900)]/8 hover:ring-[color:var(--color-amber-500)]/30 hover:shadow-[0_20px_60px_-20px_rgba(15,26,45,0.25)] transition-all duration-400 overflow-hidden"
                >
                  {/* 背景装饰 */}
                  <div className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                       style={{ backgroundImage: `radial-gradient(circle at 100% 0%, ${g.accent === 'amber' ? 'rgba(232,164,0,0.1)' : 'rgba(15,26,45,0.05)'} 0%, transparent 70%)` }} />

                  <div className="relative">
                    {/* 顶部 Header */}
                    <div className="flex items-start gap-5 mb-7">
                      <div className="relative">
                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ring-4 ${a.ring} ${a.solid} shadow-lg`}>
                          <Icon className="w-7 h-7 md:w-7.5 md:h-7.5" strokeWidth={2.2} />
                        </div>
                        <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full ${a.bg} ${a.text} flex items-center justify-center font-mono text-[11px] font-bold ring-2 ring-white shadow`}>
                          {g.no}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 pt-1">
                        <div className="font-mono text-[11px] md:text-xs tracking-widest text-[color:var(--color-ink-900)]/45 mb-1">
                          CONTACT · {g.no}
                        </div>
                        <h3 className="font-display font-black text-xl md:text-[24px] leading-tight mb-1.5">
                          {g.title}
                        </h3>
                        <div className="text-sm md:text-[15px] text-[color:var(--color-ink-900)]/55 leading-snug">
                          {g.subtitle}
                        </div>
                      </div>
                    </div>

                    {/* 项目列表 */}
                    <div className="space-y-3">
                      {g.items.map((it) => {
                        const isPhone = !!it.tel
                        const isCopy = copied === it.copyKey
                        return (
                          <div key={it.copyKey}
                               className="flex items-start gap-4 p-4 rounded-[18px] bg-[color:var(--color-warm)]/70 hover:bg-white hover:ring-1 hover:ring-[color:var(--color-amber-500)]/30 transition-all group/item">
                            <div className="flex-1 min-w-0">
                              <div className="text-[11px] md:text-xs text-[color:var(--color-ink-900)]/50 font-semibold mb-1 tracking-wide uppercase">
                                {it.label}
                              </div>
                              {isPhone ? (
                                <a href={`tel:${it.tel}`}
                                   className={`text-xl md:text-[22px] font-display font-black text-[color:var(--color-ink-900)] ${a.textHover} transition-colors leading-tight break-all`}>
                                  {it.value}
                                </a>
                              ) : (
                                <div className="text-lg md:text-xl font-bold text-[color:var(--color-ink-900)]/90 break-all leading-snug">
                                  {it.value}
                                </div>
                              )}
                            </div>
                            <div className="flex gap-2 flex-shrink-0 pt-1">
                              {isPhone && (
                                <a href={`tel:${it.tel}`}
                                   title={lang === 'zh' ? '拨打' : 'Appeler'}
                                   onClick={(e) => {
                                     const rect = e.currentTarget.getBoundingClientRect()
                                     e.currentTarget.style.setProperty('--rx', `${e.clientX - rect.left}px`)
                                     e.currentTarget.style.setProperty('--ry', `${e.clientY - rect.top}px`)
                                   }}
                                   className={`btn-ripple w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all ${a.solid}`}>
                                  <Phone className="w-4 h-4" />
                                </a>
                              )}
                              <button
                                onClick={(e) => {
                                  const rect = e.currentTarget.getBoundingClientRect()
                                  e.currentTarget.style.setProperty('--rx', `${e.clientX - rect.left}px`)
                                  e.currentTarget.style.setProperty('--ry', `${e.clientY - rect.top}px`)
                                  copy(it.value, it.copyKey)
                                }}
                                title={lang === 'zh' ? '复制' : 'Copier'}
                                className={`btn-ripple w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all ${
                                  isCopy
                                    ? 'bg-emerald-500 text-white'
                                    : `${a.copyRest} ${a.copyHover}`
                                }`}
                                style={isCopy ? {} : undefined}
                              >
                                {isCopy ? <span className="w-4 h-4 text-xs font-black leading-none inline-flex items-center justify-center">✓</span> : <Copy className="w-4 h-4" />}
                              </button>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* DIRECT CONTACT · 3 STEPS + 3 SERVICE CARDS                    */}
      {/* ========================================================= */}
      <section id="form" className="py-14 md:py-24 scroll-mt-24 bg-gradient-to-b from-[color:var(--color-warm)]/70 via-white to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

          <div className="flex items-end justify-between flex-wrap gap-4 mb-12 md:mb-16">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[color:var(--color-amber-500)] font-bold text-sm tracking-[0.3em]">— N° 02</span>
                <span className="h-px w-12 md:w-20 bg-[color:var(--color-ink-900)]/30" />
              </div>
              <h2 className="font-display text-[36px] md:text-[52px] font-black leading-[1.05] tracking-tight">
                {t.contactPage.formTitle}
                <span className="block text-base md:text-lg text-[color:var(--color-ink-900)]/50 font-sans font-medium mt-2 md:mt-3 tracking-widest">
                  TÉLÉPHONE · WECHAT · SUR PLACE
                </span>
              </h2>
            </div>
          </div>

          {/* 顶部说明条 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-14 relative overflow-hidden rounded-[28px] p-7 md:p-9 bg-gradient-to-br from-[color:var(--color-ink-900)] via-[color:var(--color-ink-900)] to-[#1e2d48] text-white shadow-[0_30px_80px_-40px_rgba(15,26,45,0.6)]">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[color:var(--color-amber-500)]/15" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#2f4a78]/40" />
            <div className="absolute top-6 right-6 badge-ink !bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)] rotate-[5deg]">
              {lang === 'zh' ? '直 达 客 服 · 专 人 对 接' : 'SERVICE DÉDIÉ · RÉPONSE RAPIDE'}
            </div>
            <div className="relative grid md:grid-cols-[auto_1fr] gap-6 items-center">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-[22px] bg-[color:var(--color-amber-500)]/15 border border-[color:var(--color-amber-500)]/25 flex items-center justify-center">
                <PhoneCall className="w-8 h-8 md:w-10 md:h-10 text-[color:var(--color-amber-500)]" strokeWidth={2.1}/>
              </div>
              <div>
                <h3 className="font-display font-black text-2xl md:text-[30px] leading-tight mb-2">
                  {lang === 'zh' ? '电话 · 微信 · 到访 —— 专业顾问全程对接' : 'Téléphone · WeChat · Sur place — un conseiller dédié'}
                </h3>
                <p className="text-white/65 text-[15px] md:text-base leading-relaxed max-w-3xl">
                  {t.contactPage.formDesc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* STEP 1-2-3 联系流程 */}
          <div className="grid md:grid-cols-3 gap-5 lg:gap-7 mb-14 md:mb-16">
            {/* STEP ① 致电 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0 }}
              className="relative group bg-white rounded-[26px] p-7 md:p-8 ring-1 ring-[color:var(--color-ink-900)]/8 shadow-lg hover:shadow-[0_20px_60px_-20px_rgba(15,26,45,0.3)] transition-all overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[color:var(--color-amber-500)]/12" />
              <div className="absolute top-5 right-5 font-display font-black text-5xl md:text-6xl text-[color:var(--color-ink-900)]/[0.07] leading-none select-none pointer-events-none">01</div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-[color:var(--color-amber-500)]/12 text-[color:var(--color-amber-500)] flex items-center justify-center mb-5">
                  <PhoneCall className="w-7 h-7" strokeWidth={2.2}/>
                </div>
                <h4 className="font-display font-black text-2xl md:text-[26px] leading-tight mb-2">
                  {lang === 'zh' ? '第 ① 步：拨打电话' : 'Étape ① · Appelez'}
                </h4>
                <p className="text-sm md:text-[15px] text-[color:var(--color-ink-900)]/55 leading-relaxed mb-5">
                  {lang === 'zh' ? '销售顾问 10 分钟内接听，工作日 8h-18h。' : 'Un commercial répond en moins de 10 min · Lun–Sam 8h–18h.'}
                </p>
                <div className="space-y-2.5">
                  {t.contact.phones.slice(0, 2).map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`}
                       className="flex items-center justify-between p-3.5 rounded-[16px] bg-[color:var(--color-amber-500)]/8 border border-[color:var(--color-amber-500)]/20 hover:bg-[color:var(--color-amber-500)]/15 transition-colors">
                      <div className="min-w-0 pr-3">
                        <div className="text-[11px] font-bold text-[color:var(--color-amber-500)] tracking-widest mb-0.5">{p.role}</div>
                        <div className="font-mono font-black text-lg md:text-xl text-[color:var(--color-ink-900)] break-all leading-snug">{p.display}</div>
                      </div>
                      <Phone className="w-4.5 h-4.5 text-[color:var(--color-amber-500)]" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* STEP ② 加微信 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.08 }}
              className="relative group bg-white rounded-[26px] p-7 md:p-8 ring-1 ring-[color:var(--color-ink-900)]/8 shadow-lg hover:shadow-[0_20px_60px_-20px_rgba(16,185,129,0.25)] transition-all overflow-hidden">
              <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-emerald-500/10" />
              <div className="absolute top-5 right-5 font-display font-black text-5xl md:text-6xl text-[color:var(--color-ink-900)]/[0.07] leading-none select-none pointer-events-none">02</div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/12 text-emerald-600 flex items-center justify-center mb-5">
                  <MessageCircle className="w-7 h-7" strokeWidth={2.2}/>
                </div>
                <h4 className="font-display font-black text-2xl md:text-[26px] leading-tight mb-2">
                  {lang === 'zh' ? '第 ② 步：加微信' : 'Étape ② · WeChat'}
                </h4>
                <p className="text-sm md:text-[15px] text-[color:var(--color-ink-900)]/55 leading-relaxed mb-5">
                  {lang === 'zh' ? '可发图片、报价单、语音，沟通更直观。' : 'Envoyez photos, devis et vocaux pour plus de clarté.'}
                </p>
                <div className="space-y-2.5">
                  {t.contact.wechat.map((w) => {
                    const k = 'step-wx-' + w.id
                    const ok = copied === k
                    return (
                      <div key={w.id} className="flex items-center justify-between p-3.5 rounded-[16px] bg-emerald-500/8 border border-emerald-500/15 hover:bg-emerald-500/15 transition-colors">
                        <div className="min-w-0 pr-3">
                          <div className="text-[11px] font-bold text-emerald-700 tracking-widest mb-0.5">{w.role}</div>
                          <div className="font-mono font-black text-lg md:text-xl text-[color:var(--color-ink-900)] break-all leading-snug">{w.id}</div>
                        </div>
                        <button onClick={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect()
                            e.currentTarget.style.setProperty('--rx', `${e.clientX - rect.left}px`)
                            e.currentTarget.style.setProperty('--ry', `${e.clientY - rect.top}px`)
                            copy(w.id, k)
                          }}
                          className={`btn-ripple px-4 py-2 rounded-[12px] text-xs md:text-sm font-bold transition-all ${ok ? 'bg-emerald-500 text-white shadow-lg' : 'bg-emerald-500/15 text-emerald-700 hover:bg-emerald-500 hover:text-white shadow-sm'}`}>
                          {ok ? (lang === 'zh' ? '✓ 已复制' : '✓ OK') : (lang === 'zh' ? '复制' : 'Copier')}
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* STEP ③ 到访 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.16 }}
              className="relative group bg-white rounded-[26px] p-7 md:p-8 ring-1 ring-[color:var(--color-ink-900)]/8 shadow-lg hover:shadow-[0_20px_60px_-20px_rgba(15,26,45,0.3)] transition-all overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[color:var(--color-ink-900)]/8" />
              <div className="absolute top-5 right-5 font-display font-black text-5xl md:text-6xl text-[color:var(--color-ink-900)]/[0.07] leading-none select-none pointer-events-none">03</div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-[color:var(--color-ink-900)]/8 text-[color:var(--color-ink-900)] flex items-center justify-center mb-5">
                  <MapPin className="w-7 h-7" strokeWidth={2.2}/>
                </div>
                <h4 className="font-display font-black text-2xl md:text-[26px] leading-tight mb-2">
                  {lang === 'zh' ? '第 ③ 步：到访公司' : 'Étape ③ · Sur place'}
                </h4>
                <p className="text-sm md:text-[15px] text-[color:var(--color-ink-900)]/55 leading-relaxed mb-5">
                  {lang === 'zh' ? '欢迎到塔马塔夫现场看车 / 参观仓库，建议提前 1 小时预约。' : 'Visitez Toamasina pour voir les véhicules et entrepôts (sur rendez-vous).'}
                </p>
                <div className="p-4 rounded-[18px] bg-[color:var(--color-ink-900)]/5 border border-[color:var(--color-ink-900)]/10 mb-3 space-y-2.5">
                  <div>
                    <div className="text-[11px] font-bold text-[color:var(--color-ink-900)]/60 tracking-widest mb-0.5">{t.contact.address.zhLabel}</div>
                    <div className="text-sm md:text-[15px] text-[color:var(--color-ink-900)] leading-relaxed">{t.contact.address.zh}</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[color:var(--color-ink-900)]/60 tracking-widest mb-0.5">{t.contact.address.landmarkLabel}</div>
                    <div className="text-sm md:text-[15px] text-[color:var(--color-ink-900)] leading-relaxed">{t.contact.address.landmark}</div>
                  </div>
                </div>
                <button onClick={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect()
                          e.currentTarget.style.setProperty('--rx', `${e.clientX - rect.left}px`)
                          e.currentTarget.style.setProperty('--ry', `${e.clientY - rect.top}px`)
                          copy(t.contact.address.zh, 'step-addr-zh')
                        }}
                        className={`btn-ripple w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[14px] text-sm md:text-base font-bold transition-all ${copied === 'step-addr-zh' ? 'bg-[color:var(--color-ink-900)] text-white shadow-lg' : 'bg-[color:var(--color-ink-900)]/8 text-[color:var(--color-ink-900)] hover:bg-[color:var(--color-ink-900)] hover:text-white shadow-sm'}`}>
                          {copied === 'step-addr-zh' ? '✓ ' + (lang === 'zh' ? '地址已复制' : 'Adresse copiée') : <><Copy className="w-4 h-4" />{lang === 'zh' ? '复制地址到剪贴板' : "Copier l'adresse"}</>}
                        </button>
              </div>
            </motion.div>
          </div>

          {/* 3 服务快捷入口（同高） */}
          <div className="grid md:grid-cols-3 gap-5 lg:gap-7 items-stretch">
            {/* 01 看车 */}
            <Link to="/services#vehicles"
                  className="group block relative overflow-hidden rounded-[24px] p-7 md:p-8 bg-[color:var(--color-ink-900)] text-white shadow-xl hover:shadow-[0_20px_60px_-20px_rgba(15,26,45,0.65)] transition-all flex flex-col">
              <div className="absolute -right-6 -top-6 w-40 h-40 rounded-full bg-[color:var(--color-amber-500)]/20" />
              <div className="absolute top-5 right-5 text-xs font-bold tracking-widest text-white/40">01</div>
              <Truck className="w-12 h-12 mb-6 text-[color:var(--color-amber-500)]" />
              <h4 className="font-display font-black text-2xl md:text-[28px] leading-tight mb-3">
                {lang === 'zh' ? '查看在售车型' : 'Nos véhicules'}
              </h4>
              <p className="text-white/70 text-sm md:text-[15px] leading-relaxed mb-6 flex-1">
                {lang === 'zh' ? 'XCMG 重卡 / 开瑞轻卡 / 面包车 —— 全部现车可提，价格透明，附详细参数与库存。' : 'XCMG / KARRY / fourgons · Tous disponibles · Prix et fiches techniques en clair.'}
              </p>
              <div className="inline-flex items-center gap-2 text-[color:var(--color-amber-500)] font-bold group-hover:gap-3 transition-all self-start">
                {t.common.seeMore} <ChevronRight className="w-5 h-5" />
              </div>
            </Link>

            {/* 02 仓库/车位 */}
            <Link to="/services#warehouse"
                  className="group block relative overflow-hidden rounded-[24px] p-7 md:p-8 bg-gradient-to-br from-[color:var(--color-amber-500)] via-[#FFBD1F] to-[#F3A500] text-[color:var(--color-ink-900)] shadow-[0_20px_60px_-20px_rgba(232,164,0,0.6)] hover:shadow-[0_25px_70px_-20px_rgba(232,164,0,0.8)] transition-all flex flex-col">
              <div className="absolute -left-6 -bottom-6 w-40 h-40 rounded-full bg-[color:var(--color-ink-900)]/10" />
              <div className="absolute top-5 right-5 text-xs font-bold tracking-widest text-[color:var(--color-ink-900)]/60">02</div>
              <div className="w-14 h-14 rounded-2xl bg-[color:var(--color-ink-900)]/10 flex items-center justify-center mb-6">
                <Warehouse className="w-7 h-7" />
              </div>
              <h4 className="font-display font-black text-2xl md:text-[28px] leading-tight mb-3">
                {lang === 'zh' ? '仓库 / 车位出租' : 'Entrepôts / Parking'}
              </h4>
              <p className="text-[color:var(--color-ink-900)]/80 text-sm md:text-[15px] leading-relaxed mb-6 font-medium flex-1">
                {lang === 'zh' ? '20 000 ㎡ + 标准园区仓库 · 大型停车场 · 租期灵活，塔马塔夫核心区。' : '20 000 m² + · Parcings · Baux flexibles · Zone Toamasina centre.'}
              </p>
              <div className="inline-flex items-center gap-2 font-bold group-hover:gap-3 transition-all self-start">
                {t.common.seeMore} <ChevronRight className="w-5 h-5" />
              </div>
            </Link>

            {/* 03 配件/合作 */}
            <Link to="/services#parts"
                  className="group block relative overflow-hidden rounded-[24px] p-7 md:p-8 bg-white ring-1 ring-[color:var(--color-ink-900)]/8 shadow-xl hover:shadow-[0_20px_60px_-20px_rgba(15,26,45,0.18)] transition-all flex flex-col">
              <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-emerald-500/10" />
              <div className="absolute top-5 right-5 text-xs font-bold tracking-widest text-[color:var(--color-ink-900)]/40">03</div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/12 text-emerald-600 flex items-center justify-center">
                  <Wrench className="w-7 h-7" strokeWidth={2.1}/>
                </div>
              </div>
              <h4 className="font-display font-black text-2xl md:text-[28px] leading-tight mb-3">
                {lang === 'zh' ? '配件采购 / 长期合作' : 'Pièces · Partenariat'}
              </h4>
              <p className="text-[color:var(--color-ink-900)]/60 text-sm md:text-[15px] leading-relaxed mb-6 flex-1">
                {lang === 'zh' ? '全车原厂/副厂配件 8 大类常备；大客户、长期租赁、配件批量订单欢迎直接加微信洽谈。' : '8 catégories de pièces · Commandes en gros et partenariat long terme → WeChat.'}
              </p>
              <div className="pt-4 border-t border-[color:var(--color-ink-900)]/8 flex items-center gap-3 text-xs md:text-sm text-[color:var(--color-ink-900)]/55 leading-snug">
                <Users className="w-4.5 h-4.5 flex-shrink-0 text-[color:var(--color-amber-500)]" />
                <span>
                  {lang === 'zh' ? '配件、维修、长期客户建议优先加微信。' : 'Pièces, réparations, partenariat : WeChat en priorité.'}
                </span>
              </div>
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}
