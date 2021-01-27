import React from "react"
import interests from "../../constants/interests"

const Interests = () => {
  return (
    <section className="interests">
      <div className="section-center">
        <h3 className="interests-title">Interests {"&"} expertise</h3>
        <div className="interests-content">
          {interests.map(interest => {
            return <div className="interests-content-item">{interest.icon}</div>
          })}
          <div>Skill 1</div>
          <div>skill 2</div>
          <div>skill 3</div>
          <div>skill 4</div>
        </div>
      </div>
    </section>
  )
}

export default Interests
