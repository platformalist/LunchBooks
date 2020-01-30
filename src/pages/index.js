import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Book, Box, Flex } from "components"

const books = [
  {
    color: "black",
    genre: "Genre",
    title: "Book 1",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    color: "black",
    genre: "Genre",
    title: "Book 2",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    color: "black",
    genre: "Genre",
    title: "Book 3",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    color: "black",
    genre: "Genre",
    title: "Book 4",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* Banner Image */}
    <Box mb={4} width="100%" height="200px" bg="black" />
    {/* Books */}

    <Flex justifyContent="flex-end" width="100%">
      <Flex flexWrap="wrap" justifyContent="center" width="100%">
        {books.map((book, index) => (
          <Book
            color={book.color}
            genre={book.genre}
            synopsis={book.synopsis}
            title={book.title}
            index={index}
            open={false}
          />
        ))}
      </Flex>
    </Flex>
  </Layout>
)

export default IndexPage
