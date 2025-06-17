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
  <div className="text-shadow-xs text-shadow-cyan-200 shadow shadow-indigo-200 p-1 px-4 bg-gradient-to-r from-teal-400 to-sky-400 rounded-full text-black hover:scale-105 transition cursor-default">
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
        controls.set({ scale: 0.4, opacity: 0 })
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

const IconAndTitle = ({ icon, text }: { icon: ReactNode; text: string }) => (
  <div className="px-4 p-2 bg-background2 rounded-lg group cursor-default flex items-center gap-4 justify-center relative">
    <span className="group-hover:left-1/2 group-hover:-translate-x-1/2 transition-opacity duration-300 relative">
      {icon}
    </span>
    <span className="group-hover:opacity-0">{text}</span>
  </div>
)

const IconToolTip = ({ icon, text }: { icon: ReactNode; text: string }) => (
  <div className="relative group inline-block cursor-pointer">
    <div className="w-12 h-12">{icon}</div>

    <div
      className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                  px-2 py-1 rounded bg-black text-white text-xs 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-pre"
    >
      {text}
    </div>
  </div>
)

export {
  FlexedContainer,
  Icon,
  AnimateToView,
  BulletText,
  IconAndTitle,
  IconToolTip,
}
