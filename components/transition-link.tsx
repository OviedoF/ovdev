'use client'

import { type AnchorHTMLAttributes } from 'react'
import { usePageTransition } from '@/lib/transition-context'

interface TransitionLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string
  children: React.ReactNode
}

export default function TransitionLink({
  href,
  children,
  onClick,
  ...props
}: TransitionLinkProps) {
  const { navigateTo, stage } = usePageTransition()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onClick?.(e)
    if (stage === 'idle') {
      navigateTo(href)
    }
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
