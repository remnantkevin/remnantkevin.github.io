import React from "react"

export default ({ url, cssClasses, text, children }) => (
  <>
    <a href={url} className={cssClasses} target="_blank" rel="noopener noreferrer">
      {text}
      {children}
    </a>
  </>
)