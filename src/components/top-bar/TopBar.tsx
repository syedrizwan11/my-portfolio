import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import logo from "/images/logo.png"
import { MY_GITHUB, MY_LINKEDIN } from "../../constants/constants"
export const TopBar = () => {
  return (
    <div className="">
      <div className="flex justify-between px-[5%] items-center pt-5">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.open("/", "_self")}
        >
          <img className="w-10 h-10" src={logo} alt="logo" />
          <div className=" whitespace-pre">
            <div className="text-2xl font-protest">Syed Rizwan</div>
            <div className="text-sm -mt-2">Software Engineer</div>
          </div>
        </div>

        <div className="flex justify-between gap-4 sm:gap-8 items-center">
          <a href={MY_GITHUB} target="_blank">
            <span className="flex items-center gap-1">
              <FaGithub className="text-green-300 text-3xl" />{" "}
              <span className="sm:inline hidden text-xl">Github</span>
            </span>
          </a>
          <a href={MY_LINKEDIN} target="_blank">
            <span className="flex items-center gap-1">
              <FaLinkedin className="text-green-300 text-3xl" />
              <span className="sm:inline hidden text-xl">Linkedin</span>
            </span>
          </a>
        </div>
      </div>
      <div className="mx-[5%] bg-gray-600 h-[1px] mt-5"></div>
    </div>
  )
}
