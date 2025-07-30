import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa"
import Line from "../../assets/svgs/line.svg?react"

import { IconAndTitle, IconToolTip } from "../../utils/components"
import {
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiServerless,
  SiTypescript,
} from "react-icons/si"

import css from "/svgs/icons_file-type-css.svg"
import html from "/svgs/icons_file-type-html.svg"
import js from "/svgs/icons_file-type-js-official.svg"
import tailwind from "/svgs/icons_file-type-tailwind.svg"
import git from "/svgs/icons_git.svg"
import { AnimateToView } from "../../components/animate-to-view/AnimateToView"

export const SkillStack = () => {
  return (
    <div>
      <div className="flex justify-between sm:flex-row flex-col-reverse gap-10 z-10 relative">
        <AnimateToView className="basis-1/2" ease="easeInOut">
          <div className="bg-background rounded-xl p-4 text-center">
            <h1 className="text-center">My TechStack</h1>
            <div className="mb-4 text-gray-400">
              {" "}
              Technologies I’ve been working with recently
            </div>
            <div className="flex gap-4 flex-wrap justify-center items-center text-2xl">
              <IconAndTitle
                text="React"
                icon={<FaReact className="text-cyan-400" />}
              />
              <IconAndTitle
                text="Typescript"
                icon={<SiTypescript className="text-blue-500" />}
              />

              <IconAndTitle
                text="Node.js"
                icon={<FaNodeJs className="text-green-500" />}
              />

              <IconAndTitle
                text="Express"
                icon={<SiExpress className="text-gray-300" />}
              />

              <IconAndTitle
                text="Prisma"
                icon={<SiPrisma className="text-indigo-400" />}
              />

              <IconAndTitle
                text="Postgres"
                icon={<SiPostgresql className="text-sky-500" />}
              />

              <IconAndTitle
                text="Serverless"
                icon={<SiServerless className="text-red-400" />}
              />
            </div>
            <div className="text-xl my-4 text-gray-400">Other Technologies</div>
            <div className="flex justify-center flex-wrap gap-4">
              <IconToolTip icon={<img src={html} alt="html" />} text="HTML5" />
              <IconToolTip icon={<img src={css} alt="css" />} text="CSS3" />
              <IconToolTip icon={<img src={js} alt="js" />} text="Javascript" />
              <IconToolTip
                icon={<img src={tailwind} alt="tailwind" />}
                text="Tailwind-css"
              />
              <IconToolTip icon={<img src={git} alt="git" />} text="Git" />
              <FaGithub title="Github" className="text-green-300 text-5xl" />
            </div>
          </div>
        </AnimateToView>
        <div className="basis-1/2 text-center">
          <div className="text-greenDark mx-auto text-3xl w-fit mb-5 text-center">
            What I Do
            <Line />
          </div>
          <div className="min-h-28 bg-background rounded-xl p-4">
            <div className="text-2xl">Full Stack Developer</div>
            <div className="mt-4">
              I develop scalable web applications from frontend to backend using
              modern frameworks and databases.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mt-4 gap-4">
            <div className="min-h-28 bg-background rounded-xl p-4">
              <div className="text-2xl">Frontend Development</div>
              <div className="text-sm mt-4">
                I build pixel-perfect UI with React, Tailwind, and TypeScript
                for fast, accessible user experiences
              </div>
            </div>
            <div className="bg-background rounded-xl p-4">
              <div className="text-2xl">Backend Development</div>
              <div className="text-sm mt-4">
                I craft secure APIs, handle databases, and deploy cloud-native
                services using Node.js, Express, Prisma
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
