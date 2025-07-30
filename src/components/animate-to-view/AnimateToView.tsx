import { motion, type Variants, type Transition } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Children, type ReactNode } from "react"
import { Animations, type AnimationTypes } from "../../constants/constants"

interface AnimateToViewProps {
  children: ReactNode
  className?: string
  ease?: string
  delayInSeconds?: number
  duration?: number
  animationType?: AnimationTypes
  staggerChildren?: boolean
}

export const AnimateToView = ({
  children,
  className,
  ease = "backOut",
  delayInSeconds = 0.3,
  duration = 0.8,
  animationType = Animations.FadeIn,
  staggerChildren = false,
}: AnimateToViewProps) => {
  const { ref, inView } = useInView({ triggerOnce: true })

  const transition: Transition = {
    ease,
    duration,
    delay: delayInSeconds || 0,
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: staggerChildren
        ? {
            staggerChildren: 0.4,
            when: "beforeChildren",
          }
        : {},
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {Children.map(children, (child, i) => (
        <motion.div
          key={i}
          variants={animationVariants[animationType]}
          transition={transition}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

const animationVariants: Record<AnimationTypes, Variants> = {
  [Animations.FadeIn]: {
    hidden: { scale: 0.4, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  [Animations.SlideInToRight]: {
    hidden: { x: "30%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  [Animations.SlideInToTop]: {
    hidden: { y: "40%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
}
