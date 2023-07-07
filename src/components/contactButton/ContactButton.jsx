import React from 'react';
import './ContactButton.scss'

export default function ContactButton({text, onClick}) {
    return (
        <button className='main-button' onClick={onClick}>{text}</button>
    )
}