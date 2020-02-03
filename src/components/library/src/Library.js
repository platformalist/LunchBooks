import marsCover from "images/mars_cover.jpg"
import treeCover from "images/tree_cover.jpg"
import dustCover from "images/dust_cover.jpg"
import fieldCover from "images/field_cover.jpg"

const Library = [
  {
    title: "Book 1",
    cover: marsCover,
    genre: "Genre",
    buttons: [
      { label: "Kobo", link: "https://www.kobo.com" },
      {
        label: "Kindle",
        link: "https://www.amazon.com/Kindle-Store/b?ie=UTF8&node=133140011",
      },
      { label: "Goodreads", link: "https://www.goodreads.com/" },
    ],
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Book 2",
    cover: treeCover,
    genre: "Genre",
    buttons: [{ label: "Kobo", link: "https://www.kobo.com" }],
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Book 3",
    cover: dustCover,
    genre: "Genre",
    buttons: [{ label: "Kobo", link: "https://www.kobo.com" }],
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Book 4",
    cover: fieldCover,
    genre: "Genre",
    buttons: [{ label: "Kobo", link: "https://www.kobo.com" }],
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
  },
]

export default Library
