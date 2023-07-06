import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import './Footer.scss'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer'>
            <p>- Madame Paperasse -</p>
            <div className='socials'>
                <NavLink to='https://www.instagram.com/mme.paperasse/'><FontAwesomeIcon icon={faInstagramSquare} className='icon' /></NavLink>
                <FontAwesomeIcon icon={faFacebookSquare} className='icon' />
            </div>
            <p>- Mentions légales -</p>
        </div>
    )
}