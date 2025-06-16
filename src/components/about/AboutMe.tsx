import image from "/images/me.png"
import { TbCopy } from "react-icons/tb"
import { ToastContainer, toast } from "react-toastify"
import { AnimateToView } from "../../utils/components"
import Line from "../../assets/svgs/smallLine.svg?react"

export const AboutMe = () => {
  const handleCopy = () => {
    toast("Copied")
    navigator.clipboard.writeText("srizwan.dev@gmail.com")
  }
  return (
    <div>
      <div className="pt-[2%]">
        <div className="text-greenDark mx-auto text-3xl w-fit text-center">
          About Myself
          <Line />
        </div>

        <AnimateToView className="flex gap-4 justify-between flex-col md:flex-row md:items-start items-center">
          <>
            <div className="basis-2/3">
              <div className="bg-gradient-to-l from-background to-gray-600 p-4 mt-6 rounded-2xl transition-transform duration-300 hover:scale-102">
                <h1 className="text-4xl font-bold mb-4 border-b-4 rounded-sm border-green-400 w-fit pb-2 pr-1">
                  Hi there,
                </h1>

                <p className="mb-4 text-lg">
                  I’m{" "}
                  <span className="text-greenDark text-lg">Syed Rizwan</span> —
                  a
                  <span className="text-greenDark text-lg">
                    {" "}
                    Full-Stack Developer
                  </span>{" "}
                  passionate about building fast, scalable, and modern web
                  applications that look great and perform even better.
                </p>

                <p className="mb-4 text-lg">
                  I specialize in{" "}
                  <span className="text-greenDark">
                    React, TypeScript, and Node.js, Express, Prisma and Postgres
                  </span>
                  , working across the stack to deliver clean, maintainable, and
                  high-performing solutions . From polished frontends to robust
                  backend systems, I focus on building reliable software that’s{" "}
                  <span className="text-greenDark">easy to scale</span>,{" "}
                  <span className="text-greenDark">easy to maintain</span>, and
                  built with
                  <span className="text-greenDark"> long-term success</span> in
                  mind.
                </p>

                <p className="mb-4 text-lg">
                  I care deeply about{" "}
                  <span className="text-greenDark">code quality</span>, team
                  collaboration, and creating user-centric products that align
                  with business goals. Whether working independently or as part
                  of a team, I bring a thoughtful, solution-driven mindset to
                  every project.
                </p>
              </div>

              <div className=" flex items-center gap-4 w-fit mt-5 border-teal-500 border-2  rounded-2xl text-center pl-4 overflow-hidden mx-auto md:mx-0">
                Copy my Email Address
                <div
                  onClick={handleCopy}
                  className=" bg-teal-500 text-3xl text-black p-2 px-4 cursor-pointer"
                >
                  <TbCopy />
                </div>
              </div>
            </div>
            <div className=" relative rounded-full  w-[15rem] h-[22rem] border-b-[5px] border-greenDark overflow-hidden">
              <div className=" absolute top-[7rem] rounded-full border-4 border-greenDark bg-teal-100  w-[15rem] aspect-square transition-transform duration-300 hover:scale-102"></div>
              <div className="absolute top-[-1rem]  z-1000">
                <img src={image}></img>
              </div>
            </div>
          </>
        </AnimateToView>
      </div>
      <ToastContainer />
    </div>
  )
}
