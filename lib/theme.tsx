'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Theme =
  | 'deep-forests'
  | 'underwater'
  | 'pink-horizon'
  | 'cat-sunset'
  | 'miracle-night'
  | 'route-dream'
  | 'no-angels'
  | 'tomorrow'

export interface ThemeData {
  code: Theme
  name: string
  imageUrl: string
  gifUrl: string
  accent: string
  author: string
  authorLink: string
}

export const themes: ThemeData[] = [
  {
    code: 'deep-forests',
    name: 'Deep Forests',
    imageUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1658649076/tl7hmnq7d9mj0vnvyhtp.jpg',
    gifUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1658883939/zeldabotw_vnlkmk.gif',
    accent: '#4BB895',
    author: 'Nele-Diel',
    authorLink: 'https://www.deviantart.com/nele-diel/art/Deep-Forests-698759283',
  },
  {
    code: 'underwater',
    name: 'Underwater',
    imageUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1658649388/ewojmnhq7s7486i2scra.jpg',
    gifUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1658883942/waves_rhjgdo.gif',
    accent: '#70F2EA',
    author: 'Himari Art',
    authorLink: 'https://www.deviantart.com/himariart0/art/Underwater-View-853195011',
  },
  {
    code: 'pink-horizon',
    name: 'Pink Horizon',
    imageUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1658649493/p5mjon3ojdcqem7tajxf.jpg',
    gifUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1658883977/pink_jeuwr3.gif',
    accent: '#D08CB1',
    author: 'Erisiar',
    authorLink: 'https://www.deviantart.com/erisiar/art/Lillia-859185613',
  },
  {
    code: 'cat-sunset',
    name: 'Cat & Sunset',
    imageUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1659922704/neko_and_sunset_by_gauravpaints_dfas5iz-fullview_whqrcg.jpg',
    gifUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1659923006/6eed6c6cdd760b64261a66d0254e48fe_mr2kyk.gif',
    accent: '#F3B54A',
    author: 'gauravpaints',
    authorLink: 'https://www.deviantart.com/gauravpaints/art/Neko-and-sunset-925102331',
  },
  {
    code: 'miracle-night',
    name: 'Miracle Night',
    imageUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1659923358/nwpmehc2yxh8exndodcu.jpg',
    gifUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1659923576/animated-anime_n32xiv.gif',
    accent: '#3AC2F3',
    author: 'ryky',
    authorLink: 'https://www.deviantart.com/ryky/art/Miracle-Night-914363328',
  },
  {
    code: 'route-dream',
    name: 'Route Dream',
    imageUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1659924486/kmum3nwlqhf6sugukkeo.jpg',
    gifUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1659924479/5b8626bc2bd5a65d22f2278f57e6ee75_s1bres.gif',
    accent: '#E33147',
    author: 'kvacm',
    authorLink: 'https://www.deviantart.com/kvacm/art/Route-Dream-810732654',
  },
  {
    code: 'no-angels',
    name: 'No Angels',
    imageUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1659924779/kjzuv4yuxrvlqmpyisow.jpg',
    gifUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1659924959/4fe92e9aa63f037cd667c0c2240af1b7_mmlxcp.gif',
    accent: '#FBDBC0',
    author: 'NanoMortis',
    authorLink: 'https://www.deviantart.com/nanomortis/art/A-Sky-With-No-Angels-632888847',
  },
  {
    code: 'tomorrow',
    name: 'Tomorrow',
    imageUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1659925066/uy4m8kbcpilsknog8uta.png',
    gifUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1659925172/aesthetic-art_mnv33f.gif',
    accent: '#E9C7BA',
    author: 'NanoMortis',
    authorLink: 'https://www.deviantart.com/nanomortis/art/Tomorrow-Is-a-Better-Day-669496264',
  },
]

const DEFAULT_THEME: Theme = 'miracle-night'
const VALID_THEMES = themes.map((t) => t.code)

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
  selectorOpen: boolean
  openSelector: () => void
  closeSelector: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
  selectorOpen: false,
  openSelector: () => {},
  closeSelector: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME)
  const [selectorOpen, setSelectorOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') as Theme | null
    if (saved && VALID_THEMES.includes(saved)) {
      setThemeState(saved)
      document.documentElement.setAttribute('data-theme', saved)
    } else {
      document.documentElement.setAttribute('data-theme', DEFAULT_THEME)
    }
  }, [])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('portfolio-theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
      selectorOpen,
      openSelector: () => setSelectorOpen(true),
      closeSelector: () => setSelectorOpen(false),
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
