/**
 * Link
 *
 * Gatsby does provide an intrinsic link component to swap between pages more quickly
 * and without page reloads, documented here: https://www.gatsbyjs.org/docs/gatsby-link/
 * However, this component has several issues, chief of which is the problem of external links.
 * Here, we test links for the standard set: mailto:, tel:, http:// and https:// to dynamically swap between the two.
 * This makes the job of setting links across the site considerably easier.
 *
 * The anchor links generated will also include target="_blank" as a default behaviour and rel="noopener noreferrer", since this is a security liability to exclude
 *
 * Note that we do not include the javascript: as an anchor converter, since this behaviour is discouraged for XSS security reasons.
 */

import React from "react";
import { Link as GatsbyLink } from "gatsby";

import { Box } from "components";

const Link = ({ href, title, children, ...rest }) => {
  if (href) {
    if (
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    ) {
      return (
        <Box
          data-component-id="externalLink"
          as="a"
          href={href}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </Box>
      );
    } else {
      return (
        <Box
          data-component-id="internalLink"
          as={GatsbyLink}
          to={href}
          title={title}
          {...rest}
        >
          {children}
        </Box>
      );
    }
  } else {
    return <>{children}</>;
  }
};

export default Link;
