import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import { useI18n } from './i18n/I18nContext'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        else window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [pathname, hash])
  return null
}

function DocLang() {
  const { lang } = useI18n()
  useEffect(() => {
    // <html lang=""> 随语言切换动态更新（SEO / a11y 屏幕读屏器语音）
    const html = document.documentElement
    const next = lang === 'fr' ? 'fr-MG' : 'zh-CN'
    if (html.getAttribute('lang') !== next) {
      html.setAttribute('lang', next)
    }
    // og:locale 同步（Facebook / LinkedIn 抓取）
    const ogLocale = document.querySelector('meta[property="og:locale"]') as HTMLMetaElement | null
    if (ogLocale) {
      ogLocale.content = lang === 'fr' ? 'fr_MG' : 'zh_CN'
    }
  }, [lang])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* A11Y Skip Link —— Tab 一下直接跳主内容（WCAG 2.4.1 Bypass Blocks） */}
      <a href="#main" className="skip-link">跳到主内容 · Skip to content</a>
      <ScrollToTop />
      <DocLang />
      <Navbar />
      <main id="main" className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
