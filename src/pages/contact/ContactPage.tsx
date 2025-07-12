import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import footer from "../../assets/svgs/footer.svg"
import { LuFilePenLine } from "react-icons/lu"
import Line from "../../assets/svgs/line.svg?react"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { MdPermContactCalendar } from "react-icons/md"
import { toast, ToastContainer } from "react-toastify"
import { IoCopy } from "react-icons/io5"
import {
  MY_EMAIL,
  MY_GITHUB,
  MY_LINKEDIN,
  MY_NUMBER,
  MY_WHATSAPP,
} from "../../constants/constants"
import { AnimateToView } from "../../components/animate-to-view/AnimateToView"
interface formDataProps {
  name: string
  email: string
  message: string
  file?: File
}

export const ContactPage = () => {
  const [formData, setFormData] = useState<formDataProps>({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const formRef = useRef(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return
    setIsLoading(true)
    toast
      .promise(
        emailjs.sendForm(
          import.meta.env.VITE_MAIL_SENDER_SERVICE,
          import.meta.env.VITE_MAIL_SENDER_TEMPLATE,
          formRef.current,
          {
            publicKey: import.meta.env.VITE_MAIL_SENDER_KEY,
          }
        ),
        {
          pending: "Your message is being sent",
          success: "Message Sent Successfully 👌",
          error: "Message Failed 🤯",
        }
      )
      .finally(() => {
        setIsLoading(false)
      })
  }
  const copyInfo = (info: string) => {
    navigator.clipboard.writeText(info)
    toast("Copied")
  }
  return (
    <div>
      <div className="flex justify-between sm:flex-row flex-col gap-4 z-10 relative">
        <div className="basis-1/3 text-center">
          <div className="text-greenDark mx-auto text-3xl w-fit mb-5 text-center">
            Let’s Work Together
            <Line />
          </div>
          <div> I'm Available for full-time employment and freelance work.</div>
          <div className="sm:py-12 mt-4">
            <div className="text-2xl mb-4">📬 Feel free to reach out:</div>
            <div className="text-greenDark flex items-center justify-center gap-2">
              {MY_EMAIL}
              <IoCopy
                className="cursor-pointer text-xl"
                onClick={() => copyInfo(MY_EMAIL)}
              />
            </div>
            <div className="text-greenDark flex items-center justify-center gap-2">
              {MY_NUMBER}
              <IoCopy
                className="cursor-pointer text-xl"
                onClick={() => copyInfo(MY_NUMBER)}
              />
            </div>
            <div className="flex text-greenDark text-3xl justify-center gap-4 mt-4">
              <a href={MY_LINKEDIN} target="_blank">
                <FaLinkedin className=" cursor-pointer hover:text-cyan-500 transition" />
              </a>
              <a href={MY_GITHUB} target="_blank">
                <FaGithubSquare className=" cursor-pointer hover:text-cyan-500 transition" />
              </a>
              <a href={`mailto:${MY_EMAIL}`}>
                <IoMdMail className=" cursor-pointer hover:text-cyan-500 transition" />
              </a>

              <a href={MY_WHATSAPP} target="_blank">
                <MdPermContactCalendar className=" cursor-pointer hover:text-cyan-500 transition" />
              </a>
            </div>
          </div>
        </div>
        <AnimateToView className="basis-1/2" ease="easeInOut" delay={false}>
          <div className="bg-gradient-to-br from-[#B86ADF] to-[#FF6C63] rounded-2xl p-6 px-10 sm:mb-0 mb-22">
            <h1 className="  text-center mb-1 text-shadow-[#6082B6] text-shadow-2xs">
              Have an exciting idea?{" "}
              <span
                className="text-greenDark"
                // style={{ WebkitTextStroke: "1px #6082B6" }}
              >
                Let’s make it happen.
              </span>
            </h1>
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="flex gap-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder=" "
                    required
                    name="name"
                    className="peer w-full border-0 border-b-2 border-white bg-transparent px-0.5 pt-6 pb-1 text-white placeholder-transparent focus:outline-none focus:border-white"
                    value={formData?.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                  <label className="pointer-events-none absolute left-0 top-1 text-white text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-1 peer-focus:text-sm">
                    Name
                  </label>
                </div>

                <div className="relative w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    required
                    className="peer w-full border-0 border-b-2 border-white bg-transparent px-0.5 pt-6 pb-1 text-white placeholder-transparent focus:outline-none focus:border-white"
                    value={formData?.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                  />
                  <label className="pointer-events-none absolute left-0 top-1 text-white text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-1 peer-focus:text-sm">
                    Email
                  </label>
                </div>
              </div>
              <div className="relative mt-2">
                <textarea
                  name="message"
                  placeholder=" "
                  required
                  className="peer w-full border-0 border-b-2 border-white bg-transparent px-0.5 pt-7 text-white placeholder-transparent focus:outline-none focus:border-white"
                  value={formData?.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                />
                <label className="pointer-events-none absolute left-0 top-1 text-white text-sm transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-1 peer-focus:text-sm">
                  Message
                </label>
                {/* <label
                  htmlFor="file"
                  className="flex items-center gap-1 text-teal-100 cursor-pointer "
                >
                  <LuFilePenLine className="text-2xl" />
                  Attach File
                  <input name="file" id="file" type="file" className="hidden" />
                </label> */}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-8 py-2 px-4 flex items-center min-w-40 gap-1 bg-greenDark text-DarkBlue w-fit rounded-sm hover:scale-105 transition cursor-pointer"
                >
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <>
                      <LuFilePenLine className="text-2xl" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </AnimateToView>
      </div>

      <div className="z-[1] absolute bottom-0 left-0 w-screen">
        <img src={footer} />
      </div>
      <div
        id="footer"
        className="z-20 absolute text-center bottom-0 w-[100vw] mx-auto left-0 text-black p-2"
      >
        © 2025 Syed Rizwan. All rights reserved.{" "}
        <span className="hidden sm:inline">
          Some visual elements are inspired by figma community.
        </span>
      </div>
      <ToastContainer position="top-center" />
    </div>
  )
}

const Spinner = () => (
  <div className="mx-auto w-8 h-8 rounded-full bg-gradient-to-tr from-pink-800 via-white  to-blue-800 p-[4px] animate-spin">
    <div className="bg-greenDark w-full h-full rounded-full"></div>
  </div>
)
