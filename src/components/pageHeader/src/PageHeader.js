import React from "react"

import { Box, Heading, Text, Wrapper } from "components"

const PageHeader = ({ title, body }) => (
  <>
    <Wrapper py={[6, 6, 8]} px={5}>
      <Heading children={title} size={900} />
      <Box height="22px" width="100%" bg="text" />
      <Text children={body} size={700} pt="layout.4" />
    </Wrapper>
  </>
)

export default PageHeader
