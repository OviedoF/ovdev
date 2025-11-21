'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const navItem =
  "relative overflow-hidden inline-block h-[26px] text-md font-medium text-white tracking-wider group";

const navText =
  "block transition-transform duration-300 group-hover:-translate-y-full";

const navTextHover =
  "block absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full";

const underline =
  "absolute bottom-[0] right-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300 origin-right";

// 🌟<< NUEVO: hook para detectar scroll >>
function useScrollDirection() {
  const [scrollUp, setScrollUp] = useState(true)

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const currentY = window.scrollY

      // Si scrollea hacia abajo → ocultar
      if (currentY > lastY && currentY > 50) {
        setScrollUp(false)
      } else {
        setScrollUp(true)
      }

      lastY = currentY
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrollUp
}

export function Navigation() {
  const scrollUp = useScrollDirection() // ⬆️ o ⬇️ control

  const itemsLeft = [
    { href: "/", label: "INICIO" },
    { href: "/about", label: "SOBRE MÍ" },
  ];

  const itemsRight = [
    { href: "/work", label: "TRABAJOS" },
    { href: "/contact", label: "CONTACTO" },
  ];

  return (
    <nav
      className={`
        nav-animated fixed top-0 left-0 right-0 z-50 bg-black
        transition-transform duration-300
        ${scrollUp ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="mx-auto px-12">
        <div className="flex h-[72px] items-center justify-between">

          {/* Left navigation */}
          <div className="flex items-center gap-10">
            {itemsLeft.map((item) => (
              <Link key={item.href} href={item.href} className={navItem}>
                <span className={navText}>{item.label}</span>
                <span className={navTextHover}>{item.label}</span>
                <span className={underline}></span>
              </Link>
            ))}
          </div>

          {/* Center logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 group overflow-hidden inline-block h-[20px] text-lg font-medium tracking-[0.2em] text-white"
          >
            <span className="block font-extrabold transition-transform duration-300 group-hover:-translate-y-full">
              FED. OVIEDO
            </span>

            <span className="block font-extrabold absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">
              FED. OVIEDO
            </span>

            <span className={underline} />
          </Link>

          {/* Right navigation */}
          <div className="flex items-center gap-10">
            {itemsRight.map((item) => (
              <Link key={item.href} href={item.href} className={navItem}>
                <span className={navText}>{item.label}</span>
                <span className={navTextHover}>{item.label}</span>
                <span className={underline}></span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navigation
