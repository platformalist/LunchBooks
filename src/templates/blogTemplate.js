import React from "react"
import { graphql } from "gatsby"
import { Flex, Heading, Link, SEO, VStack, Wrapper } from "components"
import { BlogPost } from "views"

function BlogNav({ next, previous }) {
  // Each button is wrapped in a div, so if it's not going to appear due to
  // being a first or last blog item, the buttons won't move.
  return (
    <Wrapper>
      <Flex justifyContent="space-between" width={1 / 2}>
        <div>
          {previous && (
            <Link href={previous}>
              <Heading children="Previous Post" size={400} />
            </Link>
          )}
        </div>
        {next && (
          <div>
            <Link href={next}>
              <Heading children="Next Post" size={400} />
            </Link>
          </div>
        )}
      </Flex>
    </Wrapper>
  )
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { blogPosts, opengraph, page } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = page

  const POSTS = blogPosts.nodes
  // Get the ID of this post
  const CURRENT_PATH = frontmatter.path

  // Find the index of this path im the posts list
  let CURRENT_INDEX = 0
  POSTS.forEach((item, index) => {
    if (item.frontmatter.path === CURRENT_PATH) {
      CURRENT_INDEX = index
    }
  })

  // Set previous / next links based on whether or not there are previous / next blog items.

  let PREVIOUS_POST = null
  let NEXT_POST = null

  if (CURRENT_INDEX > 0) {
    NEXT_POST = POSTS[CURRENT_INDEX - 1].frontmatter.path
  }
  if (CURRENT_INDEX < POSTS.length - 1) {
    PREVIOUS_POST = POSTS[CURRENT_INDEX + 1].frontmatter.path
  }

  return (
    <>
      <SEO
        title={frontmatter.title + " | James Prower"}
        description="Short stories and poetic prompts by Canadian sci-fi and fantasy author James Prower. Prower primarily focuses on parallel universes, mysterious objects from other worlds, and happenstance meetings with strange, rare creatures."
        imageOpenGraph={opengraph.publicURL}
        imageAlt="Peach and green storm clouds"
      />

      <VStack space="layout.4">
        <BlogPost
          title={frontmatter.title}
          date={frontmatter.date}
          html={html}
        />
        <BlogNav next={NEXT_POST} previous={PREVIOUS_POST} />
      </VStack>
    </>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
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

    blogPosts: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          date
          title
          path
        }
        html
      }
    }
  }
`
