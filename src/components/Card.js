import React from "react"
import Image from "gatsby-image"
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa"

const Card = ({ data }) => {
  const {
    thumbnail: {
      childImageSharp: { fluid },
    },
  } = data
  return (
    <div className="card">
      <div className="details">
        <h4 className="title">{data.name}</h4>
        <p className="description">{data.description}</p>
        <div className="tags">
          {data.tech_stack.map(tag => (
            <span key={tag.id} className="project-tag">
              {tag.name}
            </span>
          ))}
        </div>
        <div className="links">
          {data.github && (
            <a href={data.github}>
              <FaGithubSquare />
            </a>
          )}
          {data.url && (
            <a href={data.github}>
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
      <div className="thumbnail-wrapper">
        <Image fluid={fluid} className="thumbnail" />
      </div>
    </div>
  )
}

export default Card
