import { FiBriefcase } from "react-icons/fi"
import { GrLocation } from "react-icons/gr"
import { IoIosLink } from "react-icons/io"
import { MdOutlineMail } from "react-icons/md"
import { FlexedContainer, Icon } from "../../utils/components"
import { FaDownload } from "react-icons/fa"
import { skills } from "../../constants/constants"
import image from "/images/image.jpeg"

export const ResumeContainer = () => {
  return (
    <section className="relative group bg-background border-2 border-white p-5 pb-3 text-sm sm:min-w-[20rem] max-w-[20rem] box-content rounded-2xl card ">
      <div className="absolute z-1 w-[20%] h-[20%] flex items-center justify-center bg-teal-700 rounded-tr-[15px] rounded-bl-[100%] transition-all duration-500 top-0 right-0 group-hover:bg-cyan-500"></div>
      <div className="absolute z-1 w-[20%] h-[20%] flex items-center justify-center bg-teal-700 rounded-tr-[100%] rounded-bl-[15px] transition-all duration-500 bottom-0 left-0 group-hover:bg-cyan-500"></div>

      <div className="border-2 border-greenDark rounded-full h-22 w-22 mx-auto overflow-hidden">
        <img src={image} className="-mt-3 ml-0" />
      </div>

      <header>
        <div className="text-center text-2xl">Syed Rizwan</div>
        <div className="text-center text-sm">Full-Stack software engineer</div>
      </header>

      <address>
        <FlexedContainer>
          <MdOutlineMail className="text-greenDark" />
          <a
            href="mailto:srizwan.dev@gmail.com"
            className="hover:underline hover:text-green-300 transition"
          >
            srizwan.dev@gmail.com
          </a>
        </FlexedContainer>
        <FlexedContainer>
          <GrLocation className="text-greenDark" />
          Gujrat, Pakistan
        </FlexedContainer>
        <FlexedContainer>
          <FiBriefcase className="text-greenDark" />
          Available for Full-time and freelance
        </FlexedContainer>
        <FlexedContainer>
          <IoIosLink className="text-greenDark" />
          <a
            href="https://www.linkedin.com/in/syedrizwan-haider/"
            className="hover:text-green-300 transition hover:underline"
          >
            linkedin.com/in/syedrizwan-haider/
          </a>
        </FlexedContainer>
      </address>

      <FlexedContainer className="flex-wrap justify-center">
        {skills.map((el) => (
          <Icon key={el}>{el}</Icon>
        ))}
      </FlexedContainer>

      <a
        href="/documents/Syed Rizwan Resume.pdf"
        className="relative z-10 group p-2 rounded-xl w-fit ml-auto px-4 flex items-center justify-center mt-10 gap-4 bg-gradient-to-r from-teal-400 to-sky-400 group-hover:from-sky-400 group-hover:to-teal-400 shadow shadow-indigo-200 border-solid border-sky-300 text-black text-shadow-xs text-shadow-cyan-200 text-[1rem] sm:text-xl cursor-pointer hover:scale-105 transition"
      >
        Download Resume{" "}
        <FaDownload className="group-hover:text-indigo-600 transition " />
      </a>
    </section>
  )
}
