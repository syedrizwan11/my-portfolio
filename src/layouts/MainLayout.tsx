import { AboutMe } from "../components/about/AboutMe"
import { ContactPage } from "../components/contact/ContactPage"
import { Experience } from "../components/experience/Experience"
import { Introduction } from "../components/introduction/Introduction"
import { NavBar } from "../components/navbar/NavBar"
import { ResumeContainer } from "../components/resume-container/ResumeContainer"
import { SkillStack } from "../components/skill-stack/SkillStack"
// import { SkillsInfo } from "../components/skills-info/SkillsInfo"
import { TopBar } from "../components/top-bar/TopBar"
import { Sections } from "../constants/constants"
import linesBackground2 from "/images/dark-background2.jpg"

export const MainLayout = () => {
  return (
    <div className="overflow-x-hidden bg-background2">
      <div
        id={Sections.HOME}
        className="min-h-screen text-sm sm:text-lg"
        style={{
          background: `url(${linesBackground2})`,
          backgroundSize: "cover",
          backgroundOrigin: "center",
        }}
      >
        <NavBar />
        <div className="w-full h-full min-h-screen backdrop-blur-md">
          <TopBar />
          {/* <h1 className="text-4xl text-center mb-4 mt-4">Full-Stack Developer</h1> */}
          <div className="flex justify-evenly flex-col items-center mx-[10%] mt-5 gap-4 lg:flex-row">
            <Introduction />
            <ResumeContainer />
            {/* <SkillsInfo /> */}
          </div>
        </div>
      </div>
      <div
        id={Sections.ABOUT}
        className={`md:bg-gradient-to-tr bg-gradient-to-br  from-60% from-background2 via-teal-500 to-background2 min-h-screen text-sm sm:text-lg p-4`}
      >
        <AboutMe />
      </div>
      <div
        id={Sections.EXPERIENCE}
        className={`min-h-screen text-sm sm:text-lg p-4 px-[10%] pt-[5%]`}
      >
        <Experience />
      </div>
      <div
        id={Sections.SKILLS}
        className={` min-h-screen text-sm sm:text-lg p-4 px-[10%] pt-[5%]`}
      >
        <SkillStack />
      </div>

      <div
        id={Sections.CONTACT}
        className={`relative min-h-screen text-sm sm:text-lg p-4 px-[10%] pt-[5%]`}
      >
        <ContactPage />
      </div>
    </div>
  )
}
