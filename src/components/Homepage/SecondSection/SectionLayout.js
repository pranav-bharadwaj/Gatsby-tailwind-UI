import React from "react"
import SelectorSlider from "./SelectorSlider"

function SectionLayout({ information, featureName }) {
  return (
    <div className="w-full mt-32 flex md:items-start flex-col ">
      <div className="items-start ml-10 md:ml-0 font-semibold text-headlineTextText ">
        <p>{featureName.name}</p>
      </div>
      <div className="font-semibold ml-10 md:ml-0 text-HeadlineFirstSection  text-[28px] md:text-[64px] md:w-3/4">
        <h1>{featureName.headline}</h1>
      </div>
      <div className="md:w-full">
        <SelectorSlider information={information} />
      </div>
    </div>
  )
}

export default SectionLayout
