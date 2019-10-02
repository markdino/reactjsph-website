import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import MissionSection from "../components/MissionSection"
import VisionSection from "../components/VisionSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <MissionSection />
    <VisionSection />
  </Layout>
)

export default IndexPage
