import React from 'react';
import './ContactButton.scss'

export default function ContactButton({text}) {
    return (
        <button className='main-button'>{text}</button>
    )
}