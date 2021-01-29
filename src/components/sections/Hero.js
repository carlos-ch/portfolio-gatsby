import React from "react"
import Image from "gatsby-image"

import { graphql, Link, useStaticQuery } from "gatsby"
import SocialLinks from "../../constants/socialLinks"

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

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <section id="hero" className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            {/* <div className="underline"></div> */}
            <h1>I'm CC</h1>
            <h3>building things for the internet</h3>
            <div className="hero-description">
              <p>FreeLance Full stack web developer based in Oslo</p>
            </div>
            <Link to="/contact" className="btn">
              Contact me
            </Link>
            <div className="hero-social">
              <SocialLinks></SocialLinks>
            </div>
          </div>
        </article>
        <div className="image-content">
          <Image className="about-author" fluid={fluid} />
        </div>
      </div>
    </section>
  )
}

export default Hero
