import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Box, Flex } from "components"

const IndexPage = () => (
  // <Wrapper pt={["128px", "196px"]} mb="layout.6">
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <Box height="500px" width="500px" bg="red" />
      <Flex height="500px" width="500px" bg="green" />
    </div> */}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  // {/* </Wrapper> */}
)

export default IndexPage
