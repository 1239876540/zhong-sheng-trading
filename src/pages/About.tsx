import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Target, Award, Truck, Globe, Briefcase, Handshake, ShieldCheck, Languages, Building2, Phone, ChevronRight } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import companyPoster from '../assets/images/company-poster.jpg'
import companyLogo from '../assets/images/company-logo.png'
import warehouseGate from '../assets/images/warehouse-gate.jpg'
import dumpOfficial from '../assets/images/xcmg-dump-6x4-official.jpg'
import aiTradeOffice from '../assets/images/ai-trade-office.jpg'
import tractorOfficial from '../assets/images/xcmg-tractor-6x4-official.jpg'

export default function About() {
  const { t, lang } = useI18n()

  const advantages = [
    { icon: Truck, no: '01', titles: { zh: '车源充足', fr: 'Véhicules en stock' }, descs: { zh: '多种车型现车供应，满足不同运输与工程场景需求', fr: 'Large gamme de véhicules disponibles immédiatement' } },
    { icon: Globe, no: '02', titles: { zh: '本地实体', fr: 'Implantation locale' }, descs: { zh: '马达加斯加本土实体运营，扎根塔马塔夫多年', fr: 'Entreprise locale implantée durablement à Toamasina' } },
    { icon: Briefcase, no: '03', titles: { zh: '专业团队', fr: 'Équipe pro' }, descs: { zh: '经验丰富的销售与售后团队，全程贴心服务', fr: 'Équipe expérimentée et à votre écoute' } },
    { icon: Handshake, no: '04', titles: { zh: '诚信为本', fr: 'Intégrité' }, descs: { zh: '诚信经营，客户至上，老客户口碑相传', fr: 'Relation client durable et transparente' } },
    { icon: ShieldCheck, no: '05', titles: { zh: '品质保证', fr: 'Qualité garantie' }, descs: { zh: '徐工XCMG官方合作渠道，品质售后双保障', fr: 'Partenaire officiel XCMG, fiabilité assurée' } },
    { icon: Languages, no: '06', titles: { zh: '双语服务', fr: 'Service bilingue' }, descs: { zh: '中文、法语双语服务，沟通零障碍', fr: 'Service Chinois / Français sans barrière' } },
  ]

  const pillars = [
    { icon: Target, titleZh: '企业使命', titleFr: 'Notre Mission', descZh: '为马达加斯加的基础设施建设与物流运输行业，提供高性价比的中国工程车辆、仓储配套与一体化服务，助力客户事业发展。', descFr: 'Fournir des véhicules de chantier et des solutions logistiques fiables et rentables pour accompagner le développement de Madagascar.' },
    { icon: Award, titleZh: '核心价值', titleFr: 'Nos Valeurs', descZh: '诚信务实——言出必行，报价透明，不做一锤子买卖；长期主义——把客户当伙伴，追求复购与口碑；专业专注——深耕汽车与仓储，拒绝贪大求全。', descFr: 'Intégrité, transparence et relations durables. Nous traitons nos clients comme des partenaires sur le long terme, pas comme des transactions.' },
    { icon: Building2, titleZh: '企业愿景', titleFr: 'Notre Vision', descZh: '成为马达加斯加最值得信赖的中国工程车辆供应商与综合仓储服务商，让“中盛”成为岛上家喻户晓的口碑品牌。', descFr: 'Devenir le fournisseur chinois de véhicules industriels et le prestataire logistique le plus fiable de Madagascar.' },
  ]

  const milestones = [
    { year: '20XX', titleZh: '公司成立', titleFr: 'Fondation', descZh: '在马达加斯加塔马塔夫注册成立中盛贸易有限公司。', descFr: 'Création de ZHONG SHENG TRADE à Toamasina, Madagascar.' },
    { year: '20XX', titleZh: 'XCMG合作', titleFr: 'XCMG', descZh: '与徐工集团建立正式合作关系，成为XCMG车型授权经销商。', descFr: 'Partenariat officiel avec XCMG en tant que distributeur agréé.' },
    { year: '20XX', titleZh: '仓储扩建', titleFr: 'Expansion', descZh: '仓储园区扩建至 20000㎡+，配套大型停车场，服务能力跃升。', descFr: 'Extension du parc logistique à plus de 20 000 m² + parking.' },
    { year: '20XX', titleZh: '服务升级', titleFr: 'Service+', descZh: '建立配件中心与售后团队，形成"整车+仓储+配件+停车"一体化能力。', descFr: 'Service unifié : véhicules + entrepôts + pièces + parking.' },
  ]

  return (
    <div className="text-[color:var(--color-ink-900)]">

      {/* ========================================================= */}
      {/* SECTION HEADER  公司介绍头图                                */}
      {/* ========================================================= */}
      <section className="relative min-h-[78vh] overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <img src={warehouseGate} alt="中盛贸易仓储大门（About Hero 实景图）" loading="eager" fetchPriority="high" decoding="async" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-ink-900)]/88 via-[color:var(--color-ink-900)]/55 to-[color:var(--color-ink-900)]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-warm)] via-transparent to-transparent" />
        </div>

        {/* 编号装饰 */}
        <div className="hidden md:block absolute top-28 left-8 lg:left-14 text-white/40 font-mono text-xs tracking-[0.4em]">
          <div className="flex items-center gap-3">
            <span className="w-12 h-px bg-white/30" />
            N° 02 / {lang === 'zh' ? '关于中盛 · ABOUT US' : 'À PROPOS · ABOUT US'}
          </div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-36 md:pt-44 pb-24">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-9">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

                <div className="inline-flex items-center gap-3 px-4 py-2 border border-[color:var(--color-amber-500)]/40 bg-[color:var(--color-amber-500)]/10 backdrop-blur-sm text-[color:var(--color-amber-500)] text-xs md:text-sm font-semibold mb-6 md:mb-8">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--color-amber-500)] animate-pulse" />
                  {t.about.title} · {t.home.trustCard}
                </div>

                <h1 className="font-display text-white font-black leading-[0.95] tracking-tight">
                  <span className="block text-[12px] sm:text-[16px] md:text-[20px] font-bold text-[color:var(--color-amber-500)] mb-2 sm:mb-3 md:mb-5 tracking-[0.18em] sm:tracking-[0.22em] uppercase">
                    MADAGASCAR · TOAMASINA II · ZONES INDUSTRIELLES
                  </span>
                  <span className="block text-[30px] sm:text-[44px] md:text-[68px] lg:text-[84px]">
                    {lang === 'zh' ? '关于' : 'À propos de'}
                  </span>
                  <span className="block text-[32px] sm:text-[48px] md:text-[76px] lg:text-[94px] text-transparent bg-clip-text mt-1"
                        style={{ backgroundImage: 'linear-gradient(90deg,#E8A400 0%,#F5F3EE 60%,#E8A400 100%)' }}>
                    {lang === 'zh' ? '中盛贸易' : 'ZHONG SHENG'}
                  </span>
                </h1>

                <p className="mt-5 sm:mt-8 md:mt-10 max-w-3xl text-[14px] sm:text-[17px] md:text-[19px] leading-[1.7] sm:leading-[1.85] text-white/80">
                  {t.about.desc}
                </p>

                {/* 一行信任数据 */}
                <div className="mt-7 sm:mt-10 md:mt-14 grid grid-cols-3 max-w-2xl gap-2 sm:gap-3 md:gap-6">
                  {[
                    { k: lang === 'zh' ? '业务年限' : 'Années', v: '5+', sub: lang === 'zh' ? '本土深耕' : 'Local' },
                    { k: lang === 'zh' ? '合作客户' : 'Clients', v: '300+', sub: lang === 'zh' ? '全马覆盖' : 'National' },
                    { k: lang === 'zh' ? '仓储面积' : 'Surface', v: '2万㎡', sub: lang === 'zh' ? '标准园区' : 'Parc Pro' },
                  ].map((s, i) => (
                    <div key={i} className="border-l-2 border-[color:var(--color-amber-500)]/70 pl-2 sm:pl-3 md:pl-5">
                      <div className="text-[11px] sm:text-xs md:text-sm text-white/50 mb-0.5 sm:mb-1">{s.k}</div>
                      <div className="font-display font-black text-white text-[20px] sm:text-[26px] md:text-[36px] leading-none">{s.v}</div>
                      <div className="text-[10px] sm:text-[11px] md:text-xs text-[color:var(--color-amber-500)]/90 mt-1 tracking-wider">{s.sub}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* 右列 印章 + LOGO */}
            <div className="hidden lg:flex lg:col-span-3 items-end justify-end">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
                         className="relative">
                {/* LOGO */}
                <div className="w-[200px] h-[200px] rounded-[32px] bg-[color:var(--color-warm)] p-3 shadow-2xl ring-1 ring-white/10">
                  <img src={companyLogo} alt="中盛贸易 圆形 Logo" loading="lazy" decoding="async" className="w-full h-full object-cover rounded-[20px]" />
                </div>
                {/* 印章徽章 */}
                <div className="absolute -top-3 -right-3 badge-ink rotate-[-8deg]">
                  {lang === 'zh' ? '官方合作' : 'OFFICIEL'}
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border border-[color:var(--color-amber-500)]/40 flex items-center justify-center text-[color:var(--color-amber-500)] text-[10px] font-bold tracking-widest rotate-[-12deg]">
                  XCMG · EST. 20XX
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/*  COMPANY STORY  公司故事 / 介绍 · 精密蓝图角规  */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 bg-corners relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

          {/* SECTION 编号标题 */}
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14 md:mb-20">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[color:var(--color-amber-500)] font-bold text-sm tracking-[0.3em]">— N° 01</span>
                <span className="h-px w-12 md:w-20 bg-[color:var(--color-ink-900)]/30" />
              </div>
              <h2 className="font-display text-[36px] md:text-[56px] font-black leading-[1.05] tracking-tight">
                {lang === 'zh' ? '公司介绍' : 'Présentation'}
                <span className="block text-base md:text-lg text-[color:var(--color-ink-900)]/50 font-sans font-medium mt-2 md:mt-3 tracking-widest">
                  ENTREPRISE · PROFILE
                </span>
              </h2>
            </div>
            <div className="badge-ink">
              {lang === 'zh' ? '实 体 公 司' : 'SIÈGE RÉEL'}
            </div>
          </div>

          {/* 双栏：左文字 + 右图片组 */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                       className="lg:col-span-7 space-y-6">
              <div className="space-y-5 text-[16px] md:text-[17px] leading-[1.9] text-[color:var(--color-ink-900)]/85">
                <p className="dropcap">
                  {t.about.p1}
                </p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>

              {/* 清单 */}
              <div className="grid sm:grid-cols-2 gap-3 pt-4">
                {t.about.checkList.map((item, i) => (
                  <div key={item} className="flex items-start gap-3 group p-3.5 rounded-xl border border-[color:var(--color-ink-900)]/8 bg-white/60 hover:bg-white hover:border-[color:var(--color-amber-500)]/40 transition-all">
                    <div className="w-7 h-7 rounded-lg bg-[color:var(--color-amber-500)]/15 text-[color:var(--color-amber-500)] flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span className="text-sm md:text-[15px] text-[color:var(--color-ink-900)]/85 pt-0.5">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 图片组 */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                       className="lg:col-span-5">
              <div className="relative">
                <div className="relative rounded-[24px] overflow-hidden ring-1 ring-[color:var(--color-ink-900)]/10 shadow-[0_30px_80px_-30px_rgba(15,26,45,0.35)]">
                  <img src={companyPoster} alt="中盛贸易公司主视觉海报 - Zhong Sheng Official Poster" loading="lazy" decoding="async" className="w-full aspect-[4/5] object-cover" />
                </div>
                {/* 小图叠加 */}
                <div className="absolute -bottom-6 -left-6 w-36 h-36 md:w-48 md:h-48 rounded-[20px] overflow-hidden ring-4 ring-[color:var(--color-warm)] shadow-2xl">
                  <img src={aiTradeOffice} alt="中盛贸易办公室洽谈区" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-5 -right-5 w-28 h-28 md:w-36 md:h-36 rounded-[20px] overflow-hidden ring-4 ring-[color:var(--color-warm)] shadow-2xl rotate-[4deg]">
                  <img src={dumpOfficial} alt="XCMG 徐工自卸车官方产品图" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                {/* 印章 */}
                <div className="absolute top-4 right-4 badge-ink hidden md:block">
                  {lang === 'zh' ? '实 景 拍 摄' : 'PHOTO RÉELLE'}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/*  PILLARS  使命 · 价值 · 愿景（三大卡片）                     */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 bg-[color:var(--color-ink-900)] text-white relative overflow-hidden">
        {/* 纸面纹路 */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #E8A400 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }} />
        {/* 装饰编号（section 03，移到更靠右+下方，避免与标题冲突） */}
        <div className="absolute -bottom-6 -right-4 font-display text-white/[0.045] text-[120px] md:text-[180px] font-black leading-none pointer-events-none select-none">03</div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

          <div className="flex items-end justify-between flex-wrap gap-4 mb-14 md:mb-20">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[color:var(--color-amber-500)] font-bold text-sm tracking-[0.3em]">— N° 02</span>
                <span className="h-px w-12 md:w-20 bg-white/20" />
              </div>
              <h2 className="font-display text-[36px] md:text-[56px] font-black leading-[1.05] tracking-tight">
                {lang === 'zh' ? '使命 · 价值 · 愿景' : 'Mission · Valeurs · Vision'}
                <span className="block text-base md:text-lg text-white/40 font-sans font-medium mt-2 md:mt-3 tracking-widest">
                  OUR FOUNDATIONS
                </span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative group rounded-[24px] p-8 md:p-10 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[color:var(--color-amber-500)]/40 transition-all duration-500 overflow-hidden shine-sweep tilt-lift"
              >
                {/* 4 个角落装饰 */}
                <span className="absolute top-4 left-4 w-5 h-5 border-l border-t border-[color:var(--color-amber-500)]/40 group-hover:border-[color:var(--color-amber-500)] transition-colors" />
                <span className="absolute top-4 right-4 w-5 h-5 border-r border-t border-[color:var(--color-amber-500)]/40 group-hover:border-[color:var(--color-amber-500)] transition-colors" />
                <span className="absolute bottom-4 left-4 w-5 h-5 border-l border-b border-[color:var(--color-amber-500)]/40 group-hover:border-[color:var(--color-amber-500)] transition-colors" />
                <span className="absolute bottom-4 right-4 w-5 h-5 border-r border-b border-[color:var(--color-amber-500)]/40 group-hover:border-[color:var(--color-amber-500)] transition-colors" />

                {/* 编号角标 */}
                <div className="absolute top-5 right-6 font-display font-black text-5xl md:text-6xl text-white/5 leading-none">0{i + 1}</div>

                {/* 图标 */}
                <div className="relative w-16 h-16 mb-7">
                  <div className="absolute inset-0 rounded-2xl bg-[color:var(--color-amber-500)] opacity-15 rotate-[-8deg] group-hover:rotate-0 transition-transform duration-500" />
                  <div className="relative w-full h-full rounded-2xl bg-[color:var(--color-amber-500)] flex items-center justify-center shadow-[0_10px_30px_-8px_rgba(232,164,0,0.5)]">
                    <p.icon className="w-8 h-8 text-[color:var(--color-ink-900)]" strokeWidth={2.2} />
                  </div>
                </div>

                <div className="font-mono text-xs text-[color:var(--color-amber-500)] tracking-widest mb-3">
                  {String(i + 1).padStart(2, '0')} · {i === 0 ? 'MISSION' : i === 1 ? 'VALUES' : 'VISION'}
                </div>
                <h3 className="font-display text-2xl md:text-[28px] font-black mb-4 leading-tight">
                  {lang === 'zh' ? p.titleZh : p.titleFr}
                </h3>
                <div className="w-10 h-0.5 bg-[color:var(--color-amber-500)] mb-5" />
                <p className="text-sm md:text-[15px] leading-[1.85] text-white/70">
                  {lang === 'zh' ? p.descZh : p.descFr}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/*  ADVANTAGES  六大优势                                       */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

          <div className="flex items-end justify-between flex-wrap gap-4 mb-14 md:mb-16">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[color:var(--color-amber-500)] font-bold text-sm tracking-[0.3em]">— N° 03</span>
                <span className="h-px w-12 md:w-20 bg-[color:var(--color-ink-900)]/30" />
              </div>
              <h2 className="font-display text-[36px] md:text-[56px] font-black leading-[1.05] tracking-tight">
                {t.about.advTitle}
                <span className="block text-base md:text-lg text-[color:var(--color-ink-900)]/50 font-sans font-medium mt-2 md:mt-3 tracking-widest">
                  6 REASONS TO CHOOSE US
                </span>
              </h2>
              <p className="mt-5 text-[color:var(--color-ink-900)]/60 max-w-2xl text-[15px] md:text-base">{t.about.advSub}</p>
            </div>
            <div className="badge-ink hidden md:block">
              XCMG · PARTENAIRE
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {advantages.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative p-7 md:p-8 rounded-[22px] bg-white border border-[color:var(--color-ink-900)]/8 hover:border-[color:var(--color-amber-500)]/40 hover:shadow-[0_20px_60px_-20px_rgba(15,26,45,0.25)] transition-all duration-400 overflow-hidden"
              >
                {/* 背景线条 */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{
                       backgroundImage: `linear-gradient(135deg, rgba(232,164,0,0.12), transparent 60%)`,
                     }} />

                <div className="flex items-start gap-5">
                  {/* 编号+图标 */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-[color:var(--color-ink-900)] text-white flex items-center justify-center shadow-lg group-hover:bg-[color:var(--color-amber-500)] group-hover:text-[color:var(--color-ink-900)] transition-colors duration-400">
                      <a.icon className="w-7 h-7" strokeWidth={2} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)] flex items-center justify-center font-mono text-[10px] font-bold ring-2 ring-white">
                      {a.no}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-black text-xl md:text-[22px] mb-2 leading-tight">
                      {a.titles[lang]}
                    </h3>
                    <div className="w-8 h-0.5 bg-[color:var(--color-amber-500)]/70 mb-3" />
                    <p className="text-sm md:text-[15px] leading-[1.75] text-[color:var(--color-ink-900)]/65">
                      {a.descs[lang]}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/*  MILESTONES  发展历程时间轴                                  */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[color:var(--color-warm)] to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

          <div className="flex items-end justify-between flex-wrap gap-4 mb-14 md:mb-20">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[color:var(--color-amber-500)] font-bold text-sm tracking-[0.3em]">— N° 04</span>
                <span className="h-px w-12 md:w-20 bg-[color:var(--color-ink-900)]/30" />
              </div>
              <h2 className="font-display text-[36px] md:text-[56px] font-black leading-[1.05] tracking-tight">
                {t.about.milestonesTitle}
                <span className="block text-base md:text-lg text-[color:var(--color-ink-900)]/50 font-sans font-medium mt-2 md:mt-3 tracking-widest">
                  OUR JOURNEY · TIMELINE
                </span>
              </h2>
            </div>
          </div>

          {/* 时间轴 */}
          <div className="relative">
            {/* 竖线 */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[color:var(--color-ink-900)]/15 to-transparent" />

            <div className="space-y-10 md:space-y-14">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
                >
                  {/* 中心节点 */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center z-10 bg-[color:var(--color-warm)] border-2 border-[color:var(--color-amber-500)] shadow-[0_0_0_6px_var(--color-warm)]">
                    <span className="font-display font-black text-sm text-[color:var(--color-ink-900)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* 文字 */}
                  <div className={`md:${i % 2 === 0 ? 'pr-20 text-right' : 'pl-20'}`}>
                    <div className="font-display font-black text-[40px] md:text-[56px] leading-none text-transparent bg-clip-text mb-4"
                         style={{ backgroundImage: 'linear-gradient(135deg,#E8A400,#0F1A2D)' }}>
                      {m.year}
                    </div>
                    <div className="inline-block font-mono text-xs text-[color:var(--color-amber-500)] tracking-widest mb-2 px-2 py-1 border border-[color:var(--color-amber-500)]/30 rounded">
                      PHASE {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-display text-2xl md:text-[28px] font-black mb-3 leading-tight">
                      {lang === 'zh' ? m.titleZh : m.titleFr}
                    </h3>
                    <p className="text-[15px] md:text-base leading-[1.85] text-[color:var(--color-ink-900)]/65 max-w-xl md:max-w-none">
                      {lang === 'zh' ? m.descZh : m.descFr}
                    </p>
                  </div>

                  {/* 图片 */}
                  <div className={`mt-6 md:mt-0 md:${i % 2 === 0 ? 'pl-20' : 'pr-20'}`}>
                    <div className="relative rounded-[22px] overflow-hidden ring-1 ring-[color:var(--color-ink-900)]/10 shadow-xl group">
                      <img src={i === 0 ? companyPoster : i === 1 ? tractorOfficial : i === 2 ? warehouseGate : dumpOfficial}
                           alt={`${m.year} 年 · ${lang === 'zh' ? m.titleZh : m.titleFr}`} loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink-900)]/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        <div className="text-white font-display font-black text-lg md:text-xl">
                          {String(i + 1).padStart(2, '0')} · {lang === 'zh' ? '中盛足迹' : 'ÉTAPE'}
                        </div>
                        <div className="price-tag text-[11px] md:text-xs">
                          {m.year}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/*  CTA BAR                                                   */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] bg-[color:var(--color-ink-900)] p-10 md:p-16 text-white"
          >
            {/* 装饰 */}
            <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-[color:var(--color-amber-500)]/15 blur-3xl" />
            <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full border border-white/5" />
            <div className="absolute top-6 right-6 badge-ink rotate-[6deg]">
              {lang === 'zh' ? '联系中盛' : 'CONTACTEZ-NOUS'}
            </div>

            <div className="relative grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <div className="font-mono text-xs md:text-sm text-[color:var(--color-amber-500)] tracking-[0.3em] mb-4">
                  — {lang === 'zh' ? '准备好开启合作了吗？' : 'PRÊT À COMMENCER ?'}
                </div>
                <h3 className="font-display font-black text-3xl md:text-[44px] leading-[1.1] mb-5">
                  {lang === 'zh'
                    ? '与中盛一起，驶向工程与物流的快车道。'
                    : 'Accélérez vos projets avec ZHONG SHENG TRADE.'}
                </h3>
                <p className="text-white/70 max-w-xl text-[15px] md:text-base leading-relaxed">
                  {lang === 'zh'
                    ? '无论您要采购整车、租赁仓库、寻找停车位或订购零配件，中盛团队一站式为您搞定。'
                    : 'Véhicules neufs, entrepôts, parking, pièces détachées : nous prenons tout en charge.'}
                </p>
              </div>
              <div className="md:col-span-2 flex md:justify-end gap-3 md:gap-4 flex-col sm:flex-row md:flex-col">
                <a href={`tel:${t.contact.phones[0].tel}`} className="btn-primary w-full sm:w-auto md:w-full text-center justify-center">
                  <Phone className="w-5 h-5" /> {t.contact.phones[0].display}
                </a>
                <Link to="/contact" className="btn-outline w-full sm:w-auto md:w-full !border-white/30 !text-white hover:!bg-white hover:!text-[color:var(--color-ink-900)] text-center justify-center">
                  {lang === 'zh' ? '查看联系方式' : 'Voir nos contacts'} <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
