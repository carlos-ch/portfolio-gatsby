import React, { useState } from "react"
import logoBlack from "../assets/logo_black.svg"
import Sidebar from "./Sidebar"

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logoBlack} alt="logo" />
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
