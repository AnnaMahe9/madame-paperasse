import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import './Footer.scss'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer'>
            <p className='footer-title'>- Madame Paperasse -</p>
            <div className='socials'>
                <NavLink to='https://www.instagram.com/mme.paperasse/'><FontAwesomeIcon icon={faInstagramSquare} className='icon' /></NavLink>
                <NavLink to='https://www.facebook.com/Mme.paperasse'><FontAwesomeIcon icon={faFacebookSquare} className='icon' /></NavLink>
            </div>
            <p>- Mentions légales -</p>
        </div>
    )
}