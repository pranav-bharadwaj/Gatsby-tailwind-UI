import React from "react"
import videofcontent from "../../../../static/assets/firstsection.png"
const SliderComponent = ({ information }) => {
  return (
    <>
      {information.map((data, key) => {
        return (
          <div
            key={key}
            tabindex={key}
            className="flex flex-col w-[88%] md:w-10/12 bg-white focus:bg-sliderColor border-l-2 leading-5 focus:border-blue-600 px-10 py-7 justify-start cursor-pointer mb-5"
          >
            <h1 className="font-[500] text-2xl text-HeadlineFirstSection">
              {data.head}
            </h1>
            <p className="text-gray-500 mt-2">{data.body}</p>
          </div>
        )
      })}
    </>
  )
}
export default function SelectorSlider({ information }) {
  return (
    <div className="flex w-full flex-wrap items-center">
      <div className="w-full  flex flex-col items-center md:w-1/2 md:block">
        /
        <SliderComponent information={information} />
      </div>
      <div className="w-full md:w-1/2 h-full">
        <video
          src="https://getbreakout.com/assets/banner/compressed/form_screen.m4v"
          autoPlay
          loop
        />
      </div>
    </div>
  )
}
