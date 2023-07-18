import React, { useEffect } from 'react'
import 'animate.css';
import "./PresentationCard.scss";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)


export default function PresentationCard({title, img, text}) {

  const slideTop = (elem) => {
    gsap.fromTo(
      elem,
      {
        opacity:0,
        y:-200
      },
      {
        opacity:1,
        y: 0,
        scrollTrigger: {
          trigger: elem,
          start:"top center",
          end: "bottom center"
        }
      }
    )
  }
  
  useEffect(()=> {
    slideTop(".presentation-card")
  })

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
