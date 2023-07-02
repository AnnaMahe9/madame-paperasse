import React, { useState } from 'react';
import Banner from '../../components/Banner';
import PresentationCard from '../../components/PresentationCard';
import './HomePage.scss'

export default function HomePage() {
    const [presentationParagraphs, setPresentationParagraphs] = useState([
        {
            img:"images/accompagnement.png",
            text: `Véritable couteau suisse, je vous assiste sur le quotidien de votre entreprise (un peu comme un bras droit)
            en m’occupant de toutes les tâches qui vous demandent trop de temps ou dont vous n’avez, tout simplement,
            pas envie de vous occuper.`
        },

        {
            img:"images/conseil.png",
            text: `J’interviens dans tous les secteurs d’activité et entreprises (TPE, PME, associations, EI,..), même si, il est
            vrai, mon expertise se porte principalement sur le secteur du CHR (Cafés, Hôtels, Restaurants)`
        },
        {
            img: "images/gestion.png",
            text: `Ma personnalité et mon parcours professionnel me permettent de pouvoir jongler sur tous les aspects
            d’une entreprise, je vous accompagne autant sur la partie financière, administrative que sur la partie RH
            ou encore sur les aspects de stratégie de commercialisation et communication. Cette liste n’est bien sûr pas
            exhaustive, je m’adapte à vos besoins, rencontrons-nous pour en parler !`
        }
    ])

    return (
        <div>
            
            <Banner/>
            {
                
                presentationParagraphs.map(presentationParagraph => (
                        <PresentationCard props={presentationParagraph} img={presentationParagraph.img} text={presentationParagraph.text}/> 
                    )             
                )
                
            }
            
        </div>)
}