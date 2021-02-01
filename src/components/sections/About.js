import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { motion, useAnimation } from "framer-motion"
import { useOnScreen } from "../../hooks/"

import Image from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const tControls = useAnimation()
  const iControls = useAnimation()
  const tRef = useRef()
  const tOnScreen = useOnScreen(tRef)
  const iRef = useRef()
  const iOnScreen = useOnScreen(iRef)

  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  useEffect(() => {
    if (tOnScreen) tControls.start({ opacity: 1, y: 0 })
    if (iOnScreen) iControls.start({ opacity: 1, x: 0 })
  }, [tControls, iControls, tOnScreen, iOnScreen])

  return (
    <section id="about" className="about">
      <div className="section-center about-center">
        <motion.div
          className="about-text"
          ref={tRef}
          initial={{ opacity: 0, y: 20 }}
          animate={tControls}
        >
          <h3 className="about-text-title">About me</h3>
          <div className="about-text-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              itaque autem veritatis facilis, laborum sapiente placeat
              necessitatibus maiores reiciendis alias laboriosam pariatur quas
              accusamus ea deleniti tempora dolorum sint molestiae delectus,
              numquam nulla aut commodi recusandae. Quo blanditiis sint
              exercitationem?
            </p>
          </div>
        </motion.div>
        <motion.div
          className="image-content"
          ref={iRef}
          initial={{ opacity: 0, y: 20 }}
          animate={iControls}
        >
          <Image fluid={fluid} className="about-author"></Image>
        </motion.div>
      </div>
    </section>
  )
}

export default About
