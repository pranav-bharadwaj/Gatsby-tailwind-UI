import React from "react"
import Homepage from "../components/Homepage"
import Navbar from "../components/Navbar"
export default function Home() {
  return (
    <div className="font-sans">
      <div>
        <Navbar />
      </div>
      <div className="">
        <Homepage />
      </div>
    </div>
  )
}
