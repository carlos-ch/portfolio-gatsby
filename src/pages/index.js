import React from "react"
import Hero from "../components/sections/Hero"
import Layout from "../components/Layout"
import Services from "../components/Services"
import About from "../components/sections/About"
import Interests from "../components/sections/Interests"
import Projects from "../components/sections/Projects"

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero></Hero>
        <Services></Services>
        <About></About>
        <Interests></Interests>
        <Projects links={{ links: { github: "github.com" } }}></Projects>
      </Layout>
    </div>
  )
}
