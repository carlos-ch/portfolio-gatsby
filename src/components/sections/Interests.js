import React from "react"
import interests from "../../constants/interests"

const Interests = () => {
  return (
    <section className="interests">
      <div className="section-center interests-center">
        <h3 className="interests-title">Interests {"&"} expertise</h3>
        <div className="interests-content">
          {interests.map(interest => {
            return (
              <div className="interests-content-item">
                <p>{interest.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Interests
