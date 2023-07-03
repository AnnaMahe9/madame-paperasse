import React from 'react'
import './ProcessTimeline.scss'

export default function ProcessTimeline() {
    return (
        <section id="conference-timeline">
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