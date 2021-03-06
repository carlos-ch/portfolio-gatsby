import React from "react"
import { graphql } from "gatsby"

import Hero from "../components/sections/Hero"
import Layout from "../components/Layout"
import About from "../components/sections/About"
import Interests from "../components/sections/Interests"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"
import SEO from "../components/seo"

export default function Home({ data }) {
  const {
    allStrapiProjects,
    allStrapiAbout,
    allStrapiContact,
    allStrapiInterests,
  } = data
  const githubLink = allStrapiContact.nodes[0].social.filter(
    link => link.name === "github"
  )
  return (
    <div>
      <Layout>
        <SEO
          title="Home"
          description="Personal portfolio with projects and contact info"
        />
        <Hero social={allStrapiContact.nodes[0].social}></Hero>
        <About data={allStrapiAbout.nodes[0]}></About>
        <Interests data={allStrapiInterests.nodes}></Interests>
        <Projects
          projectsData={allStrapiProjects.nodes}
          cta={githubLink[0].url}
        ></Projects>
        <Contact data={allStrapiContact.nodes[0]}></Contact>
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    allStrapiProjects(sort: { order: DESC, fields: id }) {
      nodes {
        tech_stack {
          name
          id
        }
        github
        description
        name
        url
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        id
      }
    }
    allStrapiAbout {
      nodes {
        desc
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allStrapiInterests {
      nodes {
        id
        name
      }
    }
    allStrapiContact {
      nodes {
        id
        email
        name
        message
        social {
          id
          name
          url
        }
        avatar {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
