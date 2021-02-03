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

const data = [
  {
    id: 4,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "github.com",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "linkedin.com",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "twitter.com",
  },
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "facebook.com",
  },
]

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

const links = data.map(link => {
  return (
    <motion.li key={link.id} variants={item}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </motion.li>
  )
})

export default ({ styleClass }) => {
  const ref = useRef()
  const onScreen = useOnScreen(ref)
  // const animation = useAnimation()
  // useEffect(() => {
  //   if (onScreen) animation.start(container)
  // }, [onScreen, animation])
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
