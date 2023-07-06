import React, { useEffect } from 'react';
import './PrestationsPage.scss';
import { NavLink } from 'react-router-dom';
import ContactButton from '../../components/contactButton/ContactButton';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
import { HashLink } from 'react-router-hash-link';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export default function PrestationsPage() {
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
        slideTop(".presta-line")
      })
      useEffect(()=> {
        slideTop(".container-1")
      })
      useEffect(()=> {
        slideTop("#container-3")
      })
      useEffect(()=> {
        slideTop("#container-4")
      })
      useEffect(()=> {
        slideTop("#container-5")
      })

    return (
        <div id="presta-title">
            <h1>Mes Prestations</h1>
            <section class="conference-timeline" id="presta-timeline">
                <div class="conference-center-line presta-line"></div>
                    <div class="conference-timeline-content">
                        {/* <!-- Article --> */ }
                        <div class="timeline-article presta-article">
                            <div class="content-left-container">
                                <div class="content-left">
                                <img src="images/devis.png" alt="commercial" className='prestation-picture' />   
                                </div>
                            </div>
                            <div class="content-right-container presta-content-right-container container-1">
                                <div class="content-right presta-content-right">
                                    <h4>Partie Commerciale</h4>
                                    <ul>
                                        <li>Gestion des devis et facturation</li>
                                        <li>Accompagnement à l’organisation d’évènement (interne ou externe)</li>
                                        <li>Création de support de communication</li>
                                        <li>Accompagnement et conseil (communication digitale, stratégie de développement, etc...)</li>
                                        <li>Veille et accompagnement sur les aides à destination des entreprises</li>
                                    </ul>

                                </div>
                            </div>
                        <div class="meta-date presta-date"></div>
                    </div>
                    {/* <!-- // Article -->
                        {/* <!-- Article --> */}
                        <div class="timeline-article presta-article">
                            <div class="content-left-container">
                                <div class="content-left">
                                    <img src="images/tresorerie.png" alt="conseil" className='prestation-picture'/>
                                </div>
                            </div>
                            <div class="content-right-container presta-content-right-container container-1">
                                <div class="content-right presta-content-right">
                                    <h4>Partie Ressources Humaines</h4>
                                    <ul>
                                        <li> Accompagnement au recrutement (rédaction et publication des fiches de postes/offres d’emplois, gestion du processus de recrutement)</li>
                                        <li>Assistance sur l’entièreté du parcours du salarié dans l’entreprise (DPAE, rédaction des contrats, mutuelle, CP, départs, etc... </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="meta-date presta-date">
                            </div>
                        </div>
                        {/* <!-- // Article -->
                        
                    
                    <!-- Article --> */}
                    <div class="timeline-article presta-article">
                        <div class="content-left-container">
                            <div class="content-left">
                                <img src="images/gain.png" alt="gain"className='prestation-picture' />
                            </div>
                        </div>
                        <div class="content-right-container presta-content-right-container" id="container-3">
                            <div class="content-right presta-content-right">
                                <h4>Partie Financière</h4>
                                <ul>
                                    <li>Pré-comptabilité: contrôle des pièces comptables, numérisation et transmission au comptable </li>
                                    <li>Suivi de trésorerie: mise en place de tableau de bord, rapprochement bancaire, règlement des fournisseurs</li>
                                    <li>Suivi des encaissements et relance des impayés</li>
                                </ul>
                            </div>
                        </div>
                        <div class="meta-date presta-date"></div>
                    </div>
                    {/* <!-- // Article --> */}
                    <div class="timeline-article presta-article">
                        <div class="content-left-container">
                            <div class="content-left">
                                <img src="images/mails.png" alt="gain"className='prestation-picture' />
                            </div>
                        </div>
                        <div class="content-right-container presta-content-right-container" id="container-4">
                            <div class="content-right presta-content-right">
                                <h4>Partie Administrative</h4>
                                <ul>
                                    <li>Gestion des mails et courriers</li>
                                    <li>Mise en forme et rédaction courrier</li>
                                    <li>Classement et archivage</li>
                                    <li>Démarches administratives</li>
                                </ul>
                            </div>
                        </div>
                        <div class="meta-date presta-date"></div>
                    </div>

                    {/* <!-- // Article --> */}
                    <div class="timeline-article presta-article">
                        <div class="content-left-container">
                            <div class="content-left">
                                <img src="images/lientiers.png" alt="gain"className='prestation-picture' />
                            </div>
                        </div>
                        <div class="content-right-container presta-content-right-container" id="container-5">
                            <div class="content-right presta-content-right">
                                <h4>Relation avec les tiers</h4>
                                <ul>
                                    <li>Fournisseurs</li>
                                    <li>Banques</li>
                                    <li>Experts comptables</li>
                                    <li>Clients</li>
                                    <li>Administrations fiscales</li>
                                    <li>Organismes sociaux...</li>
                                </ul>
                            </div>
                        </div>
                        <div class="meta-date presta-date"></div>
                    </div>
                </div>
                
                <div class="timeline-article presta-article">
                    <div className='presta-last-sentences'>
                        <p>Liste non exhaustive, une mission n'apparaît pas ?</p>
                        <p>Contactez-moi pour en parler ensemble ! </p>
                        <HashLink to='/contact#contact-title'>
                            <ContactButton text='Contact'/>
                        </HashLink>
                    </div>
                </div>
            </section>
        </div>
    )
}