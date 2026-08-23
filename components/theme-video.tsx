'use client'

import { themeThumbUrl, themeVideoUrls, type ThemeData } from '@/lib/theme'

type Props = {
  theme: ThemeData
  className?: string
  /** Ancho del poster (thumbnail JPG) que se ve mientras carga el video */
  posterWidth?: number
  style?: React.CSSProperties
} & Record<`data-${string}`, string | boolean | undefined>

/**
 * Reemplazo liviano del GIF de tema: <video> muteado en loop (decodificación por hardware)
 * con poster JPG optimizado. Mismo look, ~1% del peso y casi cero CPU.
 */
export default function ThemeVideo({ theme, className = '', posterWidth = 640, style, ...data }: Props) {
  const { mp4, webm } = themeVideoUrls(theme)
  return (
    <video
      key={theme.code}
      {...data}
      className={className}
      style={style}
      poster={themeThumbUrl(theme, posterWidth)}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      aria-hidden
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  )
}
