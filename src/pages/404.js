import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFound = () => {
  return (
    <Layout>
      <SEO title="404 Not found"></SEO>
      <main className="notfound">
        <div className="error-container section-center">
          <h1>404</h1>
          <h4>Sorry, can't find this page.</h4>
          <Link to="/" className="btn">
            Back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default NotFound
