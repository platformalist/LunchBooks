import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { SEO } from "components"
import { Library } from "views"

function IndexPage() {
  const { cosmicCover, opengraph } = useStaticQuery(IMAGE_QUERY)

  const BookList = [
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
      synopsis: (
        <>
          Under the Kleane administration, every major city in the country is
          outfitted with a Hive, a mass-incarceration facility with cells no
          bigger than a coffin. The president's next big idea? Project Second
          Life, a plan to ship prisoners off-planet to Martian colonies. He
          claims that the scheme will save taxpayer dollars and permanently
          relieve the eyesore of the Hives from everyday life.
          <br />
          <br />
          But to Martian Citizen 89, the project comes at the cost of human
          life, dignity, and safety. Visions of space travel, futuristic
          prisons, and portals abound in the story of 89 and his struggle to
          survive in Kleane's Martian colony.
          <br />
          <br />
          The first entry in its broader mythos,{" "}
          <i>A Being of Some Cosmic Importance</i> establishes Prower's
          dystopian universe. How much power do we really have to sway the vast
          forces that shape us? And if we choose to use our power, are we ready
          to face the consequences?
        </>
      ),
    },
  ]

  return (
    <>
      <SEO
        title="Home"
        description="James Prower is a Canadian author of sci-fi, fantasy, and supernatural fiction, specializing in short stories and novels. Prower primarily focuses on parallel universes, mysterious objects from other worlds, and happenstance meetings with strange, rare creatures."
        imageOpenGraph={opengraph.publicURL}
        imageAlt="Peach and green storm clouds"
      />

      {BookList &&
        BookList[0] &&
        BookList.map((book, index) => (
          <Library {...book} key={"libraryItem" + index} />
        ))}
    </>
  )
}

const IMAGE_QUERY = graphql`
  {
    cosmicCover: file(relativePath: { eq: "ABOSCI_Cover.jpg" }) {
      childImageSharp {
        fixed(width: 276, height: 414, quality: 85) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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

export default IndexPage
