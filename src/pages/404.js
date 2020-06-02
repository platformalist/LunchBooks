import React from "react"

import { Heading, SEO, Text, Wrapper } from "components"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Wrapper py="layout.7">
      <Heading children="404: Page Not Found" size={700} color="text" />
      <Text
        children="You found a page that doesn't exist! Well done."
        color="text"
      />
    </Wrapper>
  </>
)

export default NotFoundPage
