import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import { compose, variant } from "styled-system"

import {
  COMMON,
  BORDER,
  TYPOGRAPHY,
  LAYOUT,
  POSITION,
  FLEX,
  GRID,
} from "../../systemProps"

const Paragraph = styled("p", { shouldForwardProp })(
  variant({
    prop: "size",
    scale: "paragraph",
  }),
  compose(COMMON, BORDER, TYPOGRAPHY, LAYOUT, POSITION, FLEX, GRID)
)

Paragraph.defaultProps = {
  "data-component-id": "typography.paragraph",
  mt: 0,
  mb: 0,
  size: 500,
  color: "text",
}

export default Paragraph
