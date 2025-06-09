export const skills = ["REACT", "NODE.JS", "EXPRESS", "PRISMA", "POSTGRES"]

//export const  = ["home", "about", "", "PRISMA", "POSTGRES"]

export const Sections = {
  HOME: "home",
  ABOUT: "about",
  EXPERIENCE: "experience",
  SKILLS: "skills",
  CONTACT: "contact",
} as const
export type sectionsType = (typeof Sections)[keyof typeof Sections]
