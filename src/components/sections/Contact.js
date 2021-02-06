import React from "react"
import Image from "gatsby-image"
import SocialLinks from "../../constants/socialLinks"

// const iRef = useRef()
// const iOnScreen = useOnScreen(iRef)
// useEffect(() => {
//   if (sOnScreen) tControls.start({ opacity: 1, y: 0 })
//   if (iOnScreen) iControls.start({ opacity: 1, x: 0 })
// }, [tControls, iControls, sOnScreen, iOnScreen])

const Contact = ({ data }) => {
  const {
    avatar: {
      childImageSharp: { fluid },
    },
    name,
    email,
    message,
    social,
  } = data

  return (
    <section id="contact" className="contact">
      <div className="section-center contact-center">
        <h3 className="contact-title">Contact me</h3>
        <p>{message}</p>
        <div className="contact-profile">
          <div className="avatar">
            <Image fluid={fluid} />
          </div>
          <div className="details">
            <strong>{name}</strong>
            <br />
            <a href={"mailto:" + email}>
              <span>{email}</span>
            </a>
          </div>
          <div className="contact-social-links">
            <SocialLinks data={social} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
