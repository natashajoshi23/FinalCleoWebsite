'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true) // dark is the default

  // On mount: restore saved preference. Default is dark if nothing saved.
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    setIsDark(saved !== 'light') // anything other than explicit 'light' → dark
  }, [])

  // On every change: apply to DOM and save
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
