import React from "react"
import { Global } from "@emotion/core"
import css from "@styled-system/css"
import { normalize } from "polished"

const GlobalStyles = () => (
  <Global
    styles={css({
      ...normalize(),
      "*": { boxSizing: "border-box" },
      body: {
        m: 0,
        fontFamily: "regular",
        bg: "background",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },
      a: {
        textDecoration: "none",
        color: "inherit",
      },
    })}
  />
)

export default GlobalStyles
