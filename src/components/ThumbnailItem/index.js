// Write your code here.
import React from 'react'
import './index.css'

const ThumbnailItem = (props) => {
  const { imageDetails, isActive, setActiveImage } = props
  const { id, thumbnailUrl, thumbnailAltText } = imageDetails

  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbnail = () => {
    setActiveImage(id)
  }

  return (
    <li className="thumbnail-item">
      <button type="button" className="thumbnail-button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
