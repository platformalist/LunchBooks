import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import { Box, Heading, RichText, SEO, VStack, Wrapper } from "components"
import { PageHeader } from "views"

const BlogPost = ({ title, date, html }) => (
  <Wrapper>
    <Heading
      children={title}
      size={[600, 700, 750]}
      color="text"
      pb="layout.2"
    />
    <Box maxWidth="600px" pb="layout.6">
      {/* <Heading children={date} size={[200, 300, 400]} color="text" /> */}
      <RichText content={{ html: html }} />
    </Box>
  </Wrapper>
)

const BlogPage = () => {
  const { blogPosts, homeHeader, opengraph } = useStaticQuery(POST_QUERY)

  return (
    <>
      <SEO
        title="Blog"
        description="Author of science fiction, including 'A Being of Some Cosmic Importance'. Send any questions, concerns or inquiries to inquiries@jamesprower.com."
        imageOpenGraph={opengraph.publicURL}
        imageAlt="James Prower, the author of 'A Being of Some Cosmic Importance'."
      />
      <Box>
        <PageHeader
          title="Blog"
          body=""
          image={homeHeader.childImageSharp.fluid}
        />
        <VStack space="layout.5">
          {blogPosts.nodes.map((post, index) => (
            <BlogPost
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              html={post.html}
            />
          ))}
        </VStack>
      </Box>
    </>
  )
}

const POST_QUERY = graphql`
  {
    blogPosts: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          date
          title
        }
        html
      }
    }
    homeHeader: file(relativePath: { eq: "hero_drabbles.jpg" }) {
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

export default BlogPage
