import { MdOutlineMail } from "react-icons/md"
import { motion } from "motion/react"
import { Animations, Sections } from "../../constants/constants"
import { AnimateToView } from "../animate-to-view/AnimateToView"

export const Introduction = () => {
  const handleScrollToContact = () => {
    const sectionElement = document.getElementById(Sections.CONTACT)
    sectionElement?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div>
      <h1>
        Hey{" "}
        <motion.span
          className="inline-block relative left-0"
          initial={{ rotate: -10 }}
          animate={{ rotate: [-10, 15, -10], left: [0, "15px", 0] }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: 1,
            delay: 1.5,
          }}
        >
          👋
        </motion.span>
      </h1>
      <AnimateToView
        ease="easeOut"
        animationType={Animations.SlideInToTop}
        staggerChildren
      >
        <h1>
          I'm <span className="text-greenDark">Syed Rizwan</span>
        </h1>

        <p className="mt-5">
          I build fast, scalable, and modern web applications—from polished
          frontends to robust backends—built to scale and built to last.
        </p>

        <h2 className="mt-1">Let's build something great together.</h2>

        <button
          onClick={handleScrollToContact}
          className="text-4xl text-greenDark mt-8 flex items-center gap-1 cursor-pointer"
        >
          Let’s Talk
          <span className="rounded-full bg-gray-500 p-1 mt-1">
            <MdOutlineMail className="text-greenDark text-2xl" />
          </span>
        </button>
      </AnimateToView>
    </div>
  )
}
