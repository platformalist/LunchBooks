import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import { Box, Heading, PageHeader, SEO, Wrapper } from "components"

const BlogPost = ({ title, date, html }) => (
  <Wrapper>
    <Box width="900px" py="layout.6">
      <Heading children={title} size={800} color="text" />
      <Heading children={date} size={400} color="text" />
      <div
        style={{
          color: "#222",
          fontSize: "20px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Box>
  </Wrapper>
)

const BlogPage = () => {
  const { blogPosts, homeHeader } = useStaticQuery(POST_QUERY)

  return (
    <>
      <SEO title="Blog | James Prower" />
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
    blogPosts: allMarkdownRemark {
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
  }
`

export default BlogPage
