import type { ReactNode } from "react"
import { AnimateToView } from "../../components/animate-to-view/AnimateToView"

interface StepperProps {
  titleSection: ReactNode
  descriptionSection: ReactNode
  titleIcon: ReactNode
  isStart?: boolean
  isEnd?: boolean
}
export const Stepper = ({
  titleSection,
  titleIcon,
  descriptionSection,
  isStart,
  isEnd,
}: StepperProps) => {
  return (
    <div className="flex justify-end">
      <div className="my-10">
        <div className="hidden md:block bg-[#2C2F36] rounded-md p-2 mb-4 border-b-4 border-greenDark text-greenDark text-nowrap w-fit h-fit">
          <div className="flex gap-2 items-center">
            <div className="h-12 w-12 overflow-hidden">{titleIcon}</div>
            <div>{titleSection}</div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center">
        <div
          className={`bg-greenDark h-5 w-5 rotate-45 ${!isStart && "mb-4"}`}
        />
        <div className="bg-greenDark h-[calc(100%-2.5rem)] w-1 mx-auto" />

        {isEnd && <div className="bg-greenDark h-5 w-5 rotate-45" />}
      </div>
      <div className="my-5">
        <div className="relative right-5 top-12  bg-greenDark h-5 w-5 rounded-full" />
        <div className="opacity-100 md:opacity-0 bg-background rounded-md p-2 mb-4 border-b-4 border-greenDark text-greenDark text-nowrap w-fit h-fit">
          <div className="flex gap-2 items-center">
            <div className="h-12 w-12 overflow-hidden">{titleIcon}</div>
            <div>{titleSection}</div>
          </div>
        </div>
        <AnimateToView ease="easeInOut" delay={false}>
          <div className="bg-background rounded-2xl p-4">
            {descriptionSection}
          </div>
        </AnimateToView>
      </div>
    </div>
  )
}
