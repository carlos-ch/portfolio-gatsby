import React from "react"
// import { useRef } from "react"
import PageLinks from "../constants/links"
// import useOutsideClick from "../hooks/useOutsideClick"

const Sidebar = ({ open, setOpen }) => {
  /* close sidebar when click outside */
  // const ref = useRef(null)

  // useOutsideClick(ref, () => {
  //   setOpen(false)
  // })
  return (
    <>
      <div className={`sidebar ${open ? "open" : ""}`}>
        <nav className="sidebar-nav">
          <PageLinks
            styleClass="sidebar-links"
            open={open}
            setOpen={setOpen}
          ></PageLinks>
        </nav>
      </div>
      <div className={`sidebar-backdrop ${open ? "open" : ""}`}></div>
    </>
  )
}

export default Sidebar
