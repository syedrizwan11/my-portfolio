import { motion, useAnimation } from "motion/react"
import type { ReactNode } from "react"

const FlexedContainer = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => (
  <div className={`pt-2 flex gap-2 items-center ${className}`}>{children}</div>
)

const Icon = ({ children }: { children: ReactNode }) => (
  <div className="p-1 px-4 bg-greenDark rounded-full text-black">
    {children}
  </div>
)

const AnimateToView = ({
  children,
  className,
  ease = "backOut",
  delay = true,
}: {
  children: ReactNode
  className?: string
  ease?: string
  delay?: boolean
}) => {
  const controls = useAnimation()
  return (
    <motion.div
      className={`${className}`}
      initial={{ scale: 0.4, opacity: 0 }}
      transition={{ ease, duration: 0.8 }}
      animate={controls}
      onViewportEnter={() =>
        delay
          ? setTimeout(() => {
              controls.start({ scale: 1, opacity: 1 })
            }, 300)
          : controls.start({ scale: 1, opacity: 1 })
      }
      onViewportLeave={() => {
        controls.start({ scale: 0.4, opacity: 0 })
      }}
    >
      {children}
    </motion.div>
  )
}

const BulletText = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <div className="text-greenDark text-xl mr-1">➤</div>
    <p className="mt-[1px]">{text}</p>
  </div>
)

export { FlexedContainer, Icon, AnimateToView, BulletText }
