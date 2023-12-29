import React from 'react';
import devimg from '../../images/devimg.png';
import Home2 from './Home2';
import TypeWriter from './TypeWriter';
import Home3 from './Home3';
import Particle from '../Particle';

const Home = () => {
    return (
        <>
            <Particle />
            <div className='container home-container flex'>
                <section className='maintext flex'>
                    <h1>
                        Hii There!<span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                    </h1>
                    <h2>I&apos;m <span>JASMINE SHAIK</span></h2>
                    <h3>
                        <TypeWriter />
                    </h3>
                </section>
                <section className='devimg'>
                    <img src={devimg} />
                </section>
            </div>
            <Home2 />
            <Home3 />
        </>
    );
};

export default Home;