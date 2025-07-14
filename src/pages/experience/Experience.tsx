import Line from "../../assets/svgs/line.svg?react"
import { Stepper } from "./Stepper"
import { FaReact, FaNodeJs, FaLaptopCode } from "react-icons/fa"
import {
  SiTypescript,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiServerless,
} from "react-icons/si"

import uogIcon from "/images/uog-image.png"
import nexthonIcon from "/images/nexthon.png"
import { FaGraduationCap } from "react-icons/fa6"
import { BulletText } from "../../utils/components"

export const Experience = () => {
  return (
    <section>
      <div className="text-greenDark mx-auto text-3xl w-fit mb-12 text-center">
        Professional Experience
        <Line />
      </div>

      <Stepper
        isStart
        titleSection={
          <>
            <div>Nexthon Technologies</div>
            <div className="">November, 2023 - March, 2025</div>
          </>
        }
        titleIcon={<img src={nexthonIcon} />}
        descriptionSection={
          <>
            <div className="italic text-xl mb-4 flex justify-between text-greenDark">
              Full Stack Software Engineer
              <div className="flex flex-wrap gap-4 items-center text-2xl cursor-pointer">
                <FaReact title="React" className="text-cyan-400" />
                <SiTypescript title="TypeScript" className="text-blue-500" />
                <FaNodeJs title="Node.js" className="text-green-500" />
                <SiExpress title="Express" className="text-gray-300" />
                <SiPrisma title="Prisma" className="text-indigo-400" />
                <SiPostgresql title="PostgreSQL" className="text-sky-500" />
                <SiServerless
                  title="Serverless Framework"
                  className="text-red-400"
                />
              </div>
            </div>

            <BulletText
              text="Built a
                dynamic component library using React and TypeScript for a
                slide-based SP learning Portal Application. Created reusable
                interactive components, activities and games ( like word search, hangman, scrabble etc.) for an educational portal used
                by an Australian academic institute. Enabled content admins to
                design lessons and activities dynamically aligned with the
                academic calendar."
            />
            <BulletText
              text="Led full-stack development of a NAPLAN (National Assessment
              Program) testing platform: Created responsive and accessible
              interfaces using React, implementing multiple question types such
              as MCQs, image-based questions, sentence matchers, and
              drag-and-drop interactions."
            />
            <BulletText
              text="Designed scalable APIs and business logic using Node.js,
              Express, and TypeScript. Managed database schema and relationships
              with Prisma and PostgreSQL. Deployed the backend using Serverless
              architecture (e.g., AWS Lambda), optimizing for scalability and
              cost-efficiency."
            />
          </>
        }
      />

      <Stepper
        isEnd
        titleSection={
          <>
            <div>University of Gujrat</div>
            <div className="">August,2019 - September,2023</div>
          </>
        }
        titleIcon={
          <div className="rounded-full bg-white">
            <img src={uogIcon} />
          </div>
        }
        descriptionSection={
          <>
            <div className="italic text-xl mb-4 flex justify-between items-center text-greenDark">
              BS-Software Engineering.
              <div className="flex gap-4 text-2xl">
                <FaGraduationCap />
                <FaLaptopCode />
              </div>
            </div>

            <BulletText
              text="Studied core principles of software development, including
              object-oriented programming, data structures, databases, and web
              technologies. Completed academic projects using React, Node.js,
              and SQL. Gained strong foundation in software engineering
              practices, agile methodologies, and system design."
            />
            <BulletText
              text="Developed Real Time Library management System in React, node,
              express, sql for a semester Project"
            />
            <BulletText
              text="Developed NestPoint, NestJs learning and evaluation platform as
              FYP using NestJs backend."
            />
          </>
        }
      />
    </section>
  )
}
