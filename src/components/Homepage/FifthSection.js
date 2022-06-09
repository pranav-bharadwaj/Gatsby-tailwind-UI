import React from "react"
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"
export default function FifthSection() {
  return (
    <div className="w-full bg-bgColorOne flex items-center justify-center mt-24 flex-col py-14 md:py-32">
      <div className="mx-2 md:mx-5 mt-16 md:mt-26 font-semibold text-[28px] md:text-[64px] text-center md:w-full xl:w-4/6 lg:w-3/4 sm:w-full xs:w-1/2 ">
        <h3 className="text-HeadlineFirstSection">
          Teams are winning with Breakout
        </h3>
      </div>

      <div className="flex relative items-center flex-wrap justify-around w-full mt-5 md:mt-12">
        <div className="w-full justify-center md:w-1/2 ">
          <div className="flex relative items-center justify-center text-center md:text-left md:justify-end">
            <img
              src="https://getbreakout.com/assets/icons/quote.png"
              alt={"colon"}
              className="absolute w-[20px] md:w-[30px] left-[50%] top-[0%] md:left-[15%] md:top-[20%]"
            />

            <div className="flex flex-col w-3/4 items-center md:items-start">
              <div className="text-HeadlineFirstSection text-base font-medium w-full md:font-medium md:text-3xl  md:w-full mt-5 md:leading-10">
                <p>
                  Breakout helped us save a lot of hours spent on repetitive
                  tasks. Its a great tool for automating financial processes.
                </p>
              </div>
              <div className="">
                <img
                  className="w-[5rem]"
                  src={"https://getbreakout.com/assets/icons/5-star.jpeg"}
                  alt="rating"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center text-center md:text-left md:items-start md:flex-col mt-3 md:mt-0 w-full md:w-1/3">
          <div className="w-1/3 mt-2 md:mt-0">
            <img
              src="https://getbreakout.com/assets/logo/Recruiterflow.png"
              alt="Company"
            />
          </div>
          <div className="flex w-3/4 flex-col-reverse md:flex-row justify-around mt-2 items-center">
            <div>
              <h1 className="font-semibold text-HeadlineFirstSection text-lg">
                Divyesh Anada
              </h1>
              <p className="font-semibold text-gray-400 text-base md:text-lg">
                Co-founder & CEO
              </p>
            </div>
            <div className="w-1/5 md:w-1/4 ">
              <img
                src="https://getbreakout.com/assets/images/prakhar.jpeg"
                className="rounded-full"
                alt="profile"
              />
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-[50%]">
          <IoIosArrowBack size={"2.5rem"} />
        </div>
        <div className="absolute right-0 top-[50%]">
          <IoIosArrowForward size={"2.5rem"} />
        </div>
      </div>
    </div>
  )
}
