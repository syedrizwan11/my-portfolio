import { useEffect, useState } from "react"
import { Sections, type sectionsType } from "../constants/constants"

export const useScrollObserver = (threshold = 0.3) => {
  const [currentSection, setCurrentSection] = useState<sectionsType>(
    Sections.HOME
  )
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (visibleEntry) {
          const id = visibleEntry.target.id as sectionsType
          setCurrentSection(id)
        }
      },
      { threshold }
    )
    Object.values(Sections).forEach((section) => {
      const sectionElement = document.getElementById(section)
      if (sectionElement) observer.observe(sectionElement)
    })

    return () => {
      observer.disconnect()
    }
  }, [threshold])
  return { currentSection }
}
