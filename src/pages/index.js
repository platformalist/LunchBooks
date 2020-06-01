import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { BookBlock, PageHeader, SEO } from "components"

function IndexPage() {
  const { file } = useStaticQuery(IMAGE_QUERY)
  console.log(file)

  const Library = [
    {
      title: "A Being of Some Cosmic Importance",
      cover: file.childImageSharp.fixed,
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
      <SEO title="Home" />

      {/* Books */}
      <PageHeader
        title="James Prower"
        body="The author of 'A Being of Some Cosmic Importance'. James writes Science Fiction and Fantasy novels, and lives in Calgary, Alberta with his wife and daughter. Send any questions, concerns or inquiries to inquiries@jamesprower.com."
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
    file(relativePath: { eq: "ABOSCI_Cover.jpg" }) {
      childImageSharp {
        fixed(width: 276, height: 412) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
