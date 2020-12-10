import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import { SEO, VStack } from "components"
import { BlogPost } from "views"

const BlogPage = () => {
  const { blogPosts, opengraph } = useStaticQuery(POST_QUERY)

  return (
    <>
      <SEO
        title="Blog"
        description="Short stories and poetic prompts by Canadian sci-fi and fantasy author James Prower. Prower primarily focuses on parallel universes, mysterious objects from other worlds, and happenstance meetings with strange, rare creatures."
        imageOpenGraph={opengraph.publicURL}
        imageAlt="Peach and green storm clouds"
      />

      <VStack space="layout.8">
        {blogPosts.nodes.map((post, index) => (
          <BlogPost
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            html={post.html}
            key={"blogPost" + index}
          />
        ))}
      </VStack>
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

export default BlogPage
