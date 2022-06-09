import React from "react"
import Card from "./Homepage/otherComponents/Card"

export default function ThirdSection() {
  return (
    <div className="w-full bg-bgColorOne flex items-center flex-col ">
      <div className=" mt-20  font-semibold text-[28px] md:text-[64px] text-center md:w-full xl:w-4/6 lg:w-3/4 sm:w-full xs:w-1/2 ">
        <h3 className="text-HeadlineFirstSection">
          Process management has become
          <span className="text-headlineTextText underline underline-offset-[11px] decoration-gray-300">
            &nbsp;Powerful & Easy
          </span>
        </h3>
      </div>
      <div className="text-HeadlineFirstSection text-base font-medium w-3/4 sm:w-full md:font-medium md:text-2xl  md:w-4/3 text-center mt-5 md:leading-10">
        <p>Put Breakout to work for you with the complete no-code solution</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-4/5 mt-5">
        <Card
          img={"https://getbreakout.com/assets/images/flowCreator.png"}
          headline={"Flow Creator"}
          desc={"Design your workflow with simple drag and drop"}
        />
        <Card
          img={"https://getbreakout.com/assets/images/superBots.png"}
          headline={"Super Bots"}
          desc={
            "Let bots do all your redundant work and you only worry about important things"
          }
        />
        <Card
          img={"https://getbreakout.com/assets/images/connectors.png"}
          headline={"Connectors"}
          desc={
            "Connect processes, data streams & applications via powerful automations"
          }
        />
        <Card
          img={"https://getbreakout.com/assets/images/collaborations.png"}
          headline={"Collaborators"}
          desc={
            "Work with teams without any friction and keep track of everything"
          }
        />
        <Card
          img={"https://getbreakout.com/assets/images/powefulBoards.png"}
          headline={"Powerful Boards"}
          desc={"Get a quick overview of processes from a single dashboard"}
        />
        <Card
          img={"https://getbreakout.com/assets/images/webForms.png"}
          headline={"Webforms"}
          desc={
            "Create elegant digital forms & document templates to collect information"
          }
        />
      </div>
    </div>
  )
}
