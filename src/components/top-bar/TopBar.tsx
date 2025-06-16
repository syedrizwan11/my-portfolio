import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { MY_GITHUB, MY_LINKEDIN } from "../../constants/constants"
export const TopBar = () => {
  return (
    <div className="">
      <div className="flex justify-between px-[5%] items-center pt-8">
        <div className="text-xl">SyedRizwan</div>
        <div className="flex justify-between gap-4 sm:gap-8 items-center">
          <span className="text-green-300 cursor-default">Home</span>

          <a href={MY_GITHUB} target="_blank">
            <span className="flex items-center gap-1">
              <FaGithub className="text-green-300" /> Github
            </span>
          </a>
          <a href={MY_LINKEDIN} target="_blank">
            <span className="flex items-center gap-1">
              <FaLinkedin className="text-green-300" />
              Linkedin
            </span>
          </a>
        </div>
      </div>
      <div className="mx-[5%] bg-gray-600 h-[1px] mt-8"></div>
    </div>
  )
}
