import React from "react"
import PageLinks from "../constants/links"

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      <div className={`sidebar ${open ? "open" : ""}`}>
        <nav className="sidebar-nav">
          <PageLinks styleClass="sidebar-links"></PageLinks>
        </nav>
      </div>
      <div className={`sidebar-backdrop ${open ? "open" : ""}`}></div>
    </>
  )
}

export default Sidebar
