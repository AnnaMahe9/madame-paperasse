import ContactButton from '../../components/contactButton/ContactButton';
import ProcessTimeline from '../../components/processTimeline/ProcessTimeline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactPage.scss';
import { faEnvelope, faMobile, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export default function ContactPage() {
    // state

    // behavior

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
        slideTop(".contactForm")
      })



    // render
    return (
        <div id="contact-title">
            <h1>Contact</h1>
            <h2>Comment cela fonctionne-t-il ?</h2>
            <ProcessTimeline/>

            <h2>Formulaire de contact</h2>

            <div className="contactForm">

                <form action="">
                    <div className='contactForm-row-1'>
                        <div className='nameDiv'>
                            <label htmlFor="">Nom et prénom</label>
                            <input type="text" />
                        </div>
                        <div className='emailDiv'>
                            <label htmlFor="">Email</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='contactForm-row-2'>
                        <div className='companyDiv'>
                            <label htmlFor="">Entreprise</label>
                            <input type="text" />
                        </div>
                        <div className='phoneDiv'>
                            <label htmlFor="">Numéro de téléphone</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='contactForm-row-3'>
                        <div className='messageDiv'>
                            <label htmlFor="">Message</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <ContactButton text="Envoyer"/>
                </form>
            </div>

            <p className='cta-sentence'>Vous pouvez également me contacter directement par téléphone, email ou sur les réseaux sociaux</p>

            <div className='separation-line'></div>

            <div className='contactInfos'>
                <p> <FontAwesomeIcon icon={faMobileScreenButton} className='contact-icon' /> 07 50 90 57 54</p>
                <p> <FontAwesomeIcon icon={faEnvelope} className='contact-icon' />madame.paperasse.rennes@gmail.com</p>
            </div>
        </div>
    )
}