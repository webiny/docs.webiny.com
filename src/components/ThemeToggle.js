import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { useEffect, useRef, useState } from 'react'

let DEFAULT_THEME = 'light';
if(typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches){
  DEFAULT_THEME = 'dark';
}


function update() {
  if ( localStorage.theme === 'dark' || (!('theme' in localStorage) && DEFAULT_THEME==='dark')) {
    document.documentElement.classList.add('dark', 'changing-theme')
  } else {
    document.documentElement.classList.remove('dark', 'changing-theme')
  }
  window.setTimeout(() => {
    document.documentElement.classList.remove('changing-theme')
  })
}

function useTheme() {
  let [setting, setSetting] = useState(DEFAULT_THEME)
  let initial = useRef(true)

  useIsomorphicLayoutEffect(() => {
    let theme = localStorage.theme
    if (theme === 'light' || theme === 'dark') {
      setSetting(theme)
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (setting === 'light' || setting === 'dark') {
      localStorage.theme = setting
    }
    if (initial.current) {
      initial.current = false
    } else {
      update()
    }
  }, [setting])

  useEffect(() => {
    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener('change', update)
    } else {
      mediaQuery.addListener(update)
    }

    function onStorage() {
      update()
      let theme = localStorage.theme
      if (theme === 'light' || theme === 'dark') {
        setSetting(theme)
      } else {
        setSetting('system')
      }
    }
    window.addEventListener('storage', onStorage)

    return () => {
      if (mediaQuery?.removeEventListener) {
        mediaQuery.removeEventListener('change', update)
      } else {
        mediaQuery.removeListener(update)
      }

      window.removeEventListener('storage', onStorage)
    }
  }, [])

  return [setting, setSetting]
}

export function ThemeToggle() {
  let [setting, setSetting] = useTheme() // eslint-disable-line no-use-before-define
  
  return (
    <>
      <button className="dark:hidden focus:outline-none" onClick={() => setSetting('dark')}>
        <svg
          width="49"
          height="26"
          viewBox="0 0 49 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="49" height="26" rx="13" fill="#334155" />
          <circle cx="13" cy="13" r="9" fill="white" />
          <path
            d="M36.0584 12.9416C35.2961 12.179 34.7769 11.2076 34.5666 10.15C34.3562 9.09247 34.464 7.99629 34.8764 7C33.7006 7.23147 32.6205 7.8084 31.7744 8.65701C29.4085 11.0229 29.4085 14.8591 31.7744 17.225C34.1409 19.5915 37.9765 19.5909 40.343 17.225C41.1914 16.3789 41.7683 15.2992 42 14.1236C41.0037 14.5359 39.9076 14.6437 38.85 14.4333C37.7925 14.2229 36.821 13.7038 36.0584 12.9416Z"
            fill="white"
          />
        </svg>
      </button>
      <button className="hidden dark:inline focus:outline-none" onClick={() => setSetting('light')}>
        <svg
          width="49"
          height="26"
          viewBox="0 0 49 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="49" height="26" rx="13" fill="white" />
          <circle cx="36" cy="13" r="9" fill="#33363B" />
          <path
            d="M9.997 13C9.997 14.6566 11.3446 16.0042 13.0012 16.0042C14.6578 16.0042 16.0054 14.6566 16.0054 13C16.0054 11.3434 14.6578 9.9958 13.0012 9.9958C11.3446 9.9958 9.997 11.3434 9.997 13ZM12.4 17.2H13.6V19H12.4V17.2ZM12.4 7H13.6V8.8H12.4V7ZM7 12.4H8.8V13.6H7V12.4ZM17.2 12.4H19V13.6H17.2V12.4Z"
            fill="#33363B"
          />
          <path
            d="M9.1819 17.6668L8.3335 16.8184L9.6061 15.5458L10.4545 16.3942L9.1819 17.6668Z"
            fill="#33363B"
          />
          <path
            d="M15.5454 9.60645L16.8186 8.33325L17.667 9.18165L16.3938 10.4549L15.5454 9.60645Z"
            fill="#33363B"
          />
          <path
            d="M9.6061 10.4554L8.3335 9.1822L9.1825 8.3338L10.4545 9.607L9.6061 10.4554Z"
            fill="#33363B"
          />
          <path
            d="M17.667 16.8184L16.8186 17.6668L15.5454 16.3936L16.3938 15.5452L17.667 16.8184Z"
            fill="#33363B"
          />
        </svg>
      </button>
    </>
  )
}
