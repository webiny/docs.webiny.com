import React from 'react'
import { videoContainer, iframe } from './YouTube.module.css'

const YouTube = ({ id }) => {
  return id ? (
    <div className={videoContainer}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        className={iframe}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </div>
  ) : null
}

export default YouTube
