import fonts from "./fonts"

export default {
  "700": {
    fontFamily: fonts.regular,
    fontSize: "26px",
    fontWeight: 400,
    lineHeight: 1.25,
  },
  "600": {
    fontFamily: fonts.regular,
    fontSize: "22px",
    fontWeight: 400,
    lineHeight: 1.2,
  },
  "500": {
    fontFamily: fonts.regular,
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: 1.3,
  },
  "400": {
    fontFamily: fonts.regular,
    fontSize: "16px",
    fontWeight: "normal",
    lineHeight: 1.25,
    "@media screen and (min-width: 40em)": {
      fontSize: "16px",
    },
  },
  "300": {
    fontFamily: fonts.regular,
    fontSize: "14px",
    fontWeight: "normal",
    lineHeight: 1.25,
    "@media screen and (min-width: 40em)": {
      fontSize: "14px",
    },
  },
}
