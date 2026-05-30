'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePageTransition } from '@/lib/transition-context'

export default function TransitionOverlay() {
  const { stage } = usePageTransition()
  const show = stage === 'exiting' || stage === 'entering'

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] pointer-events-none flex"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="flex-1 bg-t-transition origin-bottom"
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: [0, 1, 1, 0],
                originY: ['100%', '100%', '0%', '0%'],
              }}
              transition={{
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1],
                times: [0, 0.45, 0.55, 1],
                delay: i * 0.03,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
