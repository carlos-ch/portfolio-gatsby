import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <section id="about" className="about">
      <div className="section-center about-center">
        <div className="about-text">
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
        </div>
        <div className="image-content">
          <Image fluid={fluid} className="about-author"></Image>
        </div>
      </div>
    </section>
  )
}

export default About
