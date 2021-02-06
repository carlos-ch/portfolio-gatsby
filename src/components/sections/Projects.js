import React from "react"
import Card from "../Card"

const Projects = ({ links, projectsData }) => {
  return (
    <section id="projects" className="projects">
      <div className="section-center projects-center">
        <h3 className="projects-title">Projects</h3>
        <div className="projects-cards">
          {projectsData.map(project => (
            <Card data={project}></Card>
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
