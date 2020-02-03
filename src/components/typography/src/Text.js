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

const Text = styled("p", { shouldForwardProp })(
  variant({
    prop: "size",
    scale: "text",
  }),
  compose(COMMON, BORDER, TYPOGRAPHY, LAYOUT, POSITION, FLEX, GRID)
)

Text.defaultProps = {
  "data-component-id": "typography.text",
  mt: 0,
  mb: 0,
  size: 400,
  color: "text",
}

export default Text
