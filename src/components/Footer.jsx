import React from 'react'
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className='container-fluid about py-3 py-lg-5 border-bottom'>
        <div className="py-3 foot-logo">
            <a className='navbar-brand' href='/'>
                <img src={logo} alt='logo' width='60px'/>
            </a>
        </div>
        <div className="row py-3">
            <div className="col-6 text-start">
                <ul className="list-unstyled lee">
                    <h4 className='h6'>Company</h4>
                    <li className='py-2'>About US</li>
                    <li className='py-2'>Our Services</li>
                    <li className='py-2'>News</li>
                    <li className='py-2'>Rooms</li>
                </ul>
            </div>
            <div className="col-6 text-start">
            <ul className="list-unstyled lee">
                    <h4 className='h6'>Contacts</h4>
                    <li className='py-2'>dimlaw7@gmail.com</li>
                    <li className='py-2'>+2349015491581</li>
                    <li className='py-2'>Lagos, Nigeria</li>
                    <li className='py-2'>Rooms</li>
                </ul>
            </div>
        </div>
        <div className="fs-3 footer-links">
            <div className="row">
                <a href='/' className='col-2'><i className="bi bi-facebook"></i></a>
                <a href='/' className='col-2'><i className="bi bi-twitter"></i></a>
                <a href='/' className='col-2'><i className="bi bi-youtube"></i></a>
                <a href='/' className='col-2'><i className="bi bi-geo-alt-fill"></i></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer