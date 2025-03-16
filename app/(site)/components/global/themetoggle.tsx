'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-gray-800" />
      ) : (
        <Sun className="h-5 w-5 text-gray-200" />
      )}
    </button>
  )
}

export default ThemeToggle