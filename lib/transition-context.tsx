'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import { useRouter } from 'next/navigation'

interface TransitionContextValue {
  navigateTo: (href: string) => void
  stage: 'idle' | 'exiting' | 'entering'
}

const TransitionContext = createContext<TransitionContextValue>({
  navigateTo: () => {},
  stage: 'idle',
})

export function usePageTransition() {
  return useContext(TransitionContext)
}

const EXIT_DURATION = 350
const ENTER_DURATION = 350

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [stage, setStage] = useState<'idle' | 'exiting' | 'entering'>('idle')

  const navigateTo = useCallback(
    (href: string) => {
      if (stage !== 'idle') return

      setStage('exiting')

      setTimeout(() => {
        router.push(href)
        setStage('entering')

        setTimeout(() => {
          setStage('idle')
        }, ENTER_DURATION)
      }, EXIT_DURATION)
    },
    [router, stage]
  )

  return (
    <TransitionContext.Provider value={{ navigateTo, stage }}>
      {children}
    </TransitionContext.Provider>
  )
}
