import React, { useState } from "react"
import logo from "../assets/logo.svg"
import Sidebar from "./Sidebar"

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt="logo" />
        <button
          className={`toggle-btn ${open ? "open" : ""}`}
          type="button"
          onClick={() => setOpen(!open)}
        >
          <div />
          <div />
          <div />
        </button>
        <Sidebar open={open} setOpen={setOpen}></Sidebar>
      </div>
    </nav>
  )
}
