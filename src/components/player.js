import React from "react"
import PropTypes from "prop-types"

const Player = ({ body, url }) => (
  <>
    <p
      className="text-lg leading-relaxed"
      dangerouslySetInnerHTML={{ __html: body }}
    ></p>
    <audio controls src={url} className="mt-4 mb-8 w-full">
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  </>
)

Player.propTypes = {
  body: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Player
