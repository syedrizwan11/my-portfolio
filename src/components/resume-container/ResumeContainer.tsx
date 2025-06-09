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
    <section className="bg-background border-2 border-white p-5 text-sm sm:min-w-[20rem] max-w-[75vw] box-content rounded-tl-[4rem] rounded-br-[4rem]">
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
        className="p-4 rounded-full flex items-center justify-center mt-5 gap-4 bg-white text-black text-xl cursor-pointer hover:text-green-700 transition"
      >
        Download Resume <FaDownload className="text-greenDark" />
      </a>
    </section>
  )
}
