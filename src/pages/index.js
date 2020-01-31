import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import marsCover from "images/mars_cover.jpg"
import treeCover from "images/tree_cover.jpg"
import dustCover from "images/dust_cover.jpg"
import fieldCover from "images/field_cover.jpg"

import headerImage from "images/mars.jpg"

import { Book, Box, Flex, InfoWindow } from "components"

const books = [
  {
    dockColor: "#F5F5F5",
    genre: "Genre",
    title: "Book 1",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    cover: marsCover,
    buttonText: "Buy on Kobo",
    buttonLink: "https://www.kobo.com",
  },
  {
    dockColor: "#EDEDED",
    genre: "Genre",
    title: "Book 2",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    cover: treeCover,
    buttonText: "Buy on Kobo",
    buttonLink: "https://www.kobo.com",
  },
  {
    dockColor: "#F5F5F5",
    genre: "Genre",
    title: "Book 3",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cover: dustCover,
    buttonText: "Buy on Kobo",
    buttonLink: "https://www.kobo.com",
  },
  {
    dockColor: "#EDEDED",
    genre: "Genre",
    title: "Book 4",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
    cover: fieldCover,
    buttonText: "Buy on Kobo",
    buttonLink: "https://www.kobo.com",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* Banner Image */}
    <InfoWindow source={headerImage} />
    {/* Books */}

    <Flex justifyContent="flex-end" width="100%">
      <Box width="100%">
        {books.map((book, index) => (
          <Book
            dockColor={book.dockColor}
            genre={book.genre}
            synopsis={book.synopsis}
            title={book.title}
            cover={book.cover}
            index={index}
            buttonText={book.buttonText}
            buttonLink={book.buttonLink}
          />
        ))}
      </Box>
    </Flex>
  </Layout>
)

export default IndexPage
