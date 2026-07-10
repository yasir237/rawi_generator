// src/hooks/useTheme.js
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'rawi-editor-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'dark' || saved === 'light') return saved
  return 'light'
}

/**
 * يتحكم بوضع الداكن/الفاتح لواجهة المحرر فقط (مو الكارد المصدَّر).
 * يضيف/يشيل class="dark" على <html> ويحفظ الاختيار بالمتصفح.
 */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}