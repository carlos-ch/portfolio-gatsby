import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const { siteTitle, siteDesc, author } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={title + " | " + siteTitle}>
      <meta name="description" content={description || siteDesc} />
      <meta name="author" content={author} />
      <link rel="icon" type="image/svg+xml" href="favicon.svg" sizes="16x16" />
      <link rel="icon" type="image/svg+xml" href="favicon.svg" sizes="32x32" />
    </Helmet>
  )
}

export default SEO
