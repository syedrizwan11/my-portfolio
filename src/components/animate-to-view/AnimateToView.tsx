import {
  motion,
  useAnimation,
  type AnimationDefinition,
  type TargetAndTransition,
} from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import type { ReactNode } from "react"
import { Animations, type AnimationTypes } from "../../constants/constants"

const animationVariants: Record<
  AnimationTypes,
  { initial: TargetAndTransition; animate: AnimationDefinition }
> = {
  [Animations.FadeIn]: {
    initial: { scale: 0.4, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  },
  [Animations.SlideInToRight]: {
    initial: { x: "30%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  [Animations.SlideInToTop]: {
    initial: { y: "40%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
}

interface AnimateToViewProps {
  children: ReactNode
  className?: string
  ease?: string
  delay?: boolean
  delayMs?: number
  duration?: number
  animationType?: keyof typeof animationVariants
}

export const AnimateToView = ({
  children,
  className,
  ease = "backOut",
  delay = true,
  delayMs = 300,
  duration = 0.8,
  animationType = Animations.FadeIn,
}: AnimateToViewProps) => {
  const controls = useAnimation()
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      if (delay) {
        setTimeout(() => {
          controls.start(animationVariants[animationType].animate)
        }, delayMs)
      } else {
        controls.start(animationVariants[animationType].animate)
      }
    }
  }, [inView, controls, animationType, delay, delayMs])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={animationVariants[animationType].initial}
      animate={controls}
      transition={{ ease, duration }}
    >
      {children}
    </motion.div>
  )
}
