import React from 'react';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const Home3 = () => {
    return (
        <section className='container home3-container'>
            <h2>FIND ME ON</h2>
            <p>Feel free to <span>connect</span> with me</p>
            <div className='socialicons flex'>
                <a className='social-icons' href='https://www.instagram.com/___jafeer___/' target='_blank' rel="noreferrer"><BsInstagram /></a>
                <a className='social-icons' href='https://github.com/jafeershaik5' target='_blank' rel="noreferrer"><BsGithub /></a>
                <a className='social-icons' href='https://linkedin.com/in/jafeershaik' target='_blank' rel="noreferrer"><BsLinkedin /></a>
            </div>
        </section>
    );
};

export default Home3;