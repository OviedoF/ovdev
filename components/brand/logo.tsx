import type { SVGProps } from 'react'

/**
 * Marca "Fo" — Federico Oviedo.
 * Ligadura F + o: el brazo medio de la F se convierte en la o.
 * Monocromo: hereda `currentColor`, así funciona sobre cualquiera de los temas.
 *
 * - `<Logo />` sin `title` es decorativo (aria-hidden): usalo dentro de links que ya tienen aria-label.
 * - `<Logo title="Federico Oviedo" />` se anuncia como imagen.
 */
export function Logo({ title, className, ...props }: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {title && <title>{title}</title>}
      <path d="M12 12v40M12 12h26M12 28h28" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <circle cx="40" cy="40" r="12" stroke="currentColor" strokeWidth="8" />
    </svg>
  )
}

/** Marca + nombre, para footer, firmas, etc. */
export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="grid place-items-center w-9 h-9 rounded-xl bg-t-btn-bg text-t-btn-text">
        <Logo className="w-5 h-5" />
      </span>
      <span className="font-bold tracking-tight text-lg leading-none">Federico Oviedo</span>
    </span>
  )
}

export default Logo
