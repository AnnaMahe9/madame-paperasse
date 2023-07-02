import './ContactPage.scss'

export default function ContactPage() {
    // state

    // behavior

    // render
    return (
        <div>
            <h1>Contact</h1>
            <div>
                <h2>Comment cela fonctionne ?</h2>
                <div>
                    <div>
                        <h3>Prise de contact</h3>
                        <p>Vous me contactez (par mail, sur les réseaux ou via ce formulaire (avec un lien vers le formulaire)) en me décrivant en quelques mots votre besoin</p>
                    </div>
                    <div>
                        <h3>Recontre</h3>
                        <p>On fixe ensemble un rendez-vous afin de se rencontrer, définir ensemble vos besoins et préparer notre collaboration</p>
                    </div>
                    <div>
                        <h3>Devis</h3>
                        <p>Moins de 48h après le RDV, je vous transmets un devis. Une fois ce dernier accepté, notre collaboration commence ! </p>
                    </div>
                </div>
            </div>

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
                    <button className='sendButton'>Envoyer</button>
                </form>
            </div>

            <p>Vous pouvez également me contacter directement par téléphone, email ou sur les réseaux sociaux</p>

            <div>
                <p>07 50 90 57 54</p>
                <p>madame.paperasse.rennes@gmail.com</p>
                <p>facebok.com Intagram.com</p>
            </div>
        </div>
    )
}