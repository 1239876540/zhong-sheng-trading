import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations, type Lang, type Dict } from './translations'

type I18nCtx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: Dict
}

const I18nContext = createContext<I18nCtx | null>(null)

const STORAGE_KEY = 'zs_lang'

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'zh'
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null
    return saved === 'fr' ? 'fr' : 'zh'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'fr'
  }, [lang])

  const setLang = (l: Lang) => setLangState(l)

  const value: I18nCtx = {
    lang,
    setLang,
    t: translations[lang],
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider')
  return ctx
}
