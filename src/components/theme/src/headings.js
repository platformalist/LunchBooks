import fonts from "./fonts"

export default {
  "900": {
    fontFamily: fonts.title,
    fontSize: "48px",
    fontWeight: "bold",
    lineHeight: 0.9,
    "@media screen and (min-width: 28em)": {
      fontSize: "72px",
    },
    "@media screen and (min-width: 36em)": {
      fontSize: "96px",
    },
    "@media screen and (min-width: 56em)": {
      fontSize: "144px",
    },
  },
  "700": {
    fontFamily: fonts.title,
    fontSize: "28px",
    fontWeight: "bold",
    lineHeight: 0.9,
    "@media screen and (min-width: 28em)": {
      fontSize: "36px",
    },
    "@media screen and (min-width: 56em)": {
      fontSize: "48px",
    },
  },
  "400": {
    fontFamily: fonts.title,
    fontSize: "20px",
    fontWeight: "bold",
  },
}
