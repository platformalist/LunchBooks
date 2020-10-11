import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { BookBlock, PageHeader, SEO } from "components"

function IndexPage() {
  const { cosmicCover, homeHeader, opengraph } = useStaticQuery(IMAGE_QUERY)

  const Library = [
    {
      title: "A Being of Some Cosmic Importance",
      cover: cosmicCover.childImageSharp.fixed,
      genre: "Science Fiction",
      buttons: [
        {
          label: "Kindle",
          link:
            "https://www.amazon.com/dp/B084M7J2SS/ref=sr_1_1?keywords=a+being+of+some+cosmic+importance&qid=1581300738&s=digital-text&sr=1-1",
        },
        {
          label: "Kobo",
          link:
            "https://www.kobo.com/ca/en/ebook/a-being-of-some-cosmic-importance",
        },
        {
          label: "Nook",
          link:
            "https://www.barnesandnoble.com/w/a-being-of-some-cosmic-importance-james-prower/1136402791?ean=2940162769965",
        },
      ],
      synopsis:
        "An engaging vision of futuristic prisons, space travel and Martian politics. The first entry in its broader mythos, ‘A Being of Some Cosmic Importance’ establishes Prower's dystopian universe. How much power do we really have to sway the vast forces that shape us? And if we choose to use our power, are we ready to face the consequences?",
    },
  ]

  return (
    <>
      <SEO
        title="Home"
        description="The author of 'A Being of Some Cosmic Importance'. James writes Science Fiction and Fantasy novels, and lives in Calgary, Alberta with his wife and daughter."
        imageOpenGraph={opengraph.publicURL}
        imageAlt="James Prower, the author of 'A Being of Some Cosmic Importance'."
      />

      {/* Books */}
      <PageHeader
        title="James Prower"
        body="The author of 'A Being of Some Cosmic Importance'. James writes Science Fiction and Fantasy novels, and lives in Calgary, Alberta with his wife and daughter. Send any questions, concerns or inquiries to inquiries@jamesprower.com."
        image={homeHeader.childImageSharp.fluid}
      />

      {Library.map((book, index) => (
        <BookBlock
          title={book.title}
          genre={book.genre}
          cover={book.cover}
          synopsis={book.synopsis}
          buttons={book.buttons}
          index={index}
          key={"bookBlock" + index}
        />
      ))}
    </>
  )
}

const IMAGE_QUERY = graphql`
  {
    cosmicCover: file(relativePath: { eq: "ABOSCI_Cover.jpg" }) {
      childImageSharp {
        fixed(width: 276, height: 412) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    homeHeader: file(relativePath: { eq: "homeHeader4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
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

export default IndexPage
