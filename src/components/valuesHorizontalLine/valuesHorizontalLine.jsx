import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
import './ValuesHorizontalLine.scss';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export default function ValuesHorizontalLine() {
    const values = ["Honnêteté", "Respect", "Transparence", "Humain"]
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
        slideTop(".values-container")
      })
      
    return (
        <div>
            <ul className="values-container">
                {
                    values.map(value => (
                        <li>
                            <div class="block" source="value">
                                <figure>
                                    <figcaption>{value}</figcaption>
                                </figure>
                            </div>
                        </li>
                    ))
                }              
            </ul>
        </div>
    )
}