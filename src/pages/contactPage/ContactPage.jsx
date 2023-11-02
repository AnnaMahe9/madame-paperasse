import ContactButton from '../../components/contactButton/ContactButton';
import ProcessTimeline from '../../components/processTimeline/ProcessTimeline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactPage.scss';
import { faCircleCheck, faCircleExclamation, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
import { useState } from 'react';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export default function ContactPage() {
    // state
    const [mailInfos, setMailInfos] = useState({names: "", email: "", company: "", phoneNumber: "", message: ""});
    const [namesError, setNamesError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [messageError, setMessageError] = useState(null);

    // behavior
    const sendEmail = async (event) => {
        event.preventDefault()
        
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "names": mailInfos.names,
                "email": mailInfos.email,
                "company": mailInfos.company,
                "phoneNumber": mailInfos.phoneNumber,
                "message": mailInfos.message
            })
        }
        
        if (emailError === null && namesError === null && messageError === null && mailInfos.names && mailInfos.email && mailInfos.message) {
            await fetch('http://localhost:3001/sendEmail', requestOptions)
            .then(
                (data) => {
                    setMailInfos({names: "", email: "", company:"", phoneNumber: "", message: ""})
                    setEmailError(null)
                    setNamesError(null)
                    setMessageError(null)
                },
                (error) => {
                    console.log(error)
                }
            )
        } else {
            if(mailInfos.email === "") {
                setEmailError(<FontAwesomeIcon icon={faCircleExclamation} className='wrong-mail-icon'/>);
            }
            if(mailInfos.names === "") {
                setNamesError(<FontAwesomeIcon icon={faCircleExclamation} className='wrong-names-icon'/>);
            }
            if(mailInfos.message === "") {
                setMessageError(<FontAwesomeIcon icon={faCircleExclamation} className='wrong-message-icon'/>);
            }
        }
        
            
    }
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = (event) => {
        if (event.target.name === "email") {
            if(!isValidEmail(event.target.value)) {
            setEmailError(<FontAwesomeIcon icon={faCircleExclamation} className='wrong-mail-icon'/>);
            } else {
                setEmailError(null)
            }
        }
        
        if(event.target.name === "names" && namesError !== null) {
            setNamesError(null);
        }

        if(event.target.name === "message" && messageError !== null) {
            setMessageError(null);
        }
        setMailInfos({ ...mailInfos, [event.target.name]: event.target.value })
    }

    // render
    return (
        <div className="main-container">
            <div id="contact-title">
                <h1>Contact</h1>
                <h3>Comment cela fonctionne-t-il ?</h3>
                <ProcessTimeline/>

                <h2>Formulaire de contact</h2>

                <div className="contactForm">

                    <form action="">
                        <div className='contactForm-row-1'>
                            <div className='nameDiv'>
                                <label htmlFor="">Nom et prénom *</label>
                                <div className='namesFieldsDiv'>
                                    <input type="text" name="names" value={mailInfos.names} onChange={handleChange}/>
                                    <div className="names-validation-icon">
                                        {namesError && <>{namesError}</>}
                                    </div>
                                </div>
                            </div>
                            <div className='emailDiv'>
                                <label htmlFor="email">Email *</label>
                                <div className='emailFieldsDiv'>
                                    <input type="email" name="email" value={mailInfos.email} onChange={handleChange}/>
                                    <div className="email-validation-icon">
                                        {emailError && <>{emailError}</>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='contactForm-row-2'>
                            <div className='companyDiv'>
                                <label htmlFor="">Entreprise</label>
                                <input type="text" name="company" value={mailInfos.company} onChange={handleChange}/>
                            </div>
                            <div className='phoneDiv'>
                                <label htmlFor="">Numéro de téléphone</label>
                                <input type="text" name="phoneNumber" value={mailInfos.phoneNumber} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className='contactForm-row-3'>
                            <div className='messageDiv'>
                                <label htmlFor="message">Message *</label>
                                <div className='messageFieldsDiv'>
                                    <textarea name="message" id="message" cols="30" rows="10" value={mailInfos.message} onChange={handleChange}></textarea>
                                    <div className="message-validation-icon">
                                        {messageError && <>{messageError}</>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sendButtonContainer'>
                            <div className='sendButton'>
                                <ContactButton text="Envoyer" onClick={sendEmail}/>
                            </div>
                            { (messageError || namesError || emailError) &&
                                <>
                                    <div className='generalErrorMessage'>
                                        <p>Certains champs obligatoires ne sont pas remplis !</p>
                                    </div>
                                </>
                            }
                        </div>
                    </form>
                </div>

                <p className='cta-sentence'>Vous pouvez également me contacter directement par téléphone, email ou sur les réseaux sociaux</p>

                <div className='separation-line'></div>

                <div className='contactInfosContainer'>
                    <div className='logoContainer'>
                        <img src="logo.png" alt="logo" className="navbar-logo"/>
                    </div>
                    <div className='contactInfos'>
                        <p><FontAwesomeIcon icon={faMobileScreenButton} className='contact-icon' /> 07 50 90 57 54</p>
                    </div>
                </div>
            </div>
        </div>
    )
}