import React, { useEffect } from 'react';
import './ProcessTimeline.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export default function ProcessTimeline() {
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
            delay:0.2,
            scrollTrigger: {
              trigger: elem,
              start:"top center",
              end: "bottom center"
            }
          }
        )
      }

      const slideTopLine = (elem) => {
        gsap.fromTo(
          elem,
          {
            opacity:0,
            y:200
          },
          {
            opacity:1,
            y: 0,
            delay:0.6,
            scrollTrigger: {
              trigger: elem,
              start:"top center",
              end: "bottom center"
            }
          }
        )
      }
      
      useEffect(()=> {
        slideTopLine(".conference-center-line")
      }, [])
      useEffect(()=> {
        slideTop(".conference-timeline")
      }, [])

    return (
        <section class="conference-timeline">
            {/* <div class="timeline-start">Start</div> */}
            <div class="conference-center-line"></div>
            <div class="conference-timeline-content">
                {/* <!-- Article --> */}
                <div class="timeline-article">
                    <div class="content-left-container">
                        <div class="content-left">
                            <h4>Prise de contact</h4>
                        </div>
                    </div>
                    <div class="content-right-container">
                        <div class="content-right">
                            <p>Vous me contactez par mail, sur les réseaux ou via le formulaire de contact en me décrivant votre besoin.</p>
                        </div>
                    </div>
                    <div class="meta-date">
                    </div>
                </div>
                {/* <!-- // Article -->
                
                <!-- Article --> */}
                <div class="timeline-article">
                    <div class="content-left-container">
                        <div class="content-left">
                            <h4>Rencontre</h4>
                        </div>
                    </div>
                    <div class="content-right-container">
                        <div class="content-right">
                            <p>Nous fixons ensemble un rendez-vous afin de se rencontrer, définir ensemble vos besoins et préparer notre collaboration</p>
                        </div>
                    </div>
                <div class="meta-date"></div>
            </div>
            {/* <!-- // Article -->
            
            <!-- Article --> */}
            <div class="timeline-article">
                <div class="content-left-container">
                    <div class="content-left">
                        <h4>Devis</h4>
                    </div>
                </div>
                <div class="content-right-container">
                    <div class="content-right">
                        <p>Moins de 48h après le RDV, je vous transmets un devis. Une fois ce dernier accepté, notre collaboration commence ! </p>
                    </div>
                </div>
                <div class="meta-date">
                </div>
            </div>
            {/* <!-- // Article --> */}
            </div>
        </section>
    )
}