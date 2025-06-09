import { MdOutlineMail } from "react-icons/md"
import { motion } from "motion/react"

export const Introduction = () => {
  return (
    <div>
      <h1>
        Hey{" "}
        <motion.span
          className="inline-block relative left-0"
          initial={{ rotate: -10 }}
          animate={{ rotate: [-10, 15, -10], left: [0, "15px", 0] }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: 1,
          }}
        >
          👋
        </motion.span>
      </h1>
      <h1>
        I'm <span className="text-greenDark">Syed Rizwan</span>
      </h1>
      <h2>Full-Stack Developer | React, TypeScript, Node, Express, Postgres</h2>

      <p className="mt-5">
        I build fast, scalable, and modern web applications—from polished
        frontends to robust backends—built to scale and built to last.
        {/* I build fast, scalable web applications—from polished frontends to robust
        backends—focused on delivering lasting impact and collaborating with
        teams to solve complex problems. */}
      </p>

      <h2 className="mt-1">Let's build something great together.</h2>

      <button className="text-4xl text-greenDark mt-3 flex items-center gap-1">
        Let’s Talk
        <span className="rounded-full bg-gray-500 p-1 mt-1">
          <MdOutlineMail className="text-greenDark text-2xl" />
        </span>
      </button>
    </div>
  )
}
