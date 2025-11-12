import React from 'react'
import logo from "../assets/user.png"
const Navbar = () => {
  return (
    <nav className="bg-linear-to-b from-cyan-400 to-cyan-200 shadow-sm h-12">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="logo"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-white font-semibold text-lg">
            MyApp
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
