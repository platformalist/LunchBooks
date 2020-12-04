import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { SEO } from "components"
import { Biography, PageHeader } from "views"

function AboutPage() {
  const { aboutHeader, aboutHeadshot, opengraph } = useStaticQuery(IMAGE_QUERY)

  return (
    <>
      <SEO
        title="About"
        description="Author of science fiction, including 'A Being of Some Cosmic Importance'. Send any questions, concerns or inquiries to inquiries@jamesprower.com."
        imageOpenGraph={opengraph.publicURL}
        imageAlt="James Prower, the author of 'A Being of Some Cosmic Importance'."
      />

      <PageHeader title="About" image={aboutHeader.childImageSharp.fluid} />
      <Biography image={aboutHeadshot} />
    </>
  )
}

const IMAGE_QUERY = graphql`
  {
    aboutHeader: file(relativePath: { eq: "hero_about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutHeadshot: file(relativePath: { eq: "headshot_about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    opengraph: file(relativePath: { eq: "opengraph.jpg" }) {
      publicURL
      childImageSharp {
        fixed(width: 1200, height: 627) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AboutPage
