import ContactButton from '../../components/contactButton/ContactButton';
import ProcessTimeline from '../../components/processTimeline/ProcessTimeline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactPage.scss';
import { faCircleCheck, faCircleExclamation, faEnvelope, faMobile, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
import { useEffect, useState } from 'react';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export default function ContactPage() {
    // state
    const [mailInfos, setMailInfos] = useState({email: "", message: ""});
    const [error, setError] = useState(null);

    // behavior
    const sendEmail = async (event) => {
        event.preventDefault()
        
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": mailInfos.email,
                "message": mailInfos.message
            })
        }
        
        console.log(requestOptions.body)
        await fetch('http://localhost:3001/sendEmail', requestOptions)
        .then(
            (data) => {
                setMailInfos({email: "", message: ""})
            },
            (error) => {
                console.log(error)
            }
        )
        
            
    }
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

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
        // slideTop(".contactForm")
      })


    const handleChange = (event) => {
        console.log(event);
        if (!isValidEmail(event.target.value)) {
            setError(<FontAwesomeIcon icon={faCircleExclamation} className='wrong-mail-icon'/>);
        } else {
            setError(<FontAwesomeIcon icon={faCircleCheck} className='right-mail-icon' />);
        }
        
        setMailInfos({ ...mailInfos, [event.target.name]: event.target.value })
    }

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
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={mailInfos.email} onChange={handleChange}/>
                            <div className="mail-validation-icon">
                                {error && <>{error}</>}
                            </div>
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
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10" value={mailInfos.message} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <ContactButton text="Envoyer" onClick={sendEmail}/>
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