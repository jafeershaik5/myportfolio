import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import sjlogo from '../images/sjlogo.png';
import { LuGitFork, LuStar } from 'react-icons/lu';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles.css';
import { links } from '../links';

const Navbar = () => {
    const [styleNav, setStyleNav] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const navRef = useRef(null);

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setShowNav(false);
        }
    };

    useEffect(() => {
        function scrollHandler() {
            setStyleNav(window.scrollY >= 50);
        }

        window.addEventListener('scroll', scrollHandler);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleNavLinkClick = () => {
        setShowNav(false);
    };

    return (
        <nav className={`${styleNav ? 'navbar sticky' : 'navbar'} ${'container'}`} ref={navRef}>
            <div className='logo'>
                <NavLink to='/'><img src={sjlogo} alt='logo' /></NavLink>
            </div>
            <div className={`${showNav ? 'mob-nav-links show' : 'navlinks'}`}>
                {links && links.map((item, index) => {
                    return <NavLink key={index} to={item.path} onClick={handleNavLinkClick}>{item.name}</NavLink>;
                })}
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
