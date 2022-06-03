import React from "react"
import Logo from "../../static/assets/logo_gatsyby.png"
import { IoIosMenu, IoIosClose } from "react-icons/io"

const MobileNav = props => {
  return (
    <div className=" h-full bg-white flex flex-col w-60 ml-auto px-16 text-center text-xl font-semibold text-blue-500 z-50">
      <div className="ml-28 mt-7">
        <IoIosClose
          className=""
          size={"3em"}
          fontSize={"15px"}
          color={"gray"}
          onClick={() => {
            props.setOpen(!props.open)
          }}
        />
      </div>

      <a href="/" className="py-2">
        Roadmap
      </a>
      <a href="/" className="py-2">
        Pricing
      </a>
      <a href="/" className="py-2">
        Blog
      </a>
      <a href="/" className="py-2">
        Login
      </a>
      <button className="py-3 px-1 text-sm font-bold border-2 rounded-lg border-blue-400 mt-12">
        Start Free Trail
      </button>
      <button className="py-3 px-2 mt-3 bg-blue-700 text-base text-white font-bold rounded-lg">
        Book Demo
      </button>
    </div>
  )
}
function Navbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <nav className="fixed h-20 w-full">
      <div className=" flex flex-row justify-between mx-5 items-center h-full md:mx-24">
        <div className="w-32 ">
          <img src={Logo} alt="logo" />
        </div>
        {/* Desktop navigation */}
        <div className="hidden text-blue-700 font-semibold md:block">
          <a href="/" className="px-3">
            Roadmap
          </a>
          <a href="/" className="px-3">
            Pricing
          </a>
          <a href="/" className="px-7">
            Login
          </a>
          <button className="bg-blue-700 text-white px-4 py-2.5 font-medium rounded-lg">
            Book a Demo
          </button>
        </div>
        <div className="md:hidden">
          <IoIosMenu
            size={"2.4em"}
            color={"gray"}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed bg-black w-full h-full top-0 bg-opacity-50 md:hidden ${
          open ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed w-full h-full top-0 left-0 z-40 md:hidden ${
          open
            ? "transition-all duration-700 transform translate-x-0"
            : "transition-all duration-700 transform translate-x-full"
        }`}
      >
        <MobileNav open={open} setOpen={setOpen} />
      </div>
    </nav>
  )
}

export default Navbar
