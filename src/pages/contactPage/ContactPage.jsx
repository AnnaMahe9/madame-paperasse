import { useState } from 'react'
import './ContactPage.scss'
import Alert from '../../components/Alert/Alert';

export default function ContactPage() {
    // state
    const [mailInfos, setMailInfos] = useState({email: "", message: ""});
    const [errors, setErrors] = useState([
        {errorMail: "Email not correct", isTrue: false}
    ]);

    // behavior
    const sendEmail = async (event) => {
        event.preventDefault()
        console.log('PROUT')
        if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(mailInfos.email)) {

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
                    console.log(data)
                    setMailInfos({email: "", message: ""})
                },
                (error) => {
                    console.log(error)
                }
            )
        } else {
            // console.log(errors[0])
            // const errorsCopy = [...errors]
            // console.log(errorsCopy)
            // setErrors(errorsCopy[0].isTrue = true)
        }
            
    }

    const handleChange = (event) => {
        console.log(event);
        setMailInfos({ ...mailInfos, [event.target.name]: event.target.value })
    }

    // render
    return (
        <div>
            <h1>Contact</h1>
            <div className='stepsRemind'>
                <h2>Comment cela fonctionne ?</h2>
                <div>
                    <div className='stepsRemind-row-1'>
                        <h3>Prise de contact</h3>
                        <p>Vous me contactez (par mail, sur les réseaux ou via ce formulaire ) en me décrivant en quelques mots votre besoin</p>
                    </div>
                    <div className='stepsRemind-row-2'>
                        <h3>Recontre</h3>
                        <p>On fixe ensemble un rendez-vous afin de se rencontrer, définir ensemble vos besoins et préparer notre collaboration</p>
                    </div>
                    <div className='stepsRemind-row-3'>
                        <h3>Devis</h3>
                        <p>Moins de 48h après le RDV, je vous transmets un devis. Une fois ce dernier accepté, notre collaboration commence ! </p>
                    </div>
                </div>
            </div>

            <div className="contactForm">

                <form action="">
                    <div>
                        {errors[0].isTrue ? (<div>{errors[0].errorMail}</div>) : (<div></div>) }
                    </div>
                    <div className='contactForm-row-1'>
                        <div className='nameDiv'>
                            <label htmlFor="names">Nom et prénom</label>
                            <input type="text" name="names"/>
                        </div>
                        <div className='emailDiv'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={mailInfos.email} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='contactForm-row-2'>
                        <div className='companyDiv'>
                            <label htmlFor="company">Entreprise</label>
                            <input type="text" name='company'/>
                        </div>
                        <div className='phoneDiv'>
                            <label htmlFor="phoneNumber">Numéro de téléphone</label>
                            <input type="text" name='phoneNumber'/>
                        </div>
                    </div>
                    <div className='contactForm-row-3'>
                        <div className='messageDiv'>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10" value={mailInfos.message} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <button className='sendButton' onClick={sendEmail}>Envoyer</button>
                </form>
            </div>

            <p className='cta-sentence'>Vous pouvez également me contacter directement par téléphone, email ou sur les réseaux sociaux</p>

            <div className='contactInfos'>
                <p>07 50 90 57 54</p>
                <p>madame.paperasse.rennes@gmail.com</p>
                <p>facebok.com Intagram.com</p>
            </div>
        </div>
    )
}