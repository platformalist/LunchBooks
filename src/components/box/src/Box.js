import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import { compose } from "styled-system"

import {
  COMMON,
  BORDER,
  TYPOGRAPHY,
  LAYOUT,
  POSITION,
  FLEX,
  GRID,
} from "../../systemProps"

const Box = styled("div", { shouldForwardProp })(
  compose(COMMON, BORDER, TYPOGRAPHY, LAYOUT, POSITION, FLEX, GRID)
)

Box.defaultProps = {
  "data-component-id": "📦",
}

export default Box
