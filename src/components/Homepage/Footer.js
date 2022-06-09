import React from "react"

export default function Footer() {
  return (
    <>
      <div className="flex flex-col justify-start items-start relative md:flex-row w-full md:justify-center py-28 bg-[#F3F8FF]">
        <div className="w-1/4 flex items-center flex-col ml-2">
          <div>
            <img src="https://getbreakout.com/assets/logo/Breakout.svg" />
          </div>
          <div className="flex w-1/2 justify-around items-end mt-5">
            <img src="https://getbreakout.com/assets/social/facebook.svg" />
            <img src="https://getbreakout.com/assets/social/linkedin.svg" />
            <img src="https://getbreakout.com/assets/social/twitter.svg" />
          </div>
        </div>
        <div className="flex  md:ml-0 w-full justify-around flex-wrap">
          <div className="w-full ml-3 md:w-1/6 ">
            <h1 className="list-head">Popular Guides</h1>
            <ul className="flex md:block flex-wrap">
              <li className="list-item">
                <a href="">
                  Workflow Automation{" "}
                  <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  HR Process
                  <span className="md:hidden">
                    <span className="md:hidden">| &nbsp;</span>
                  </span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  Vendor Management
                  <span className="md:hidden">
                    <span className="md:hidden">| &nbsp;</span>
                  </span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  BPM
                  <span className="md:hidden">
                    <span className="md:hidden">| &nbsp;</span>
                  </span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  Procurement
                  <span className="md:hidden">
                    <span className="md:hidden">| &nbsp;</span>
                  </span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  No Code <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full ml-3 md:w-1/6 ">
            <h1 className="list-head">Breakout Usage Guide</h1>
            <ul className="flex md:block flex-wrap">
              <li className="list-item">
                <a href="">
                  Getting Started <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  Create a Workflow <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  Invite Users <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  Public vs Private Process
                  <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  Organization Settings
                  <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  Integrations <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full ml-3 md:w-1/6 ">
            <h1 className="list-head">Compare</h1>
            <ul className="flex md:block flex-wrap">
              <li className="list-item">
                <a href="">
                  Breakout vs Pipefy<span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  Breakout vs Kissflow{" "}
                  <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  Breakout vs Nintex <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  Breakout vs ProcessMaker
                  <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  Breakout vs Process Street
                  <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  Breakout vs QuickBase
                  <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full ml-3 md:w-1/6 ">
            <h1 className="list-head">About Us</h1>
            <ul className="flex md:block flex-wrap">
              <li className="list-item">
                <a href="">
                  <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  Privacy Policy <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  GDPR <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  Terms of Use <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  Contact Us <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full ml-3 md:w-1/6 ">
            <h1 className="list-head">Location</h1>
            <ul className="flex md:block flex-wrap">
              <li className="list-item">
                <a href="">
                  San Francisco, US <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  Bangalore, India <span className="md:hidden">| &nbsp;</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute flex justify-start text-gray-500 font-medium text-sm md:left-[8%] bottom-5">
          © 2021 Copyright Breakout Platforms Inc. All rights reserved
        </div>
      </div>
    </>
  )
}
