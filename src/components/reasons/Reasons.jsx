import React, { useEffect } from 'react'
import './Reasons.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export default function Reasons() {
    const reasons = [
        {
            title:"Maîtrise des coûts",
            text:"Je ne rentre pas dans vos effectifs donc pas de charges sociales à verser et grâce au devis aucune surprise, vous connaissez avec à l’avance le coût global, une facturation à l’heure réellement faite et pas un abonnement",
            icon: "💰"
        },
        {
            title: "Prestation sur-mesure",
            text: "Lieu au choix: sur place ou à distance, rythme à la carte: chaque semaine, deux fois par mois ou deux fois par an, flexibilité garantie",
            icon: "📏"
        },
        {
            title: "Gain de temps",
            text: "Les chefs d’entreprise ont tous un point en commun… il manque de temps ! Que ce soit pour consacrer du temps à leur vie perso, ou à leur cœur de métier et se développer… Externaliser la paperasse c’est s’offrir du temps en plus dans la journée",
            icon: "⌛"
        }
    ]

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
            delay:0.3,
            scrollTrigger: {
              trigger: elem,
              start:"top center",
              end: "bottom center"
            }
          }
        )
      }
      
      useEffect(()=> {
        slideTop(".reason-container")
      })

    return (
        <ul className='reasons-container'>
            {
                reasons.map(reason => (
                    <div className='reason-container'>
                        <figure className='reason-dot'></figure>
                        <div class="reason-title-container">
                            <h3>{reason.title} {reason.icon}</h3>
                            <p>{reason.text}</p> 
                        </div>
                    </div>
                ))
            }
        </ul>
    )
}