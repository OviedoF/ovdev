import { ImageResponse } from 'next/og'
import { SITE_NAME, TAGLINE } from '@/lib/site'

export const alt = `${SITE_NAME} | ${TAGLINE}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** Geist desde Google Fonts (TTF). Si falla la red, satori usa su fuente por defecto. */
async function loadGeist(weight: 400 | 700): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(`https://fonts.googleapis.com/css2?family=Geist:wght@${weight}&display=swap`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:12.0) Gecko/20100101 Firefox/12.0' },
    }).then((r) => r.text())
    const url = css.match(/src:\s*url\(([^)]+)\)\s*format\('(?:truetype|opentype|woff)'\)/)?.[1]
    if (!url) return null
    return await fetch(url).then((r) => r.arrayBuffer())
  } catch {
    return null
  }
}

export default async function OpenGraphImage() {
  const [regular, bold] = await Promise.all([loadGeist(400), loadGeist(700)])
  const fonts = []
  if (regular) fonts.push({ name: 'Geist', data: regular, weight: 400 as const, style: 'normal' as const })
  if (bold) fonts.push({ name: 'Geist', data: bold, weight: 700 as const, style: 'normal' as const })

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#271A9D',
          color: '#FEFEFE',
          fontFamily: 'Geist, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div
            style={{
              width: 132,
              height: 132,
              borderRadius: 34,
              background: '#3AC2F3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="84" height="84" viewBox="0 0 64 64" fill="none">
              <path d="M12 12v40M12 12h26M12 28h28" stroke="#1005A4" strokeWidth="8" strokeLinecap="round" />
              <circle cx="40" cy="40" r="12" stroke="#1005A4" strokeWidth="8" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 30, letterSpacing: 6, color: '#b8a4e8', textTransform: 'uppercase' }}>Federico Oviedo</div>
            <div style={{ fontSize: 24, color: '#7a68b8', marginTop: 8 }}>Diseño, desarrollo y mantenimiento</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1, letterSpacing: -4 }}>Vos la idea,</div>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1, letterSpacing: -4, color: '#3AC2F3', marginTop: 8 }}>yo el resto.</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 26, color: '#b8a4e8' }}>
          <div style={{ display: 'flex' }}>Sitios web · apps móviles · sistemas a medida</div>
          <div style={{ display: 'flex', color: '#3AC2F3' }}>Argentina · remoto</div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  )
}
