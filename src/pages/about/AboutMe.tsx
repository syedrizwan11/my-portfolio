import image from "/images/me.png"
import { TbCopy } from "react-icons/tb"
import { ToastContainer, toast } from "react-toastify"
import { AnimateToView } from "../../components/animate-to-view/AnimateToView"
import Line from "../../assets/svgs/smallLine.svg?react"
import { MY_EMAIL } from "../../constants/constants"

export const AboutMe = () => {
  const handleCopy = () => {
    toast("Copied")
    navigator.clipboard.writeText(MY_EMAIL)
  }
  return (
    <div>
      <div className="pt-[2%]">
        <div className="text-greenDark mx-auto text-3xl w-fit text-center">
          About Myself
          <Line />
        </div>

        <AnimateToView ease="easeOut">
          <div className="flex gap-4 justify-between flex-col md:flex-row md:items-start items-center">
            <div className="basis-2/3">
              <div className="bg-gradient-to-l from-background to-gray-600 p-4 mt-6 rounded-2xl">
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

                <div className="p-4 rounded-xl border border-teal-500 bg-zinc-800 text-gray-100 shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🧑‍💻</span>
                    <div className=" text-base leading-relaxed">
                      <span className="text-teal-300">I care deeply </span>
                      about code quality, team collaboration, and creating
                      user-centric products that align with business goals.
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🧩</span>
                    <div className="text-base leading-relaxed">
                      Whether working independently or as part of a team, I
                      bring a{" "}
                      <span className="text-teal-300">
                        thoughtful, solution-driven mindset
                      </span>{" "}
                      to every project.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" relative rounded-full  w-[15rem] h-[22rem] border-b-[5px] border-greenDark overflow-hidden">
                <div className=" absolute top-[7rem] rounded-full border-4 border-greenDark bg-teal-100  w-[15rem] aspect-square transition-transform duration-300 hover:scale-102"></div>
                <div className="absolute top-[-1rem]  z-50">
                  <img src={image}></img>
                </div>
              </div>
              <div className=" flex items-center gap-4 w-fit mt-5 border-teal-500 border-2  rounded-full text-center pl-4 overflow-hidden mx-auto md:mx-0">
                Copy my Email Address
                <div
                  onClick={handleCopy}
                  className=" bg-teal-500 text-3xl text-black p-2 px-4 cursor-pointer"
                >
                  <TbCopy />
                </div>
              </div>
            </div>
          </div>
        </AnimateToView>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}
