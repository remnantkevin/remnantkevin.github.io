import React from "react"
import ExternalLink from "./external-link"

export default ({ url, text, children }) => (
  <ExternalLink cssClasses="underline hover:text-teal-600" url={url} text={text}>
    {children}
  </ExternalLink>
)