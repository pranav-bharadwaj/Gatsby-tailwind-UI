import React from "react"

export default function FourthSection() {
  const images = [
    "https://getbreakout.com/assets/images/googleSheets.png",
    "https://getbreakout.com/assets/images/slackLogo.png",
    "https://getbreakout.com/assets/images/zapier.png",
  ]
  return (
    <div className="w-full flex flex-col items-center">
      <div className="mx-2 md:mx-5 mt-28 font-semibold text-[28px] md:text-[64px] text-center md:w-full xl:w-4/6 lg:w-3/4 sm:w-full xs:w-1/2 ">
        <h3 className="text-HeadlineFirstSection">
          Integrate workflows with your favourite cloud applications
        </h3>
      </div>
      <div className="text-HeadlineFirstSection text-base font-medium w-3/4 sm:w-full md:font-medium md:text-2xl  md:w-4/3 text-center mt-5 md:leading-10">
        <p>Put Breakout to work for you with the complete no-code solution</p>
      </div>
      <div className="w-3/4 flex flex-wrap justify-around mt-10 ">
        {images.map((data, key) => {
          return (
            <img
              src={data}
              alt={key}
              key={key}
              className={`w-2/5 opacity-50 md:w-1/5 md:opacity-100`}
            />
          )
        })}
      </div>
    </div>
  )
}
