import React from "react"

import Badge from "./badge"
import spotifyBadge from "../images/spotify-badge.svg"
import applePodcastsBadge from "../images/apple-podcasts-badge.svg"
import pocketCastsBadge from "../images/pocket-casts-badge.svg"

const Links = () => {
  return (
    <div className="mt-4 mb-8 text-center sm:text-left">
      <div className="text-center sm:mb-4">
        <Badge
          url="https://open.spotify.com/show/7pSZ7rw3I00kcKSfOx1J21"
          image={spotifyBadge}
          name="Spotify-tunnus"
        />
        <Badge
          url="https://podcasts.apple.com/fi/podcast/0-100-nolla-viiva-sata/id1491646390"
          image={applePodcastsBadge}
          name="Apple Podcasts -tunnus"
        />
        <Badge
          url="https://pca.st/6xzhw8i0"
          image={pocketCastsBadge}
          name="Pocket Casts -tunnus"
        />
      </div>
      <div className="text-center">
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
    </div>
  )
}

export default Links
