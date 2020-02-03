import fonts from "./fonts"

export default {
  "900": {
    fontFamily: fonts.extended,
    fontSize: "28px",
    fontWeight: 300,
    lineHeight: 1,
    textTransform: "uppercase",
    "@media screen and (min-width: 40em)": {
      fontSize: "48px",
    },
    "@media screen and (min-width: 52em)": {
      fontSize: "64px",
    },
  },
  "800": {
    fontFamily: fonts.extended,
    fontSize: "22px",
    fontWeight: 300,
    lineHeight: 1,
    textTransform: "uppercase",
    "@media screen and (min-width: 40em)": {
      fontSize: "32px",
    },
    "@media screen and (min-width: 52em)": {
      fontSize: "40px",
    },
  },
  "700": {
    fontFamily: fonts.extended,
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1,
    textTransform: "uppercase",
    "@media screen and (min-width: 40em)": {
      fontSize: "24px",
    },
    "@media screen and (min-width: 52em)": {
      fontSize: "32px",
    },
  },
  "600": {
    fontFamily: fonts.extended,
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: 1,
    textTransform: "uppercase",
    "@media screen and (min-width: 40em)": {
      fontSize: "14px",
    },
    "@media screen and (min-width: 52em)": {
      fontSize: "16px",
    },
  },
}
