import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import sjlogo from '../images/sjlogo.png';
import { LuGitFork, LuStar } from 'react-icons/lu';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles.css';

const Navbar = () => {
    const [styleNav, setStyleNav] = useState(false);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        function scrollHandler() {
            setStyleNav(window.scrollY >= 50);
        }

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const handleNavLinkClick = () => {
        setShowNav(false); // Close the mobile navigation menu
    };

    return (
        <nav className={`${styleNav ? 'navbar sticky' : 'navbar'} ${'container'}`}>
            <div className='logo'>
                <NavLink to='/'><img src={sjlogo} alt='logo' /></NavLink>
            </div>
            <div className={`${showNav ? 'mob-nav-links show' : 'navlinks'}`}>
                <NavLink to='/' onClick={handleNavLinkClick}>Home</NavLink>
                <NavLink to='/about' onClick={handleNavLinkClick}>About</NavLink>
                <NavLink to='/resume' onClick={handleNavLinkClick}>Resume</NavLink>
                {/* <NavLink to='/projects'>Projects</NavLink> */}
                <NavLink to='/contactme' onClick={handleNavLinkClick}>ContactMe</NavLink>
                <a className='fork' href='https://github.com/jafeershaik5/myportfolio' target='_blank' rel="noreferrer">
                    <LuGitFork /> <LuStar />
                </a>
            </div>
            <div className='nav-toggle-btn'>
                <button className='bars-btn' onClick={() => setShowNav(!showNav)}>
                    {showNav ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
