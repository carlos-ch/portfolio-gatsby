import React, { useEffect } from "react"
import { Link } from "gatsby"
import SocialLinks from "../../constants/socialLinks"

import { motion, useAnimation } from "framer-motion"

const Hero = ({ social }) => {
  const hControls = useAnimation()
  const tControls = useAnimation()
  const sControls = useAnimation()

  useEffect(() => {
    async function loadAnimation() {
      await hControls.start({ opacity: 1, y: 0 })
      await tControls.start({ opacity: 1, x: 0 })
      await sControls.start({ opacity: 1, x: 0 })
    }
    loadAnimation()
  }, [tControls, sControls, hControls])

  return (
    <section id="hero" className="hero">
      <div className="section-center hero-center">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={hControls}
          className="hero-info"
        >
          <h1>
            HI, <br />
            I'm Carlos
          </h1>
          <h3>developer • maker • musician</h3>
          <motion.div
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={hControls}
          >
            <p>Freelance Full stack web developer based in Oslo</p>
          </motion.div>
          <Link to="#contact" className="btn">
            Let's build something awesome!
          </Link>
          <motion.div
            className="hero-social"
            initial={{ opacity: 0, x: 20 }}
            animate={sControls}
          >
            <SocialLinks data={social}></SocialLinks>
          </motion.div>
        </motion.article>
      </div>
    </section>
  )
}

export default Hero
