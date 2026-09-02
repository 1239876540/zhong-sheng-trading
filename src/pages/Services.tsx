import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Truck, Warehouse, Wrench, Phone, CheckCircle, ArrowRight, Package, ShieldCheck,
  ChevronRight, Settings, Fuel, Gauge, Ruler, Weight, Star, Handshake,
} from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import tractor6x4_1 from '../assets/images/xcmg-tractor-6x4-official.jpg'
import tractor6x4_2 from '../assets/images/xcmg-tractor-6x4-warehouse.jpg'
import tractor4x2 from '../assets/images/xcmg-tractor-4x2-yard.jpg'
import dump_1 from '../assets/images/xcmg-dump-6x4-site.jpg'
import dump_2 from '../assets/images/xcmg-dump-6x4-lift.jpg'
import dump_3 from '../assets/images/xcmg-dump-6x4-official.jpg'
import lightCarry from '../assets/images/truck-light-carry.jpg'
import vanBox from '../assets/images/van-box.jpg'
import warehouseGate from '../assets/images/warehouse-gate.jpg'
import companyPoster from '../assets/images/company-poster.jpg'

type V = {
  id: 'van' | 'light' | 'tractor6x4' | 'tractor4x2' | 'dump6x4'
  key: string
  images: string[]
  no: string
  accent: 'xcmg' | 'karry'
}

export default function Services() {
  const { t, lang } = useI18n()

  const vehicles: V[] = [
    { id: 'tractor6x4', key: 'vehicles.tractor6x4', images: [tractor6x4_1, tractor6x4_2], no: '01', accent: 'xcmg' },
    { id: 'dump6x4',    key: 'vehicles.dump6x4',    images: [dump_1, dump_2, dump_3],    no: '02', accent: 'xcmg' },
    { id: 'tractor4x2', key: 'vehicles.tractor4x2', images: [tractor4x2],               no: '03', accent: 'xcmg' },
    { id: 'light',      key: 'vehicles.light',      images: [lightCarry],               no: '04', accent: 'karry' },
    { id: 'van',        key: 'vehicles.van',        images: [vanBox],                   no: '05', accent: 'karry' },
  ]

  const vInfo = (id: V['id']) => t.vehicles[id]

  return (
    <div className="text-[color:var(--color-ink-900)]">

      {/* ========================================================= */}
      {/* HERO                                                       */}
      {/* ========================================================= */}
      <section className="relative min-h-[82vh] overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <img src={tractor6x4_2} alt="徐工重卡 6x4 牵引车（Services Hero XCMG Tractor Warehouse Scene）" loading="eager" fetchPriority="high" decoding="async" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-ink-900)]/90 via-[color:var(--color-ink-900)]/55 to-[color:var(--color-amber-500)]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-warm)] via-transparent to-transparent" />
        </div>

        <div className="hidden md:block absolute top-28 left-8 lg:left-14 text-white/40 font-mono text-xs tracking-[0.4em]">
          <div className="flex items-center gap-3">
            <span className="w-12 h-px bg-white/30" />
            N° 03 / {lang === 'zh' ? '产品与服务 · SERVICES' : 'NOS SERVICES'}
          </div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-36 md:pt-44 pb-24">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-9">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

                <div className="inline-flex items-center gap-3 px-4 py-2 border border-[color:var(--color-amber-500)]/40 bg-[color:var(--color-amber-500)]/10 backdrop-blur-sm text-[color:var(--color-amber-500)] text-xs md:text-sm font-semibold mb-6 md:mb-8">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--color-amber-500)] animate-pulse" />
                  XCMG OFFICIAL · KARRY · {t.home.trustCard}
                </div>

                <h1 className="font-display text-white font-black leading-[0.95] tracking-tight">
                  <span className="block text-[16px] md:text-[20px] font-bold text-[color:var(--color-amber-500)] mb-3 md:mb-5 tracking-[0.22em] uppercase">
                    {lang === 'zh' ? '整车 · 仓储 · 配件 · 停车 —— 一站式工业服务商' : 'VÉHICULES · ENTREPÔTS · PIÈCES · PARKING'}
                  </span>
                  <span className="block text-[44px] md:text-[68px] lg:text-[88px] leading-[0.98]">
                    {t.servicesPage.title}
                  </span>
                  <span className="block text-[36px] md:text-[54px] lg:text-[70px] text-transparent bg-clip-text mt-2"
                        style={{ backgroundImage: 'linear-gradient(90deg,#E8A400 0%,#F5F3EE 70%,#E8A400 100%)' }}>
                    {t.servicesPage.sub}
                  </span>
                </h1>

                <p className="mt-8 md:mt-10 max-w-3xl text-[17px] md:text-[19px] leading-[1.85] text-white/80">
                  {t.servicesPage.desc}
                </p>

                {/* 导航胶囊 */}
                <div className="mt-10 md:mt-14 flex flex-wrap gap-3">
                  {[
                    ['#vehicles', t.home.services[0].title],
                    ['#warehouse', t.home.services[1].title],
                    ['#parking', t.home.services[3].title],
                    ['#parts', t.home.services[2].title],
                  ].map(([h, label], i) => (
                    <a key={h as string} href={h as string}
                       className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white/85 backdrop-blur-sm text-sm hover:bg-[color:var(--color-amber-500)] hover:border-[color:var(--color-amber-500)] hover:text-[color:var(--color-ink-900)] transition-all duration-300">
                      <span className="font-mono text-xs opacity-60 group-hover:opacity-100">0{i + 1}</span>
                      {label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* VEHICLES  精品车型展区                                      */}
      {/* ========================================================= */}
      <section id="vehicles" className="py-20 md:py-28 scroll-mt-24 relative bg-corners">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

          {/* Section Title */}
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14 md:mb-20">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[color:var(--color-amber-500)] font-bold text-sm tracking-[0.3em]">— N° 01</span>
                <span className="h-px w-12 md:w-20 bg-[color:var(--color-ink-900)]/30" />
              </div>
              <h2 className="font-display text-[36px] md:text-[56px] font-black leading-[1.05] tracking-tight">
                {t.servicesPage.vehicleSection}
                <span className="block text-base md:text-lg text-[color:var(--color-ink-900)]/50 font-sans font-medium mt-2 md:mt-3 tracking-widest">
                  HEAVY DUTY · LIGHT DUTY · ALL MODELS IN STOCK
                </span>
              </h2>
              <p className="mt-5 text-[color:var(--color-ink-900)]/60 max-w-2xl text-[15px] md:text-base">
                {t.servicesPage.vehicleSectionSub}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="badge-ink">XCMG · 徐工</div>
              <div className="badge-ink !border-[color:var(--color-ink-900)] !text-[color:var(--color-ink-900)] bg-transparent">KARRY · 开瑞</div>
            </div>
          </div>

          {/* 车型列表 */}
          <div className="space-y-20 md:space-y-28">
            {vehicles.map((v, i) => {
              const info = vInfo(v.id)
              const reverse = i % 2 === 1
              return (
                <motion.article
                  key={v.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  {/* 背景装饰编号（右下角，避免与左上角标题重叠） */}
                  <div className="hidden md:block font-display font-black text-[90px] lg:text-[130px] leading-none text-[color:var(--color-ink-900)]/[0.028] absolute -bottom-8 right-0 pointer-events-none select-none">
                    {v.no}
                  </div>

                  <div className={`relative grid lg:grid-cols-12 gap-8 lg:gap-14 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>

                    {/* ======== 图片画廊 ======== */}
                    <div className="lg:col-span-7 relative">
                      <div className="grid grid-cols-6 gap-3 md:gap-4">
                        {/* 主图 */}
                        <div className="col-span-6 rounded-[28px] overflow-hidden ring-1 ring-[color:var(--color-ink-900)]/10 shadow-[0_30px_80px_-30px_rgba(15,26,45,0.4)] aspect-[16/10] relative group shine-sweep">
                          <img src={v.images[0]} alt={info.name} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          {/* 渐变加深 + 延长中部渐变深度，保证底部品牌/现车标签在浅色车身上也清晰可读 */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                          {/* 左上编号 */}
                          <div className="absolute top-4 md:top-5 left-4 md:left-5 flex items-center gap-2 md:gap-3">
                            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/92 backdrop-blur text-[color:var(--color-ink-900)] flex items-center justify-center font-mono font-black text-[12px] md:text-sm shadow-lg">
                              {v.no}
                            </div>
                            <span className="px-2.5 md:px-3 py-1.5 rounded-full bg-white/92 backdrop-blur text-[color:var(--color-ink-900)] text-[11px] md:text-xs font-bold shadow">
                              {info.tag}
                            </span>
                          </div>
                          {/* 右下"现车·可提" —— 小屏上调字号 / 内边距，避免与左下品牌 tag 横向重叠 */}
                          <div className="absolute bottom-4 md:bottom-5 right-4 md:right-5 price-tag text-[11px] md:text-sm leading-none whitespace-nowrap">
                            {lang === 'zh' ? '现车 · 可提' : 'DISPONIBLE'}
                          </div>
                          {/* 左下品牌标签：md 以下如果左右标签碰了，就堆叠到左下两行；这里用 right auto + max-w-[55%] 防止撞右 */}
                          <div className="absolute bottom-4 md:bottom-5 left-4 md:left-5 max-w-[58%]">
                            <div className={`px-3 md:px-4 py-1.5 md:py-2 rounded-xl backdrop-blur-sm font-bold text-[11px] md:text-xs tracking-wider shadow-lg whitespace-nowrap ${
                              v.accent === 'xcmg'
                                ? 'bg-[color:var(--color-amber-500)]/95 text-[color:var(--color-ink-900)]'
                                : 'bg-[color:var(--color-ink-900)]/95 text-[color:var(--color-amber-500)]'
                            }`}>
                              {v.accent === 'xcmg' ? 'XCMG · 徐工集团' : 'KARRY · 开瑞汽车'}
                            </div>
                          </div>
                        </div>

                        {/* 副图 1 */}
                        {v.images[1] ? (
                          <div className="col-span-3 md:col-span-4 rounded-[20px] overflow-hidden ring-1 ring-[color:var(--color-ink-900)]/10 shadow-lg aspect-[4/3] group">
                            <img src={v.images[1]} alt={`${info.name} 实拍图 2`} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          </div>
                        ) : (
                          <div className="col-span-3 md:col-span-4 rounded-[20px] bg-gradient-to-br from-[color:var(--color-ink-900)] to-[#1A2A48] text-white p-5 md:p-7 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-[color:var(--color-amber-500)]/15" />
                            <div className="relative">
                              <div className="font-mono text-xs text-[color:var(--color-amber-500)] tracking-widest mb-2">BRAND</div>
                              <div className="font-display font-black text-2xl md:text-3xl leading-tight">{info.brand}</div>
                            </div>
                            <div className="relative text-white/70 text-sm leading-relaxed">
                              {info.highlight}
                            </div>
                          </div>
                        )}

                        {/* 副图 2 / 规格亮点 */}
                        {v.images[2] ? (
                          <div className="col-span-3 md:col-span-2 rounded-[20px] overflow-hidden ring-1 ring-[color:var(--color-ink-900)]/10 shadow-lg aspect-[4/3] group">
                            <img src={v.images[2]} alt={`${info.name} 实拍图 3`} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          </div>
                        ) : (
                          <div className="col-span-3 md:col-span-2 rounded-[20px] border border-[color:var(--color-ink-900)]/10 p-5 flex flex-col justify-between bg-[color:var(--color-warm)]/70">
                            <CheckCircle className="w-7 h-7 text-[color:var(--color-amber-500)]" />
                            <div>
                              <div className="font-display font-black text-2xl text-[color:var(--color-ink-900)]">
                                {info.specs.length}
                              </div>
                              <div className="text-xs text-[color:var(--color-ink-900)]/60 mt-1 tracking-wider">
                                {lang === 'zh' ? '项核心参数' : 'SPÉCIFICATIONS'}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* ======== 文字信息 ======== */}
                    <div className="lg:col-span-5">
                      <div className="font-mono text-xs text-[color:var(--color-amber-500)] tracking-[0.3em] mb-3">
                        — MODÈLE {v.no} / {info.brand.toUpperCase()}
                      </div>
                      <h3 className="font-display font-black text-3xl md:text-[44px] leading-[1.1] mb-5 tracking-tight">
                        {info.name}
                      </h3>

                      {/* 价格卡 */}
                      <div className="relative mb-7 p-1 rounded-[22px] bg-gradient-to-br from-[color:var(--color-amber-500)] via-[color:var(--color-amber-500)]/60 to-[color:var(--color-ink-900)]/15 shadow-lg">
                        <div className="rounded-[20px] bg-[color:var(--color-warm)] p-6 md:p-7 relative overflow-hidden">
                          <div className="absolute top-4 right-4 badge-ink-xs rotate-[5deg]">
                            {lang === 'zh' ? '参 考 价' : 'TARIF'}
                          </div>
                          <div className="text-xs text-[color:var(--color-ink-900)]/55 font-semibold mb-2 tracking-wider">
                            {lang === 'zh' ? '马达加斯加 · 阿里亚里 Ar · TTC' : 'MADAGASCAR · ARIARY · TTC'}
                          </div>
                          <div className="flex items-baseline gap-3 flex-wrap">
                            <div className="font-display font-black text-4xl md:text-5xl text-[color:var(--color-ink-900)] leading-none">
                              {info.price}
                            </div>
                            <span className="font-bold text-[color:var(--color-amber-500)] text-base md:text-lg">{t.common.ar}</span>
                          </div>
                          <div className="mt-2 text-xs text-[color:var(--color-ink-900)]/55">
                            ≈ {info.priceShort} · {lang === 'zh' ? '最终价格以合同条款为准，量大价优' : 'Tarif final sous conditions, dégressif sur quantité'}
                          </div>
                          <div className="mt-4 pt-4 border-t border-[color:var(--color-ink-900)]/10 flex items-center justify-between flex-wrap gap-3">
                            {/* 原 emerald-500/10 绿 → 统一 amber 系（工业贸易风）避免突兀绿点 */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--color-amber-500)]/12 text-[color:var(--color-amber-600)] text-xs font-bold">
                              <CheckCircle className="w-3.5 h-3.5" />
                              {lang === 'zh' ? '现车库存 · 可现场看车' : 'En stock · Visite possible'}
                            </div>
                            <div className="text-xs text-[color:var(--color-ink-900)]/60 inline-flex items-center gap-1">
                              <Star className="w-3.5 h-3.5 text-[color:var(--color-amber-500)] fill-[color:var(--color-amber-500)]" />
                              {lang === 'zh' ? '官方合作渠道 · 品质保证' : 'Canal officiel · Garanti'}
                            </div>
                          </div>
                          {/* 库存可视化进度条 */}
                          <div className="mt-5 grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-[11px] font-bold tracking-widest text-[color:var(--color-ink-900)]/55">
                                <span>{lang === 'zh' ? '现车数量' : 'UNITÉS'}</span>
                                <span className="font-mono text-[color:var(--color-ink-900)]">
                                  {i === 0 ? '12 / 15' : i === 1 ? '8 / 10' : i === 2 ? '14 / 16' : i === 3 ? '18 / 20' : '6 / 8'}
                                </span>
                              </div>
                              <div className="bar-track">
                                <div className="bar-fill" style={{
                                  width: i === 0 ? '80%' : i === 1 ? '80%' : i === 2 ? '88%' : i === 3 ? '90%' : '75%'
                                }} />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-[11px] font-bold tracking-widest text-[color:var(--color-ink-900)]/55">
                                <span>{lang === 'zh' ? '月出库率' : 'TURN OVER'}</span>
                                <span className="font-mono text-[color:var(--color-ink-900)]">
                                  {i === 0 ? '72%' : i === 1 ? '65%' : i === 2 ? '81%' : i === 3 ? '88%' : '58%'}
                                </span>
                              </div>
                              {/* 月出库率：原 emerald 绿条 → 统一走 amber 默认 bar-fill，与全车系 现车 进度条同色系 */}
                              <div className="bar-track">
                                <div className="bar-fill" style={{
                                  width: i === 0 ? '72%' : i === 1 ? '65%' : i === 2 ? '81%' : i === 3 ? '88%' : '58%'
                                }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-[15px] md:text-base leading-[1.85] text-[color:var(--color-ink-900)]/70 mb-6">
                        {info.desc}
                      </p>

                      {/* 规格清单 */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <Settings className="w-4 h-4 text-[color:var(--color-amber-500)]" />
                          <span className="font-bold text-sm tracking-wider text-[color:var(--color-ink-900)]/70">
                            {lang === 'zh' ? '核心参数 / SPECIFICATIONS' : 'SPÉCIFICATIONS CLÉS'}
                          </span>
                          <span className="flex-1 h-px bg-[color:var(--color-ink-900)]/10 ml-2" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {info.specs.map((s) => (
                            <div key={s} className="flex items-center gap-3 p-3 rounded-xl border border-[color:var(--color-ink-900)]/8 bg-white/70 hover:bg-white hover:border-[color:var(--color-amber-500)]/30 transition-all">
                              <div className="w-6 h-6 rounded-md bg-[color:var(--color-amber-500)]/15 text-[color:var(--color-amber-500)] flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-sm text-[color:var(--color-ink-900)]/85 leading-snug">{s}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA 组 */}
                      <div className="flex flex-wrap gap-3">
                        <a href={`tel:${t.contact.phones[0].tel}`} className="btn-primary inline-flex items-center gap-2">
                          <Phone className="w-4.5 h-4.5" /> {t.common.consultPrice}
                        </a>
                        <Link to="/contact" className="btn-outline inline-flex items-center gap-2">
                          {t.common.appointment} <ChevronRight className="w-4.5 h-4.5" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WAREHOUSE  仓库租赁                                         */}
      {/* ========================================================= */}
      <section id="warehouse" className="py-20 md:py-28 scroll-mt-24 bg-gradient-to-b from-[color:var(--color-warm)]/70 via-white to-white relative bg-wake">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

          <div className="flex items-end justify-between flex-wrap gap-4 mb-14 md:mb-20">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[color:var(--color-amber-500)] font-bold text-sm tracking-[0.3em]">— N° 02</span>
                <span className="h-px w-12 md:w-20 bg-[color:var(--color-ink-900)]/30" />
              </div>
              <h2 className="font-display text-[36px] md:text-[56px] font-black leading-[1.05] tracking-tight">
                {t.servicesPage.warehouseTitle}
                <span className="block text-base md:text-lg text-[color:var(--color-ink-900)]/50 font-sans font-medium mt-2 md:mt-3 tracking-widest">
                  WAREHOUSE RENTAL · 20 000 m²+
                </span>
              </h2>
              <p className="mt-5 text-[color:var(--color-ink-900)]/60 max-w-2xl text-[15px] md:text-base">
                {t.servicesPage.warehouseSub}
              </p>
            </div>
            <div className="badge-ink hidden md:block">
              {lang === 'zh' ? '租期灵活' : 'LOCATION FLEXIBLE'}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* 图片 */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                       className="lg:col-span-6 relative">
              <div className="relative rounded-[28px] overflow-hidden shadow-[0_30px_80px_-30px_rgba(15,26,45,0.4)] ring-1 ring-[color:var(--color-ink-900)]/10">
                <img src={warehouseGate} alt="中盛贸易 20000㎡ 标准仓库大门实景" loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink-900)]/50 via-transparent to-transparent" />
                {/* 印章 */}
                <div className="absolute top-5 right-5 badge-ink rotate-[-5deg]">
                  {lang === 'zh' ? '实景拍摄' : 'PHOTO RÉELLE'}
                </div>
                {/* 左下20000㎡标签 */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-white/60 text-xs font-mono tracking-widest mb-1">SURFACE TOTALE</div>
                      <div className="font-display font-black text-white text-4xl md:text-5xl leading-none">
                        20 000 m²<span className="text-[color:var(--color-amber-500)]">+</span>
                      </div>
                    </div>
                    <div className="price-tag">
                      {lang === 'zh' ? '大型仓储园区' : 'GRAND PARC'}
                    </div>
                  </div>
                </div>
              </div>
              {/* 叠加小卡 */}
              <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white rounded-[22px] p-5 md:p-6 shadow-2xl ring-1 ring-[color:var(--color-ink-900)]/8 max-w-[260px] z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-11 h-11 rounded-xl bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)] flex items-center justify-center shadow-md">
                    <Warehouse className="w-5.5 h-5.5" />
                  </div>
                  <div className="font-display font-black text-lg md:text-xl leading-tight text-[color:var(--color-ink-900)]">
                    {lang === 'zh' ? '标准库房' : 'ENTREPÔTS'}
                  </div>
                </div>
                <div className="text-xs text-[color:var(--color-ink-900)]/60 leading-relaxed">
                  {lang === 'zh' ? '防雨 · 防火 · 通风 · 安保，全方位保障' : 'Protégés, ventilés, sécurisés 24/24'}
                </div>
              </div>
            </motion.div>

            {/* 内容 */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                       className="lg:col-span-6">
              <p className="text-[16px] md:text-[17px] leading-[1.9] text-[color:var(--color-ink-900)]/80 mb-8">
                {t.servicesPage.warehouseDesc}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: Package, titleZh: '标准库房', descZh: '防雨、防火、通风良好', titleFr: 'Standards', descFr: 'Protégés · Ventilés' },
                  { icon: Truck,   titleZh: '地段优越', descZh: '临主路，大车出入便利', titleFr: 'Accès facile', descFr: 'Proche grands axes' },
                  { icon: ShieldCheck, titleZh: '安保完善', descZh: '24h值守 + 视频监控', titleFr: 'Sécurité 24/24', descFr: 'Gardien · Vidéo' },
                  { icon: Handshake, titleZh: '租期灵活', descZh: '日租 / 月租 / 年租', titleFr: 'Flexibilité', descFr: 'Jour / Mois / Année' },
                ].map((f, i) => (
                  <div key={i} className="group p-5 rounded-[20px] bg-white border border-[color:var(--color-ink-900)]/8 hover:border-[color:var(--color-amber-500)]/40 hover:shadow-[0_15px_40px_-15px_rgba(15,26,45,0.2)] transition-all">
                    <div className="flex items-start gap-4">
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <div className="absolute inset-0 rounded-xl bg-[color:var(--color-amber-500)]/15 -rotate-3 group-hover:rotate-0 transition-transform" />
                        <div className="relative w-full h-full rounded-xl bg-[color:var(--color-ink-900)] text-white flex items-center justify-center group-hover:bg-[color:var(--color-amber-500)] group-hover:text-[color:var(--color-ink-900)] transition-colors">
                          <f.icon className="w-5.5 h-5.5" strokeWidth={2} />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-display font-black text-lg mb-1.5 leading-tight">
                          {lang === 'zh' ? f.titleZh : f.titleFr}
                        </div>
                        <div className="text-sm text-[color:var(--color-ink-900)]/60 leading-relaxed">
                          {lang === 'zh' ? f.descZh : f.descFr}
                        </div>
                      </div>
                      <div className="font-mono text-xs font-bold text-[color:var(--color-amber-500)] opacity-70">
                        0{i + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a href={`tel:${t.contact.phones[0].tel}`} className="btn-primary inline-flex items-center gap-2 text-base">
                {lang === 'zh' ? '咨询租仓方案' : 'Demander un devis'} <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PARKING  停车场租赁                                         */}
      {/* ========================================================= */}
      <section id="parking" className="py-20 md:py-28 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

          <div className="flex items-end justify-between flex-wrap gap-4 mb-14 md:mb-20">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[color:var(--color-amber-500)] font-bold text-sm tracking-[0.3em]">— N° 03</span>
                <span className="h-px w-12 md:w-20 bg-[color:var(--color-ink-900)]/30" />
              </div>
              <h2 className="font-display text-[36px] md:text-[56px] font-black leading-[1.05] tracking-tight">
                {t.servicesPage.parkingTitle}
                <span className="block text-base md:text-lg text-[color:var(--color-ink-900)]/50 font-sans font-medium mt-2 md:mt-3 tracking-widest">
                  PARKING · HEAVY TRUCKS · SECURITY 24/7
                </span>
              </h2>
              <p className="mt-5 text-[color:var(--color-ink-900)]/60 max-w-2xl text-[15px] md:text-base">
                {t.servicesPage.parkingSub}
              </p>
            </div>
          </div>

          <div className="relative rounded-[32px] overflow-hidden bg-[color:var(--color-ink-900)] text-white shadow-[0_40px_100px_-40px_rgba(15,26,45,0.5)]">
            {/* 背景图 */}
            <div className="absolute inset-0 opacity-30" aria-hidden="true">
              <img src={companyPoster} alt="" aria-hidden="true" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-ink-900)] via-[color:var(--color-ink-900)]/95 to-[color:var(--color-amber-500)]/20" />
            </div>
            {/* 网格纹理 */}
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: `linear-gradient(#E8A400 1px, transparent 1px), linear-gradient(90deg, #E8A400 1px, transparent 1px)`,
              backgroundSize: '44px 44px',
            }} />

            <div className="relative grid lg:grid-cols-5 gap-8 lg:gap-12 p-8 md:p-14 lg:p-18 items-center">
              {/* 左列 文案 */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                         className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[color:var(--color-amber-500)]/40 bg-[color:var(--color-amber-500)]/10 text-[color:var(--color-amber-500)] text-xs font-bold mb-5">
                  {lang === 'zh' ? 'SERVICE 03 · 配套停车场' : 'SERVICE 03 · PARKING'}
                </div>
                <h3 className="font-display font-black text-3xl md:text-[44px] leading-[1.1] mb-5 tracking-tight">
                  {lang === 'zh' ? '货车、工程车、小车' : 'Camions · Travaux · Voitures'}
                  <span className="block text-[color:var(--color-amber-500)]">{t.servicesPage.parkingTitle}</span>
                </h3>
                <p className="text-white/75 text-[15px] md:text-base leading-[1.9] mb-8 max-w-xl">
                  {t.servicesPage.parkingDesc}
                </p>

                <ul className="space-y-3 mb-10">
                  {t.servicesPage.parkingPoints.map((x) => (
                    <li key={x} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[color:var(--color-amber-500)]/15 text-[color:var(--color-amber-500)] flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="text-[15px] text-white/90">{x}</span>
                    </li>
                  ))}
                </ul>

                <a href={`tel:${t.contact.phones[0].tel}`}
                   className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)] font-bold hover:bg-[#FFBD1F] transition-colors shadow-xl shadow-[color:var(--color-amber-500)]/25 text-base">
                  📞 {lang === 'zh' ? '立即预约停车位' : 'Réserver une place'}
                </a>
              </motion.div>

              {/* 右列 数据卡片 */}
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                         className="lg:col-span-2">
                <div className="relative rounded-[26px] p-7 md:p-8 bg-white/[0.04] backdrop-blur-sm border border-white/10 overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[color:var(--color-amber-500)]/20 blur-2xl" />

                  <div className="relative">
                    <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-amber-500)] mb-3">
                      {t.servicesPage.parkingCardTitle}
                    </div>
                    <div className="text-6xl mb-6">🅿️</div>

                    <div className="space-y-4">
                      {/* color 仅保留 amber / ink 双色（工业贸易配色统一），避免 emerald 造成"绿点突兀" */}
                      {[
                        { k: lang === 'zh' ? '大型货车位' : 'Camions lourds',   total: 80,  used: 32, color: 'amber', desc: lang === 'zh' ? '宽敞 · 承重加固' : 'Large · renforcé' },
                        { k: lang === 'zh' ? '工程车位' : 'Véhicules TP',    total: 40,  used: 10, color: 'ink',   desc: lang === 'zh' ? '遮雨棚 · 水电' : 'Abrités · eau/élec.' },
                        { k: lang === 'zh' ? '机械/设备位' : 'Équipements',  total: 30,  used: 8,  color: 'amber', desc: lang === 'zh' ? '24h 监控 · 安保' : '24/7 · sécurité' },
                        { k: lang === 'zh' ? '小型车/小车' : 'Voitures',     total: 120, used: 42, color: 'ink',   desc: lang === 'zh' ? '平整硬化地面' : 'Sol stabilisé' },
                      ].map((row, i) => {
                        const pct = Math.round((row.total - row.used) / row.total * 100)
                        const fillCls = row.color === 'ink' ? 'bar-fill ink' : 'bar-fill'
                        return (
                          <div key={row.k} className="p-4 rounded-[18px] bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-colors">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="font-mono text-xs font-bold text-[color:var(--color-amber-500)]/80 w-6 shrink-0">0{i + 1}</div>
                                <div className="min-w-0">
                                  <div className="text-[14px] font-bold text-white leading-tight truncate">{row.k}</div>
                                  <div className="text-[11px] text-white/50 mt-0.5 truncate">{row.desc}</div>
                                </div>
                              </div>
                              <div className="text-right shrink-0 ml-3">
                                <div className="font-display font-black text-[18px] text-white leading-none">
                                  <span className={row.color === 'amber' ? 'text-[color:var(--color-amber-500)]' : 'text-white'}>{row.total - row.used}</span>
                                  <span className="text-white/40 text-sm font-sans font-bold"> / {row.total}</span>
                                </div>
                                <div className="text-[10px] text-white/40 tracking-[0.18em] uppercase font-bold mt-1">{pct}% {lang === 'zh' ? '可租' : 'LIBRES'}</div>
                              </div>
                            </div>
                            <div className="bar-track" style={{ background: 'rgba(255,255,255,0.1)' }}>
                              <div className={fillCls} style={{ width: `${pct}%` }} />
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <div className="mt-7 pt-6 border-t border-white/10 text-xs text-white/60 leading-relaxed">
                      💡 {lang === 'zh' ? '车位及月租/年租价格，请电话或微信详询，长租享专属优惠。' : 'Tarifs et disponibilité par téléphone / WeChat. Tarifs dégressifs pour longue durée.'}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PARTS  零配件                                               */}
      {/* ========================================================= */}
      <section id="parts" className="py-20 md:py-28 scroll-mt-24 bg-gradient-to-b from-white via-[color:var(--color-warm)]/50 to-white relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

          <div className="flex items-end justify-between flex-wrap gap-4 mb-14 md:mb-20">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[color:var(--color-amber-500)] font-bold text-sm tracking-[0.3em]">— N° 04</span>
                <span className="h-px w-12 md:w-20 bg-[color:var(--color-ink-900)]/30" />
              </div>
              <h2 className="font-display text-[36px] md:text-[56px] font-black leading-[1.05] tracking-tight">
                {t.servicesPage.partsTitle}
                <span className="block text-base md:text-lg text-[color:var(--color-ink-900)]/50 font-sans font-medium mt-2 md:mt-3 tracking-widest">
                  SPARE PARTS · ACCESSORIES · FAST SUPPLY
                </span>
              </h2>
              <p className="mt-5 text-[color:var(--color-ink-900)]/60 max-w-2xl text-[15px] md:text-base">
                {t.servicesPage.partsSub}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* 左 分类网格 */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                       className="lg:col-span-7 order-2 lg:order-1">
              <p className="text-[16px] md:text-[17px] leading-[1.9] text-[color:var(--color-ink-900)]/80 mb-8">
                {t.servicesPage.partsDesc}
              </p>

              <div className="grid grid-cols-2 gap-3.5 mb-10">
                {[
                  { zh: '发动机配件', fr: 'Moteur', i: Fuel },
                  { zh: '变速箱/传动', fr: 'Boîte & Transmission', i: Settings },
                  { zh: '底盘/悬挂件', fr: 'Châssis & Suspension', i: Ruler },
                  { zh: '刹车系统', fr: 'Freinage', i: ShieldCheck },
                  { zh: '轮胎 / 电瓶', fr: 'Pneus & Batteries', i: Weight },
                  { zh: '灯具 / 滤清器', fr: 'Optiques & Filtres', i: Gauge },
                  { zh: '润滑 / 油品', fr: 'Lubrifiants', i: Fuel },
                  { zh: '易损 / 保养件', fr: 'Pièces d\'usure', i: Wrench },
                ].map((c, i) => (
                  <div key={i} className="group flex items-center gap-3 p-4 rounded-[18px] bg-white border border-[color:var(--color-ink-900)]/8 hover:border-[color:var(--color-amber-500)]/40 hover:shadow-[0_15px_40px_-20px_rgba(15,26,45,0.2)] transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[color:var(--color-ink-900)]/5 text-[color:var(--color-ink-900)]/80 flex items-center justify-center group-hover:bg-[color:var(--color-amber-500)] group-hover:text-[color:var(--color-ink-900)] transition-colors flex-shrink-0">
                      <c.i className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-sm md:text-[15px] leading-tight text-[color:var(--color-ink-900)]/90">
                        {lang === 'zh' ? c.zh : c.fr}
                      </div>
                    </div>
                    <div className="font-mono text-[10px] font-bold text-[color:var(--color-amber-500)]/70">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                ))}
              </div>

              <a href={`tel:${t.contact.phones[0].tel}`} className="btn-primary inline-flex items-center gap-2 text-base">
                <Wrench className="w-5 h-5" />
                {lang === 'zh' ? '获取配件清单 / 报价' : 'Liste & Devis Pièces'} <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* 右 数据卡 */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                       className="lg:col-span-5 order-1 lg:order-2 relative">
              <div className="relative rounded-[28px] p-8 md:p-10 bg-white ring-1 ring-[color:var(--color-ink-900)]/10 shadow-[0_30px_80px_-30px_rgba(15,26,45,0.3)] overflow-hidden">
                {/* 装饰 */}
                <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-[color:var(--color-amber-500)]/15" />
                <div className="absolute top-5 right-5 badge-ink rotate-[-5deg]">
                  {lang === 'zh' ? '4 大承诺' : '4 PROMESSES'}
                </div>

                <div className="relative">
                  <div className="text-xs font-semibold text-[color:var(--color-ink-900)]/50 tracking-widest mb-2">
                    📦 {lang === 'zh' ? '常用配件 · 快速供应' : 'Pièces courantes · Livraison rapide'}
                  </div>
                  <h3 className="font-display font-black text-2xl md:text-3xl leading-tight mb-7">
                    {lang === 'zh' ? '为您的车队保驾护航' : 'Pour une flotte toujours opérationnelle'}
                  </h3>

                  <div className="space-y-3">
                    {[
                      { k: lang === 'zh' ? '品质保证' : 'Qualité',   v: lang === 'zh' ? '正厂渠道 / 副厂精品' : 'Origine · Premium' },
                      { k: lang === 'zh' ? '品类齐全' : 'Large choix', v: lang === 'zh' ? '覆盖在售全系车型' : 'Tous nos modèles' },
                      { k: lang === 'zh' ? '价格公道' : 'Prix équitable', v: lang === 'zh' ? '批量采购更享优惠' : 'Dégressif sur quantité' },
                      { k: lang === 'zh' ? '本地服务' : 'Service local', v: lang === 'zh' ? '塔马塔夫可配送' : 'Livraison Toamasina' },
                    ].map((row, i) => (
                      <div key={i} className="group flex items-center justify-between p-4 rounded-2xl bg-[color:var(--color-warm)]/80 hover:bg-white hover:ring-1 hover:ring-[color:var(--color-amber-500)]/30 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="relative w-9 h-9">
                            <div className="absolute inset-0 rounded-lg bg-[color:var(--color-amber-500)]/20 group-hover:bg-[color:var(--color-amber-500)] transition-colors" />
                            <div className="relative w-full h-full flex items-center justify-center font-mono font-black text-sm text-[color:var(--color-ink-900)]">
                              {i + 1}
                            </div>
                          </div>
                          <span className="font-display font-black text-[15px] md:text-base">{row.k}</span>
                        </div>
                        <span className="text-sm text-[color:var(--color-ink-900)]/65 text-right max-w-[50%] leading-snug">{row.v}</span>
                      </div>
                    ))}
                  </div>

                  {/* 长期合作徽章：原 emerald 绿底 → amber 工业琥珀系 */}
                  <div className="mt-8 pt-6 border-t border-[color:var(--color-ink-900)]/10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[color:var(--color-amber-500)]/15 text-[color:var(--color-amber-600)] flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div className="text-sm text-[color:var(--color-ink-900)]/70 leading-snug">
                      {lang === 'zh' ? '长期合作客户，建立车队专属配件档案，优先发货。' : 'Clients fidèles : dossier personnalisé et expédition prioritaire.'}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA 底部行动条                                              */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[color:var(--color-amber-500)] via-[#FFBD1F] to-[color:var(--color-amber-500)] p-10 md:p-16 text-[color:var(--color-ink-900)] shadow-[0_30px_80px_-20px_rgba(232,164,0,0.5)]"
          >
            {/* 装饰 */}
            <div className="absolute -left-10 -bottom-10 w-52 h-52 rounded-full bg-[color:var(--color-ink-900)]/10" />
            <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-[color:var(--color-ink-900)] text-[color:var(--color-amber-500)] text-xs font-bold tracking-widest rotate-[5deg] shadow-lg">
              {lang === 'zh' ? '立即咨询' : 'CONTACT'}
            </div>

            <div className="relative grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <div className="font-mono text-xs md:text-sm tracking-[0.3em] mb-4 opacity-80">
                  — {lang === 'zh' ? '您的需求就是我们的使命' : 'VOTRE BESOIN, NOTRE MISSION'}
                </div>
                <h3 className="font-display font-black text-3xl md:text-[44px] leading-[1.08] mb-5 tracking-tight">
                  {t.servicesPage.cta}
                </h3>
                <p className="text-[color:var(--color-ink-900)]/75 max-w-2xl text-[15px] md:text-base leading-relaxed">
                  {t.servicesPage.ctaDesc}
                </p>
              </div>
              <div className="md:col-span-2 flex md:justify-end">
                <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-5 rounded-full bg-[color:var(--color-ink-900)] text-white font-bold hover:bg-black transition-colors shadow-2xl text-base md:text-lg">
                  {t.servicesPage.ctaBtn} <ChevronRight className="w-5.5 h-5.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
