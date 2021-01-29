import React from "react"
import Image from "gatsby-image"

const Card = ({ data, image }) => {
  return (
    <div className="card">
      <div className="details">
        <h4 className="title">{data.title}</h4>
        <p className="description">{data.text}</p>
        <div className="tags">
          {data.tags.map(tag => (
            <span className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="links">{data.links}</div>
      </div>
      <div className="thumbnail-wrapper">
        <Image fluid={image} className="thumbnail" />
      </div>
    </div>
  )
}

export default Card
