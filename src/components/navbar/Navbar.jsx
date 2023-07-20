import React, { Component } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  };

  render() {
    return (
        <div className= "navbar">
          <div className="navbar-left-side">
            <NavLink to='/'className="nav-item"><img src="logo.png" alt="logo" className="navbar-logo"/></NavLink>
            <p className='navbar-title'>- Madame Paperasse -</p>
          </div>
          <ul className= {this.state.clicked ? "navlinks active" : "navlinks"} >
            <li><NavLink to='/'className="nav-item" onClick={this.handleClick}>Accueil</NavLink></li>
            <li><NavLink to='/prestations'className="nav-item" onClick={this.handleClick}>Prestations</NavLink></li>
            <li><NavLink to='/contact'className="nav-item" onClick={this.handleClick}>Contact</NavLink></li>
          </ul>
          <div className='mobile' onClick={this.handleClick}>
            <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars} className='nav-icon' />
          </div>
        </div>
    )
  }
}

export default Navbar;