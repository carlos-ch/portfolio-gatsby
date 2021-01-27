import React from "react"
import services from "../constants/services"
import Title from "./Title"

const Services = () => {
  return (
    <section className="section bg-gray ">
      <Title title="servicessss"></Title>
      <div className="services-center section-center">
        {services.map(service => {
          const { id, title, icon, text } = service
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
