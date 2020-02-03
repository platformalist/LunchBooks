import colors from "./colors"
import fonts from "./fonts"
import headings from "./headings"
import paragraph from "./paragraph"
import text from "./text"

const space = [0, 2, 4, 8, 12, 16, 24, 32, 40, 48]

// We have two spacing scales for different use cases

// SPACING
// space.spacing is reserved for component specific use cases that demand more precision
space.spacing = space

// LAYOUT
// space.layout is meant to be used for laying out components and composing pages.
space.layout = [0, 8, 16, 24, 32, 48, 64, 96, 128]

export default {
  colors,
  fonts,
  headings,
  paragraph,
  space,
  text,
}
