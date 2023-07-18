import React from 'react';
import 'animate.css';
import './Banner.scss';
import ContactButton from '../contactButton/ContactButton';
import { HashLink, HashLink as Link } from 'react-router-hash-link';


export default function Banner() {
  return (
    <div className="banner">
      <section className='banner-titles'>
        <h1 className='animate__animated animate__fadeInDown'>Bienvenue chez <br /> Madame Paperasse</h1>
        <p>
          Madame Paperasse c’est à la fois une assistante administrative, une assistante RH et une assistante de gestion… 
        </p>
        <HashLink to='/#discover' spy={true} smooth={true} offset={100} duration={500}>
          <ContactButton text="Découvrir" id='discover-button'/>
        </HashLink>
      </section>
      <div className='divider animate__animated animate__fadeInDown'></div>
      <div className='testDiv'>
        <img src="test6.jpg" alt="Madame Paperasse" className="banner-logo animate__animated animate__fadeInRight" />
      </div>
    </div>
  )
}
