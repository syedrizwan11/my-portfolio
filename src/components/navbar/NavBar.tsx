import { useEffect, useState, type ReactNode } from "react"
import { AnimatePresence, easeInOut, motion } from "motion/react"

import "./navBar.styles.css"
import { FiGrid, FiUser } from "react-icons/fi"
import { FaCode } from "react-icons/fa6"
import { IoBriefcaseOutline } from "react-icons/io5"
import { MdOutlineMail } from "react-icons/md"
import { HiOutlineHome } from "react-icons/hi"
import { useScrollObserver } from "../../hooks/useScrollObserver"
import { Sections, type sectionsType } from "../../constants/constants"
export const NavBar = () => {
  const [showNav, setShowNav] = useState(true)
  const [isHorizontal, setIsHorizontal] = useState(false)

  const { currentSection } = useScrollObserver()

  const sectionIcons: Record<sectionsType, ReactNode> = {
    home: <HiOutlineHome />,
    about: <FiUser />,
    experience: <IoBriefcaseOutline />,
    skills: <FaCode />,
    contact: <MdOutlineMail />,
  }

  const handleScrollToView = (section: string) => {
    const sectionElement = document.getElementById(section)
    sectionElement?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)")
    const handleResize = (e: MediaQueryListEvent) => setIsHorizontal(e.matches)
    setIsHorizontal(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleResize)
    return () => mediaQuery.removeEventListener("change", handleResize)
  }, [])

  return (
    <div
      className={`navContainer fixed top-[50%] translate-y-[-50%] left-5 flex flex-col gap-1 border-2 border-white rounded-full p-1 cursor-pointer bg-background overflow-hidden w-fit min-w-max z-1000 ${
        !showNav && "opacity-50"
      }`}
    >
      <div
        className={`navItem bg-gray-500 text-white ${!showNav && ""}`}
        onClick={() => setShowNav((prev) => !prev)}
      >
        <FiGrid />
      </div>
      <AnimatePresence>
        {showNav && (
          <motion.div
            className="navItems overflow-hidden flex flex-col gap-1"
            initial={isHorizontal ? { width: "0" } : { height: "0" }}
            animate={{ height: "auto", width: "auto" }}
            exit={isHorizontal ? { width: "0" } : { height: "0" }}
            transition={{ duration: "0.8", ease: easeInOut }}
          >
            {Object.values(Sections).map((el) => (
              <div
                key={el}
                onClick={() => handleScrollToView(el)}
                className={`navItem ${
                  currentSection === el && "bg-teal-400 text-black"
                }`}
              >
                {sectionIcons[el]}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
