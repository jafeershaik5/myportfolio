import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <>
            <footer className='container footer-container flex'>
                <p>Designed and Developed by ShaikJafeer</p>
                <p>Copyright © {year} SJ</p>
                <div className='ficons-container flex'>
                    <a className='fsocial-icons' href='https://www.instagram.com/___jafeer___/' target='_blank' rel="noreferrer"><FaInstagram /></a>
                    <a className='fsocial-icons' href='https://github.com/jafeershaik5' target='_blank' rel="noreferrer"><BsGithub /></a>
                </div>
            </footer>
        </>
    );
};

export default Footer;