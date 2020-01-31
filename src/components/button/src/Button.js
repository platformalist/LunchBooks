import React from "react"

function Button({ buttonLink, buttonText }) {
  // return <a href={buttonLink} children={buttonText} />
  return <a href={buttonLink}>{buttonText}</a>
}

export default Button
