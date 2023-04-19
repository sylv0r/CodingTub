import React, { useState } from 'react'
import './description.scss'

export default function Description(props) {
  const [showMore, setShowMore] = useState(false)
  const video_info_desc = props.video[0].description
  const video_info_date = props.video[0].published_at

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('fr-FR', options);
  };

  const formatTime = (date) => {
    const options = { hour: 'numeric', minute: 'numeric', hour12: false };
    return new Date(date).toLocaleTimeString('fr-FR', options);
  };

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
      <p id="published_date_desc">
        {formatDate(video_info_date) + " à " + formatTime(video_info_date)}
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
