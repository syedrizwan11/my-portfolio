export const skills = ["REACT", "NODE.JS", "EXPRESS", "PRISMA", "POSTGRES"]

//export const  = ["home", "about", "", "PRISMA", "POSTGRES"]

export const Sections = {
  HOME: "home",
  ABOUT: "about",
  EXPERIENCE: "experience",
  SKILLS: "skills",
  CONTACT: "contact",
} as const
export const FooterID = "footer"

export type sectionsType = (typeof Sections)[keyof typeof Sections]

export const AllSections = { ...Sections, Footer: "footer" }
export type allSectionsType = (typeof AllSections)[keyof typeof AllSections]
