import React, { useRef } from "react"
import { motion } from "framer-motion"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa"
// import { useEffect } from "react"
import { useOnScreen } from "../hooks"

const iconList = {
  github: <FaGithubSquare className="social-icon"></FaGithubSquare>,
  linkedin: <FaLinkedin className="social-icon"></FaLinkedin>,
  twitter: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
  facebook: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
}

/*  animation variants */
const container = {
  // hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default ({ styleClass, data }) => {
  const ref = useRef()
  const onScreen = useOnScreen(ref)
  // const animation = useAnimation()
  // useEffect(() => {
  //   if (onScreen) animation.start(container)
  // }, [onScreen, animation])
  const links = data.map(link => {
    return (
      <motion.li key={link.id} variants={item}>
        <a href={link.url} className="social-link">
          {iconList[link.name]}
        </a>
      </motion.li>
    )
  })
  return (
    <motion.ul
      ref={ref}
      variants={container}
      initial="hidden"
      animate={onScreen ? "visible" : "hidden"}
      className={`social-links ${styleClass ? styleClass : ""}`}
    >
      {links}
    </motion.ul>
  )
}
