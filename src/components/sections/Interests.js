import React from "react"
import {
  FaGitSquare,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaHubspot,
  FaSass,
} from "react-icons/fa"
import { GrGraphQl, GrGatsbyjs } from "react-icons/gr"
import {
  SiPostgresql,
  SiMongodb,
  SiNetlify,
  SiHeroku,
  SiFirebase,
  SiStrapi,
  SiNextDotJs,
} from "react-icons/si"

const Interests = ({ data }) => {
  return (
    <section className="interests">
      <div className="section-center interests-center">
        <h3 className="interests-title">Interests {"&"} expertise</h3>
        <div className="interests-content">
          {data.map(interest => {
            return (
              <div key={interest.id} className="interests-content-item">
                <p>{interest.name}</p>
              </div>
            )
          })}
        </div>
        <div className="dev-icons">
          <div>
            <FaJsSquare className="tech-icon" />
            <p>JavaScript</p>
          </div>

          <div>
            <FaReact className="tech-icon" />
            <p>React</p>
          </div>
          <div>
            <FaSass className="tech-icon" />
            <p>Sass</p>
          </div>
          <div>
            <GrGatsbyjs className="tech-icon" />
            <p>Gatsby</p>
          </div>
          <div>
            <SiNextDotJs className="tech-icon" />
            <p>Next.js</p>
          </div>
          <div>
            <FaNodeJs className="tech-icon" />
            <p>NodeJS</p>
          </div>
          <div>
            <GrGraphQl className="tech-icon" />
            <p>GraphQL</p>
          </div>
          <div>
            <SiMongodb className="tech-icon" />
            <p>MongoDB</p>
          </div>
          <div>
            <SiPostgresql className="tech-icon" />
            <p>PostgreSQL</p>
          </div>
          <div>
            <SiStrapi className="tech-icon" />
            <p>Strapi</p>
          </div>
          <div>
            <FaDocker className="tech-icon" />
            <p>Docker</p>
          </div>
          <div>
            <FaAws className="tech-icon" />
            <p>AWS</p>
          </div>
          <div>
            <SiFirebase className="tech-icon" />
            <p>Firebase</p>
          </div>
          <div>
            <FaGitSquare className="tech-icon" />
            <p>git</p>
          </div>
          <div>
            <SiNetlify className="tech-icon" />
            <p>Netlify</p>
          </div>
          <div>
            <SiHeroku className="tech-icon" />
            <p>Heroku</p>
          </div>
          <div>
            <FaHubspot className="tech-icon" />
            <p>HubSpot</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Interests
