import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { SEO } from "components"
import { Biography } from "views"

function AboutPage() {
  const { opengraph } = useStaticQuery(IMAGE_QUERY)

  return (
    <>
      <SEO
        title="About"
        description="James Prower is a Canadian author of sci-fi, fantasy, and supernatural fiction, specializing in short stories and novels. If you’d like to speak with James, ask about his work, or inquire about anything else, send an email to inquiries@jamesprower.com and he’ll be sure to get back to you."
        imageOpenGraph={opengraph.publicURL}
        imageAlt="Peach and green storm clouds"
      />

      <Biography />
    </>
  )
}

const IMAGE_QUERY = graphql`
  {
    opengraph: file(relativePath: { eq: "opengraph.jpg" }) {
      publicURL
      childImageSharp {
        fixed(width: 1200, height: 627, quality: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AboutPage
