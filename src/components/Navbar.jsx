import React from 'react'
import logo from '../assets/logo.jpg';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg justify-content-between text-white mx-3 mx-lg-5 pt-2'>
        <a className='navbar-brand' href='/'>
            <img src={logo} alt='logo' width='40px'/>
        </a>
        <div className='d-flex d-lg-none'>
            {/* Language dropdown */}
            <div className='nav-item dropdown'>
                <div className='nav-link text-white dropdown-toggle me-2' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    <small>eng</small>
                </div>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <li><a className='dropdown-item' href='/'>spa</a></li>
                    <li><a className='dropdown-item' href='/'>fre</a></li>
                </ul>
            </div>
            {/* Nav dropdpwn toggle */}
            <div className='nav-item'>
                <button className='navbar-toggler border-0' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <i className='bi bi-list h2' style={{color: 'white'}}></i>
                </button>
            </div>
        </div>
        <div className='collapse navbar-collapse flex-grow-0' id='navbarSupportedContent'>
            <ul className='navbar-nav'>
                <li>
                    <a className='nav-link text-white active' href='/'>Home</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link text-white' href='/'>About Us</a>
                </li>
                <li>
                    <a className='nav-link text-white' href='/'>Our Services</a>
                </li>
                <li>
                    <a className='nav-link text-white' href='/'>Our Rooms</a>
                </li>
                <li>
                    <a className='nav-link text-white' href='/'>Contact</a>
                </li>
            </ul>
        </div>
        {/* Language dropdown PC*/}
        <div className='nav-item dropdown d-none d-lg-flex'>
            <div className='nav-link text-white dropdown-toggle me-2' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                <small>Eng</small>
            </div>
            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li><a className='dropdown-item' href='/'>Spa</a></li>
                <li><a className='dropdown-item' href='/'>Fre</a></li>
            </ul>
            <a className='nav-link text-white text-decoration-none' href='/'>+234 901 549 1581</a>
        </div>
    </nav>
  )
}

export default Navbar;