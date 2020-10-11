import React from "react"

import css from "@styled-system/css"

import { useStaticQuery, graphql } from "gatsby"

import { Box, Heading, PageHeader, RichText, SEO, Wrapper } from "components"

const BlogPost = ({ title, date, html }) => (
  <Wrapper>
    <Heading
      children={title}
      size={[600, 700, 750]}
      color="text"
      pb="layout.2"
      pt="layout.6"
    />
    <Box maxWidth="600px" pb="layout.6">
      {/* <Heading children={date} size={[200, 300, 400]} color="text" /> */}
      <RichText size={[500, 400, 300]} content={{ html: html }} />
    </Box>
  </Wrapper>
)

const BlogPage = () => {
  const { blogPosts, homeHeader, opengraph } = useStaticQuery(POST_QUERY)

  return (
    <>
      <SEO
        title="Blog | James Prower"
        description="The author of 'A Being of Some Cosmic Importance'. James writes Science Fiction and Fantasy novels, and lives in Calgary, Alberta with his wife and daughter."
        imageOpenGraph={opengraph.publicURL}
        imageAlt="James Prower, the author of 'A Being of Some Cosmic Importance'."
      />
      <Box>
        <PageHeader
          title="Blog"
          body=""
          image={homeHeader.childImageSharp.fluid}
        />
        {blogPosts.nodes.map((post, index) => (
          <BlogPost
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            html={post.html}
          />
        ))}
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
    homeHeader: file(relativePath: { eq: "homeHeader2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
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
