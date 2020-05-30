import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"

import { BookBlock, Box, Flex, Library } from "components"

const IndexPage = () => {
  const { blogs } = useStaticQuery(BLOG_QUERY)
  console.log(blogs)
  return (
    <>
      <SEO title="Home" />

      {/* Books */}
      <Flex justifyContent="flex-end" width="100%">
        <Box width="100%">
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
        </Box>
      </Flex>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: blogs.nodes[0].html }}
      />
    </>
  )
}

const BLOG_QUERY = graphql`
  query MyQuery {
    blogs: allMarkdownRemark {
      nodes {
        html
      }
    }
  }
`

export default IndexPage
