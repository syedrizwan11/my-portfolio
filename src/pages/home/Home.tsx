import { NavBar } from "../../components/navbar/NavBar"
import { TopBar } from "../../components/top-bar/TopBar"
import { Introduction } from "../../components/introduction/Introduction"
import { AnimateToView } from "../../components/animate-to-view/AnimateToView"
import { ResumeContainer } from "../../components/resume-container/ResumeContainer"
import { Animations } from "../../constants/constants"

export const Home = () => {
  return (
    <>
      <NavBar />

      <div className="w-full h-full min-h-screen pb-22 ">
        <TopBar />
        {/* <h1 className="text-4xl text-center mb-4 mt-4">Full-Stack Developer</h1> */}
        <div className="flex justify-evenly flex-col items-center px-[10%] mt-5 gap-4 lg:flex-row">
          <Introduction />
          <AnimateToView
            animationType={Animations.SlideInToRight}
            ease="easeOut"
          >
            <ResumeContainer />
          </AnimateToView>
          {/* <SkillsInfo /> */}
        </div>
      </div>
    </>
  )
}
