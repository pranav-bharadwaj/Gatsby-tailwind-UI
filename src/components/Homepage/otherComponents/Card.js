import React from "react"

export default function Card({ img, headline, desc }) {
  return (
    <div className="text-center md:text-left flex flex-col items-center flex-wrap p-10 bg-white mx-3 my-3 rounded-3xl">
      <div className="w-full flex justify-center md:justify-start items-center">
        <img src={img} alt="creator" className="w-1/3" />
      </div>
      <div className="md:leading-7">
        <h1 className="font-semibold text-3xl">{headline}</h1>
        <p className="w-full font-medium text-gray-400 text-sm md:text-base md:leading-7">
          {desc}
        </p>
      </div>
    </div>
  )
}
