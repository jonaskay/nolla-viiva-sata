import React from "react"

import Cover from "./cover"

const Side = () => (
  <div className="left">
    <div
      style={{
        borderRadius: "0.25rem",
        boxShadow:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        display: "inline-block",
        maxWidth: 300,
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Cover />
    </div>
  </div>
)

export default Side
