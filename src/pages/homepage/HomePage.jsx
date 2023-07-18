import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink, HashLink as Link } from 'react-router-hash-link'
import Banner from '../../components/Banner/Banner';
import PresentationCard from '../../components/PresentationCard/PresentationCard';
import ValuesHorizontalLine from '../../components/valuesHorizontalLine/valuesHorizontalLine';
import Reasons from '../../components/reasons/Reasons';
import './HomePage.scss'
import ProcessTimeline from '../../components/processTimeline/ProcessTimeline';
import ContactButton from '../../components/contactButton/ContactButton';

export default function HomePage() {
    const [presentationParagraphs, setPresentationParagraphs] = useState([
        {
            title:"Un véritable couteau suisse",
            img:"images/accompagnement.png",
            text: `Je vous assiste sur le quotidien de votre entreprise (un peu comme un bras droit)
            en m’occupant de toutes les tâches qui vous demandent trop de temps ou dont vous n’avez, tout simplement,
            pas envie de vous occuper.`
        },

        {
            title:"Une expertise sur tous secteurs",
            img:"images/conseil.png",
            text: `J’interviens dans tous les secteurs d’activité et entreprises (TPE, PME, associations, EI,..), même si, il est
            vrai, mon expertise se porte principalement sur le secteur du CHR (Cafés, Hôtels, Restaurants)`
        },
        {
            title:"Un haut standing de professionalisme",
            img: "images/gestion.png",
            text: `Ma personnalité et mon parcours professionnel me permettent de pouvoir jongler sur tous les aspects
            d’une entreprise, je vous accompagne autant sur la partie financière, administrative que sur la partie RH
            ou encore sur les aspects de stratégie de commercialisation et communication.`
        }
    ])

    return (
        <div className='main-container'>
            
            <Banner/>
            <div className="presentation-paragraphs-container">
                <h2 id="discover">Qui suis-je ?</h2>
                <div className="presentation-paragraphs">
                    {
                        
                        presentationParagraphs.map(presentationParagraph => (
                                <PresentationCard props={presentationParagraph} title={presentationParagraph.title} img={presentationParagraph.img} text={presentationParagraph.text}/> 
                            )             
                        )
                        
                    }
                </div>
                <div className="presentation-last-container">
                    <p>- Cette liste n’est bien sûr pas exhaustive, je m’adapte à vos besoins, rencontrons-nous pour en parler ! -</p>
                    <HashLink to='/prestations#presta-title'>
                        <ContactButton text="Voir les prestations"/>            
                    </HashLink>
                </div>
                <h2>Mes valeurs</h2>
                <ValuesHorizontalLine/>
                <h2>Pourquoi choisir Madame Paperasse ?</h2>
                <Reasons/>
                <h2>Comment cela fonctionne-t-il ?</h2>
                <ProcessTimeline/>
            </div>
            <HashLink to='/contact#contact-title'>
                <ContactButton text="Contactez-moi"/>            
            </HashLink>
        </div>)
}