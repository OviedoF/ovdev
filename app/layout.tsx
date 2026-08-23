import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import CursorFollower from '@/components/cursor-follower'
import { TransitionProvider } from '@/lib/transition-context'
import TransitionOverlay from '@/components/transition-overlay'
import { I18nProvider } from '@/lib/i18n'
import { ThemeProvider } from '@/lib/theme'
import SmoothScroll from '@/components/smooth-scroll'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Federico Oviedo | Vos la idea, yo el resto',
  description: 'Diseño, programo y publico tu sitio web, app móvil o sistema a medida. Y con un plan mensual me ocupo de que siga funcionando.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('portfolio-theme');
    if (t && ['deep-forests','underwater','pink-horizon','cat-sunset','miracle-night','route-dream','no-angels','tomorrow'].indexOf(t) !== -1) {
      document.documentElement.setAttribute('data-theme', t);
    } else {
      document.documentElement.setAttribute('data-theme', 'miracle-night');
    }
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'miracle-night');
  }
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
          <I18nProvider>
            <TransitionProvider>
              <SmoothScroll>
                <CursorFollower />
                <TransitionOverlay />
                {children}
              </SmoothScroll>
            </TransitionProvider>
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
