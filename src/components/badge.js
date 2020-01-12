import React from "react"
import PropTypes from "prop-types"

const Badge = ({ url, image, name }) => (
  <a href={url}>
    <img
      className="inline h-10 mt-4 mb-2 sm:mb-0 mx-2"
      src={image}
      alt={name}
    />
  </a>
)

Badge.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Badge
