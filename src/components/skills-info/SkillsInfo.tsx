import { FlexedContainer } from "../../utils/components"

export const SkillsInfo = () => {
  return (
    <section className="bg-background rounded-tr-[4rem] rounded-bl-[4rem] text-white pt-5 pb-7 px-12 mt-4 w-fit text-sm">
      <FlexedContainer>
        <span className="text-greenDark">5+</span>
        Modern Technologies Mastered
      </FlexedContainer>
      <FlexedContainer>
        <span className="text-greenDark">2+</span>
        Years of Hands-on Experience
      </FlexedContainer>
      <FlexedContainer>
        <span className="text-greenDark">5+</span>
        Projects Delivered (2 Long-Term)
      </FlexedContainer>
    </section>
  )
}
