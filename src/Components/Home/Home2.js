import React from 'react';
import avtrimg from '../../images/avatar2.png';
import '../../Styles.css';
import Tilt from 'react-parallax-tilt';

const Home2 = () => {
    return (
        <>
            <section className='container home2-container'>
                <div className='avtrimg'>
                    <Tilt >
                        <img src={avtrimg} alt='avatarimg' />
                    </Tilt>
                </div>
                <div className='home-info'>
                    <p>Hello there! I&apos;m <span>Jafeer Shaik</span>, and I&apos;m absolutely in love with programming.</p>
                    <p>My journey began with <span>HTML, CSS, and JavaScript</span>, and it ignited my passion for web development. As I delved deeper into the world of front-end technologies, I discovered the power of <span>ReactJS and Next.js</span>, and I was hooked!</p>
                    <p>Building with <span>ReactJS and Next.js</span> has been an exhilarating experience. It&apos;s like painting a canvas with code, bringing ideas to life, and making the web a more exciting place, one project at a time.</p>
                </div>
            </section>
        </>

    );
};

export default Home2;