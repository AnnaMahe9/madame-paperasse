import React, { useState } from 'react'
import './Reasons.scss'

export default function Reasons() {
    const [reasons, setreasons] = useState([
        {
            title:"Maîtrise des coûts",
            text:"Je ne rentre pas dans vos effectifs donc pas de charges sociales à verser et grâce au devis aucune surprise, vous connaissez à l’avance le coût global, une facturation à l’heure réellement faite et pas un abonnement"
        },
        {
            title: "Prestation sur-mesure",
            text: "Lieu au choix: sur place ou à distance, rythme à la carte: chaque semaine, deux fois par mois ou deux fois par an, flexibilité"
        },
        {
            title: "Gain de temps",
            text: "Les chefs d’entreprise ont tous un point en commun… il manque de temps ! Que ce soit pour consacrer du temps à leur vie perso, ou à son cœur de métier et se développer… Externaliser la paperasse c’est s’offrir du temps en plus dans la journée"
        }
    ])

    return (
        <ul className='reasons-container'>
            {
                reasons.map(reason => (
                    <div className='reason-container'>
                        <figure className='reason-dot'></figure>
                        <div class="reason-title-container">
                            <h4>{reason.title}</h4>
                            <p>{reason.text}</p> 
                        </div>
                    </div>
                ))
            }
        </ul>
    )
}