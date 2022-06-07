import React from "react"
import FirstSectionMain from "../../../static/assets/firstsection.png"
import FirstSectionNetmed from "../../../static/assets/firstsectionnetm.png"
import FirstSectionSdi from "../../../static/assets/firstsectionsdi-logo.jpeg"
import FirstSectionrecruite from "../../../static/assets/Firstsection-Recruiterflow.png"
import FirstSectionapplesmp from "../../../static/assets/firstsection-appitsimple.svg"
import FirstSectionrixer from "../../../static/assets/firstsection-rizek.svg"
import { IoIosPlayCircle } from "react-icons/io"
function FirstSection() {
  return (
    <div className="flex flex-col justify-around items-center bg-bgColorOne ">
      <div className="mt-28 font-semibold text-[28px] md:text-[64px] text-center md:w-full xl:w-4/6 lg:w-3/4 sm:w-full xs:w-1/2 ">
        <h3 className="text-HeadlineFirstSection">
          Design business workflows <br />
          with
          <span className="text-headlineTextText underline underline-offset-[11px] decoration-gray-300">
            &nbsp;no-code platform
          </span>
        </h3>
      </div>
      <div className="text-HeadlineFirstSection text-base font-medium sm:w-full md:font-semibold md:text-2xl  md:w-5/12 text-center mt-5 md:leading-10">
        <p>
          With clicks not code, turn your manual, paper-based & repetitive work
          into digital forms, workflows, and more.
        </p>
      </div>
      <div className="flex justify-around w-full items-center md:w-5/12 mt-8">
        <button className="bg-buttonColor w-1/2 py-3 text-base md:py-5 text-white md:text-xl font-semibold rounded-lg">
          Start Free Trail
        </button>
        <button className="hidden items-center text-HeadlineFirstSection font-semibold text-xl md:flex ">
          <IoIosPlayCircle size="1.25em" />
          See how it works
        </button>
      </div>
      <div className="mt-11 aspect-auto w-5/6 md:w-4/6">
        <img src={FirstSectionMain} alt="firstsection_features" />
      </div>
      <div className="mt-14 w-10/12 md:mt-36 text-center md:w-3/4 text-HeadlineFirstSection">
        <h2 className="font-semibold text-2xl md:text-4xl ">
          Join 100+ companies using Breakout to automate processes.
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-between w-7/12 h-48 md:h-full opacity-40 md:w-8/12  md:opacity-80 mb-32 md:mt-10">
        <div className="w-1/2 md:w-1/6">
          <img src={FirstSectionNetmed} alt="netmeds" />
        </div>
        <div className="w-1/3 md:w-14">
          <img src={FirstSectionSdi} alt="sdi" />
        </div>
        <div className="w-7/12 md:w-1/5">
          <img src={FirstSectionrecruite} alt="recurite" />
        </div>
        <div className="w-1/3 md:w-1/5">
          <img src={FirstSectionapplesmp} alt="applesimp" />
        </div>
        <div className="w-1/2 ml-16 md:ml-0 md:w-1/6 ">
          <img src={FirstSectionrixer} alt="rixer" />
        </div>
      </div>
    </div>
  )
}

export default FirstSection
