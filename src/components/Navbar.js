import React, { useState } from "react"
import logoBlack from "../assets/logo_black.svg"
import Sidebar from "./Sidebar"
import PageLinks from "../constants/links"
import Media from "react-media"

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  // const [isDesktop, setDesktop] = useState(true)

  // const updateMedia = () => {
  //   setDesktop(window.innerWidth > 800)
  // }

  // useEffect(() => {
  //   window.addEventListener("resize", updateMedia)
  //   return () => window.removeEventListener("resize", updateMedia)
  // })

  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logoBlack} alt="logo" />
        <Media queries={{ small: { maxWidth: 800 } }}>
          {matches =>
            matches.small ? null : <PageLinks styleClass="no-sidebar" />
          }
        </Media>
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
/* Check width of viewport
 https://stackoverflow.com/questions/46586165/react-conditionally-render-based-on-viewport-size */
