import React from "react"
import applePodcastsBadge from "../images/apple-podcasts-badge.svg"

const Links = () => {
  return (
    <div className="my-8 text-center sm:text-left">
      <a href="https://podcasts.apple.com/fi/podcast/0-100-nolla-viiva-sata/id1491646390">
        <img
          className="inline"
          src={applePodcastsBadge}
          alt="Apple Podcasts -tunnus"
        />
      </a>
      <div className="mt-3 mb-1 sm:inline sm:m-0">
        &nbsp;&nbsp;&nbsp;tai&nbsp;&nbsp;&nbsp;
      </div>
      <a
        className="underline"
        style={{ color: "#a5d8ff" }}
        href="https://open.spotify.com/show/7pSZ7rw3I00kcKSfOx1J21?si=byPr_wwZRDKlvNUuCNmqBA"
      >
        kuuntele Spotifyssä
      </a>
    </div>
  )
}

export default Links
