import React from "react"
import Card from "../Card"
import projects from "../../constants/projects"

import { graphql, useStaticQuery } from "gatsby"

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

const Projects = ({ links }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <section id="projects" className="projects">
      <div className="section-center projects-center">
        <h3 className="projects-title">Projects</h3>
        <div className="projects-cards">
          {projects.map(project => (
            <Card data={project} image={fluid}></Card>
          ))}
        </div>
      </div>
      <a href={links.links.github} className="projects-cta-btn">
        <button className="cta-btn">Check out more on GitHub</button>
      </a>
    </section>
  )
}

export default Projects
