import React from "react"

import SEO from "../components/seo"

import { BookBlock, Box, Flex, Library } from "components"

const IndexPage = () => {
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
            />
          ))}
        </Box>
      </Flex>
    </>
  )
}

export default IndexPage
