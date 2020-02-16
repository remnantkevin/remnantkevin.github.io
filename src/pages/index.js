import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      Find me on <a href="https://github.com/remnantkevin">Github</a>.
    </p>
  </Layout>
)

export default IndexPage
