import { useEffect, useState } from "react"
import { AboutMe } from "../pages/about/AboutMe"
import { ContactPage } from "../pages/contact/ContactPage"
import { Experience } from "../pages/experience/Experience"
import { SkillStack } from "../pages/skill-stack/SkillStack"
import { Sections } from "../constants/constants"
import { HashLoader } from "react-spinners"
import { Home } from "../pages/home/Home"
import bgImage from "/images/green-background.webp"
import { preload } from "react-dom"

export const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    preload(bgImage, { as: "image" })

    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000) // optional smooth delay
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => window.removeEventListener("load", handleLoad)
  }, [])

  if (isLoading)
    return (
      <div className="flex justify-center items-center flex-col w-screen h-screen">
        <HashLoader color="#46ecd5" />
        <div>
          <span className="text-sm">made by </span>
          <span className="text-teal-300">Rizwan</span>
        </div>
      </div>
    )

  return (
    <div className="overflow-x-hidden bg-background2">
      <div
        id={Sections.HOME}
        className="min-h-screen text-sm sm:text-lg bg-cover bg-[70%_50%] sm:bg-[0%_0%]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Home />
      </div>
      <div
        id={Sections.ABOUT}
        className={`md:bg-gradient-to-tr bg-gradient-to-br  from-60% from-background2 via-teal-500 to-background2 min-h-screen text-sm sm:text-lg p-4 sm:px-[10%] px-[7%]`}
      >
        <AboutMe />
      </div>
      <div
        id={Sections.EXPERIENCE}
        className={`min-h-screen text-sm sm:text-lg p-4 sm:px-[10%] px-[7%] pt-22`}
      >
        <Experience />
      </div>
      <div
        id={Sections.SKILLS}
        className={` min-h-screen text-sm sm:text-lg p-4 sm:px-[10%] px-[7%] py-[10%]`}
      >
        <SkillStack />
      </div>

      <div
        id={Sections.CONTACT}
        className={`relative min-h-screen text-sm sm:text-lg p-4 sm:px-[10%] px-[7%] pt-[5%]`}
      >
        <ContactPage />
      </div>
    </div>
  )
}
