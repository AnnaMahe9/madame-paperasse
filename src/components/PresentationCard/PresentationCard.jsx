import React from 'react'
import "./PresentationCard.scss"

export default function PresentationCard({title, img, text}) {
  return(
    <div className="presentation-card">
      <h3>{title}</h3>
      <img src={img} alt="illustration" className="presentation-picture" />
      <p>
        {text}
      </p>
    </div>
  )

}
