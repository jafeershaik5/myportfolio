import React, { useState, useEffect } from 'react';
import '../Styles.css';
import { NavLink } from 'react-router-dom';
import sjlogo from '../images/sjlogo.png';
import { LuGitFork, LuStar } from 'react-icons/lu';

const Navbar = () => {
    const [styleNav, setStyleNav] = useState(false);

    useEffect(() => {
        function scrollHandler() {
            setStyleNav(window.scrollY >= 50);
        }

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <header className='container'>
            <nav className={styleNav ? 'navbar sticky' : 'navbar'}>
                <div className='logo'>
                    <NavLink to='/'><img src={sjlogo} alt='logo' /></NavLink>
                </div>
                <div className='navlinks'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/resume'>Resume</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                    <NavLink to='/contactme'>ContactMe</NavLink>
                    <a className='fork' href='https://github.com/jafeershaik5' target='_blank' rel="noreferrer"><LuGitFork />{' '}<LuStar /></a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
