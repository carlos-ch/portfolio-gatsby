import React from "react"
import Hero from "../components/sections/Hero"
import Layout from "../components/Layout"
import Services from "../components/Services"
import About from "../components/sections/About"
import Interests from "../components/sections/Interests"

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero></Hero>
        <Services></Services>
        <About></About>
        <Interests></Interests>
      </Layout>
    </div>
  )
}
