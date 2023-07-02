import React from 'react'

export default function PresentationCard({img, text}) {
  return(
    <div className="presentation-card">
      <img src={img} alt="illustration" className="presentation-picture" />
      <p>
        {text}
      </p>
    </div>
  )

}