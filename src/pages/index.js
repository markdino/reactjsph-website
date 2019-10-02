import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import MissionSection from "../components/MissionSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <MissionSection />
  </Layout>
)

export default IndexPage
