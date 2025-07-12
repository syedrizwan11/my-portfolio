export const skills = [
  "REACT",
  "NODE.JS",
  "EXPRESS",
  "PRISMA",
  "POSTGRES",
  "Serverless",
]

export const Animations = {
  FadeIn: "fadeIn",
  SlideInToRight: "slideInToRight",
  SlideInToTop: "slideInToTop",
} as const

export type AnimationTypes = (typeof Animations)[keyof typeof Animations]

export const Sections = {
  HOME: "home",
  ABOUT: "about",
  EXPERIENCE: "experience",
  SKILLS: "skills",
  CONTACT: "contact",
} as const
export const FooterID = "footer"

export const MY_EMAIL = "srizwan.dev@gmail.com"
export const MY_NUMBER = "+923479665933"
export const MY_LINKEDIN = "https://www.linkedin.com/in/syedrizwan-haider/"
export const MY_GITHUB = "https://github.com/syedrizwan11"
export const MY_WHATSAPP = "https://wa.me/message/G4QB27OSHJVHB1"

export type sectionsType = (typeof Sections)[keyof typeof Sections]

export const AllSections = { ...Sections, Footer: "footer" }
export type allSectionsType = (typeof AllSections)[keyof typeof AllSections]
