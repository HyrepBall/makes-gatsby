import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Мои записи</h1>

    <Link to="/new-post/">Создать запись</Link>
  </Layout>
)

export default IndexPage
