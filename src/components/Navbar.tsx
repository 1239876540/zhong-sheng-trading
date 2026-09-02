import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Globe } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import companyLogo from '../assets/images/company-logo.png'

export default function Navbar() {
  const { t, lang, setLang } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  const isActive = (path: string) => location.pathname === path

  const navLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.services, path: '/services' },
    { label: t.nav.contact, path: '/contact' },
  ]

  // 点击时给 ripple 按钮注入坐标
  const ripple = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const tgt = e.currentTarget
    const rect = tgt.getBoundingClientRect()
    tgt.style.setProperty('--rx', `${e.clientX - rect.left}px`)
    tgt.style.setProperty('--ry', `${e.clientY - rect.top}px`)
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="relative w-11 h-11 flex-shrink-0 float-y">
              <span className="absolute inset-0 rounded-full border-2 border-[color:var(--color-amber-500)]" />
              <span className="absolute -right-0.5 -bottom-0.5 w-[30%] h-[30%] rounded-tr-full rounded-bl-full bg-[color:var(--color-amber-500)] pulse-ring" />
              <img
                src={companyLogo}
                alt="Zhong Sheng Logo"
                className="absolute inset-1 rounded-full w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover"
              />
            </span>
            <div className="leading-tight">
              <div className="font-display text-[20px] font-black text-[color:var(--color-ink-900)] tracking-tight group-hover:text-[color:var(--color-amber-500)] transition-colors">
                {t.common.companyShort}
              </div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink-500)] font-semibold">
                {t.common.companyEn.split(' ').slice(0, 3).join(' ')}
              </div>
            </div>
          </Link>

          {/* 桌面导航 — 用新的 nav-item + layoutId 滑动下划线 */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-item mx-3 px-1 text-[15px] font-semibold tracking-wide ${
                  isActive(link.path)
                    ? 'is-active text-[color:var(--color-ink-900)]'
                    : `${scrolled ? 'text-white/75 hover:text-white' : 'text-[color:var(--color-ink-600)] hover:text-[color:var(--color-ink-900)]'}`
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute left-0 right-0 -bottom-0.5 h-[3px] rounded-full bg-gradient-to-r from-[#FFC93B] via-[color:var(--color-amber-500)] to-[#B57F00]"
                    transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* 右侧：语言 + 电话 CTA */}
          <div className="flex items-center gap-3">
            {/* 语言切换 - 玻璃化 pill（带 aria-label + class="lang-btn" 命中 CSS 对比度修复） */}
            <div className={`hidden sm:flex items-center rounded-full overflow-hidden transition-colors ${
              scrolled
                ? 'bg-white/15 border border-white/15 text-white'
                : 'bg-white/60 border border-[color:var(--color-ink-200)] text-[color:var(--color-ink-900)]'
            }`}>
              <button
                onClick={() => setLang('zh')}
                type="button"
                aria-label={lang === 'zh' ? '当前语言：简体中文（已选中）' : '切换到简体中文'}
                aria-pressed={lang === 'zh'}
                className={`lang-btn px-3.5 py-1.5 text-xs font-bold transition-all ${
                  lang === 'zh'
                    ? 'bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)] shadow-sm'
                    : `${scrolled ? 'text-white/85 hover:text-white' : 'text-[color:var(--color-ink-600)] hover:text-[color:var(--color-ink-900)]'}`
                }`}
              >
                中
              </button>
              <span className={`w-px h-3 ${scrolled ? 'bg-white/15' : 'bg-[color:var(--color-ink-200)]'}`} aria-hidden="true" />
              <button
                onClick={() => setLang('fr')}
                type="button"
                aria-label={lang === 'fr' ? 'Langue actuelle : Français (sélectionné)' : 'Passer en Français'}
                aria-pressed={lang === 'fr'}
                className={`lang-btn px-3.5 py-1.5 text-xs font-bold transition-all ${
                  lang === 'fr'
                    ? 'bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)] shadow-sm'
                    : `${scrolled ? 'text-white/85 hover:text-white' : 'text-[color:var(--color-ink-600)] hover:text-[color:var(--color-ink-900)]'}`
                }`}
              >
                FR
              </button>
            </div>

            {/* 电话 CTA - 琥珀色底 + pulse + ripple */}
            <a
              href={`tel:${t.contact.phones[0].tel}`}
              onClick={ripple}
              aria-label={`${t.common.hotline} ${t.contact.phones[0].display}`}
              className="btn-ripple hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)] text-sm font-extrabold transition-all hover:bg-[color:var(--color-amber-600)] hover:-translate-y-0.5 shadow-[0_10px_30px_-10px_rgba(232,164,0,0.7)]"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
              <span>{t.common.hotline}</span>
            </a>

            {/* 汉堡按钮 — 玻璃化（双语 aria-label） */}
            <button
              className={`lg:hidden p-2 rounded-full border transition-all ${
                scrolled
                  ? 'border-white/15 bg-white/10 text-white'
                  : 'border-[color:var(--color-ink-200)] bg-white/70 text-[color:var(--color-ink-900)]'
              }`}
              onClick={() => setOpen(!open)}
              aria-label={open
                ? (lang === 'zh' ? '关闭导航菜单' : 'Fermer le menu')
                : (lang === 'zh' ? '打开导航菜单' : 'Ouvrir le menu')}
              aria-expanded={open}
              type="button"
            >
              {open
                ? <X className="w-5 h-5" aria-hidden="true" />
                : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 — 玻璃深色 */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="lg:hidden overflow-hidden border-t border-white/10 glass-nav"
          >
            <div className="px-4 py-5 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3.5 px-3 text-[15px] font-bold border-b border-white/5 rounded-xl flex items-center justify-between ${
                    isActive(link.path)
                      ? 'text-white bg-white/5'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-[color:var(--color-amber-500)]">→</span>
                </Link>
              ))}
              {/* 移动语言 */}
              <div className="flex items-center justify-between py-4 px-2">
                <span className="text-xs text-white/50 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" aria-hidden="true" /> {lang === 'zh' ? '语言' : 'Langue'}
                </span>
                <div className="flex rounded-full overflow-hidden text-xs border border-white/15 bg-white/10 text-white" role="group" aria-label={lang === 'zh' ? '语言切换' : 'Changement de langue'}>
                  <button type="button" onClick={() => setLang('zh')} aria-pressed={lang === 'zh'} aria-label={lang === 'zh' ? '中文（已选中）' : '切换到中文'} className={`lang-btn px-3 py-1.5 font-bold ${lang==='zh' ? 'bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)]' : 'text-white/85 hover:text-white'}`}>中文</button>
                  <span className="w-px bg-white/15" aria-hidden="true" />
                  <button type="button" onClick={() => setLang('fr')} aria-pressed={lang === 'fr'} aria-label={lang === 'fr' ? 'Français (sélectionné)' : 'Passer en français'} className={`lang-btn px-3 py-1.5 font-bold ${lang==='fr' ? 'bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)]' : 'text-white/85 hover:text-white'}`}>FR</button>
                </div>
              </div>
              <a
                href={`tel:${t.contact.phones[0].tel}`}
                onClick={ripple}
                aria-label={`${t.common.hotline} ${t.contact.phones[0].display}`}
                className="btn-ripple mt-2 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)] font-extrabold shadow-[0_12px_30px_-10px_rgba(232,164,0,0.7)]"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
                {t.common.hotline} · {t.contact.phones[0].display}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
