import React from 'react'
import { Outlet, Link } from "react-router-dom";
import logo from '../assets/logo.jpg';
import "./Navbar.css";
import { useRef } from 'react';

const Navbar = () => {
    const NavbarRef = useRef();
    window.onscroll = function () {
        if (window.scrollY > 50) {
            NavbarRef.current.classList.add('nav-toggle');
        }
        else {
            NavbarRef.current.classList.remove('nav-toggle');
        }
    }
  return (
    <>
        <nav className='navbar navbar-expand-lg justify-content-between text-white px-3 mx-lg-5 pt-2 small' ref={NavbarRef} style={{position: 'absolute', width: '-webkit-fill-available', zIndex: 99}}>
            <Link to="/" className='navbar-brand'>
                <img src={logo} alt='logo' width='40px'/>
            </Link>
            <div className='d-flex d-lg-none'>
                {/* Language dropdown */}
                <div className='nav-item dropdown me-3'>
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
                    <div className='navbar-toggler border-0 hamburger' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation' style={{paddingLeft: 0, paddingRight: 0}}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
            <div className='collapse navbar-collapse flex-grow-0' id='navbarSupportedContent'>
                <ul className='navbar-nav navbar-custom'>
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
        <Outlet />
    </>
  )
}

export default Navbar;