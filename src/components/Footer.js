import React from "react"
import logoWhite from "../assets/logo_white.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-center">
        <img src={logoWhite} alt="footer logo" className="footer-logo" />
        <small>© 2021 Carlos Chavez</small>
      </div>
    </footer>
  )
}

export default Footer
