import React from "react"
import styled from "@emotion/styled"
import css from "@styled-system/css"

import { Box } from "components"
import headings from "components/theme/src/headings"
import paragraph from "components/theme/src/paragraph"

const StyledBox = styled(Box)(props =>
  css({
    "*": { mb: 0, color: props.color, ":first-child": { mt: 0 } },
    h1: {
      ...headings["800"],
      mt: "1em",
    },
    h2: {
      ...headings["700"],
      mt: "1em",
    },
    h3: {
      ...headings["600"],
      mt: "2em",
    },
    h4: {
      ...headings["600"],
      mt: "2em",
    },
    h5: {
      ...headings["600"],
      mt: "2em",
    },
    h6: {
      ...headings["600"],
      mt: "2em",
    },
    p: {
      ...paragraph[props.size],
    },
    a: {
      fontWeight: 500,
      textDecoration: "underline",
      color: "primary",
    },
    strong: {
      fontWeight: "bold",
    },
    em: {
      fontStyle: "italic",
    },
    li: {
      ...paragraph[props.size],
    },
  })
)

const RichText = ({ content, ...rest }) => (
  <StyledBox
    data-component-id="richText"
    dangerouslySetInnerHTML={{ __html: content.html }}
    {...rest}
  />
)

RichText.defaultProps = {
  size: "400",
  color: "text",
}

export default RichText
