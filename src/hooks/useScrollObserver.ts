import { useEffect, useState } from "react"
import { AllSections, type allSectionsType } from "../constants/constants"

export const useScrollObserver = (threshold = 0.3) => {
  const [currentSection, setCurrentSection] = useState<allSectionsType>(
    AllSections.HOME
  )
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (visibleEntry) {
          const id = visibleEntry.target.id as allSectionsType
          setCurrentSection(id)
        }
      },
      { threshold }
    )

    Object.values(AllSections).forEach((section) => {
      const sectionElement = document.getElementById(section)
      if (sectionElement) observer.observe(sectionElement)
    })

    return () => {
      observer.disconnect()
    }
  }, [threshold])
  return { currentSection }
}
