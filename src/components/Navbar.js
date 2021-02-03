import React, { useState } from "react"
import logoBlack from "../assets/logo_black.svg"
import Sidebar from "./Sidebar"
import PageLinks from "../constants/links"

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logoBlack} alt="logo" />
        {open ? <PageLinks></PageLinks> : null}
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
