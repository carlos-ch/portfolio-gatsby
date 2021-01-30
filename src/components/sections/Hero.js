import React from "react"

import { Link } from "gatsby"
import SocialLinks from "../../constants/socialLinks"

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            {/* <div className="underline"></div> */}
            <h1>
              HI, <br />
              I'm Carlos
            </h1>
            <h3>Developer • maker • musician</h3>
            <div className="hero-description">
              <p>Freelance Full stack web developer based in Oslo</p>
            </div>
            <Link to="#contact" className="btn">
              Let's build something awesome!
            </Link>
            <div className="hero-social">
              <SocialLinks></SocialLinks>
            </div>
          </div>
        </article>
        {/* <div className="image-content">
          <Image className="about-author" fluid={fluid} />
        </div> */}
      </div>
    </section>
  )
}

export default Hero
