import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import { Box, Heading, PageHeader, Text, Wrapper } from "components"

const BlogPost = ({ title, date, html }) => (
  <Wrapper>
    <Box width="900px">
      <Heading children={title} size={800} />
      <Heading children={date} size={400} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  </Wrapper>
)

const BlogPage = () => {
  console.log("hello")
  const { blogPosts } = useStaticQuery(POST_QUERY)

  return (
    <Box>
      <PageHeader title="Blog" body="" />
      {blogPosts.nodes.map((post, index) => (
        <BlogPost
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          html={post.html}
        />
      ))}
    </Box>
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
  }
`

export default BlogPage
