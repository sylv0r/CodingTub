import React, { useState } from 'react'
import './description.scss'

export default function Description(props) {
  const [showMore, setShowMore] = useState(false)
  const video_info_desc = props.video[0].description
  const video_info_date = new Date(props.video[0].published_at)

  const handleShowMore = () => {
    setShowMore(true)
  }

  const handleShowLess = () => {
    setShowMore(false)
  }

  return (
    <div id="video-description">
      <p id="name_description">Description:</p>
      <p id="description" className={showMore ? 'show-more' : ''}>
        {video_info_desc}
      </p>
      <p id="published_date">
        Publiée le {video_info_date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
      </p>
      {!showMore && (
        <p className="read-more" onClick={handleShowMore}>
          Afficher plus
        </p>
      )}
      {showMore && (
        <p className="read-more" onClick={handleShowLess}>
          Afficher moins
        </p>
      )}
    </div>
  )
}
