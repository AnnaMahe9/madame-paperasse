import React from 'react'

export default function PresentationCardLeft({img, text}) {
  return(
    <div className="presentation-card">
      <p>
        {text}
      </p>
      <img src={img} alt="illustration" className="presentation-picture" />
    </div>
  )

}
