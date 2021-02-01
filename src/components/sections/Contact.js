import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// const iRef = useRef()
// const iOnScreen = useOnScreen(iRef)
// useEffect(() => {
//   if (sOnScreen) tControls.start({ opacity: 1, y: 0 })
//   if (iOnScreen) iControls.start({ opacity: 1, x: 0 })
// }, [tControls, iControls, sOnScreen, iOnScreen])

const Contact = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <section id="contact" className="contact">
      <div className="section-center contact-center">
        <h3 className="contact-title">Contact me</h3>
        <p>Consectetur adipisicing elit. Eligendi, eo!</p>
        <div className="contact-profile">
          <div className="avatar">
            <Image fluid={fluid} />
          </div>
          <div className="details">
            <strong>Carlos Chavez</strong>
            <br />
            <a href="mailto:email@email.com">
              <span>{`email@email.com`}</span>
            </a>
          </div>
          <div className="contact-social-links">
            <SocialLinks />
          </div>
        </div>
        <div className="contact-links"></div>
      </div>
    </section>
  )
}

export default Contact
