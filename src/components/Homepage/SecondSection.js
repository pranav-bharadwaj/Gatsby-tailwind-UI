import React from "react"
import SectionLayout from "./SecondSection/SectionLayout"

export default function SecondSection() {
  const featureName = [
    {
      name: "TAKE CONTROL",
      headline: "Build process that matters",
    },
    {
      name: "SCALE EASILY",
      headline: "Run 1 or 1000 processes with zero effort",
    },
    {
      name: "WORK EFFICIENTLY",
      headline: "Made for successful teams",
    },
  ]
  const diffFeatures = [
    [
      {
        head: "Workflow & checklist for your core processes",
        body: "Design & visualise automation for any business process with intuitive easy drag & drop flow builder",
      },
      {
        head: "Approvals for compliance & audits",
        body: "Request and track approval automatically to reduce fraud & legal liability",
      },
      {
        head: "Dynamic web forms & documents",
        body: "Generate beautiful documents and digital forms just like your current paper-based docs",
      },
    ],
    [
      {
        head: "Dynamically assign tasks and dates",
        body: "All tasks & dates can be assigned automatically based on customizable logic",
      },
      {
        head: "Analyze processes for Scalability",
        body: "Update your business processes with intelligence to reduce delays and make them scalable",
      },
    ],
    [
      {
        head: "Onboard & manage team from workspace",
        body: "Create teams, manage users & set their access controls with click of a button",
      },
      {
        head: "Review documents with your team",
        body: "Collaborate with your team on proposals, contracts, invoices, agreements & more",
      },
      {
        head: "Stay updated with real-time progress",
        body: "Let Breakout track progress for you and send alerts based on custom rules",
      },
    ],
  ]
  return (
    <div className="flex flex-col justify-around items-center bg-white">
      <div className="mx-2 md:mx-5 mt-28 font-semibold text-[28px] md:text-[64px] text-center md:w-full xl:w-4/6 lg:w-3/4 sm:w-full xs:w-1/2 ">
        <h3 className="text-HeadlineFirstSection">
          Design, Visualise and Automate any process.
          <span className="text-headlineTextText underline underline-offset-[12px] decoration-gray-300">
            &nbsp;No Coding Needed
          </span>
        </h3>
      </div>
      <div className="text-HeadlineFirstSection mx-5 opacity-80 text-base font-medium md:text-2xl md:w-full xl:w-4/6 lg:w-3/4 sm:w-full xs:w-1/2 text-center mt-5 md:leading-10">
        <p>
          Create processes and bring teams, tools, customers together so
          business can run on autopilot and more confidently—all on a single
          platform.
        </p>
      </div>
      <div className="w-full  md:w-10/12 md:ml-0">
        <SectionLayout
          featureName={featureName[0]}
          information={diffFeatures[0]}
        />
      </div>
      <div className="w-full  md:w-10/12 md:ml-0">
        <SectionLayout
          featureName={featureName[1]}
          information={diffFeatures[1]}
        />
      </div>
      <div className="w-full  md:w-10/12 md:ml-0">
        <SectionLayout
          featureName={featureName[2]}
          information={diffFeatures[2]}
        />
      </div>
    </div>
  )
}
