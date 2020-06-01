import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"

import { BookBlock, Box, Flex, Library, PageHeader } from "components"

const IndexPage = () => {
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

export default IndexPage
