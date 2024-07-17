import React from 'react';
import Particle from '../Particle';
import AboutCard from './AboutCard';

const About = () => {
    return (
        <>
            <Particle />
            <div className='container about-container'>
                <h2>Hey there, I&apos;m <span>Jafeer Shaik!</span> 🚀</h2>
                <p>A Frontend Developer from <span>Nellore</span>, <span>Andhra Pradesh</span>, <span>India.</span> <br />I completed my <span>MCA</span> and hold a <span>BSc</span> in Statistics from my undergrad days.</p><br /><br />
                <h3>🚀 Crafting Experiences</h3>
                <p>Worked as a remote intern at <span>Epireum Consultancy & Oy</span> in Finland. I transform designs into interactive web interfaces using HTML, CSS, JavaScript and ReactJS.</p><br /><br />
                <h3>🎮 Passions Beyond Code</h3>
                <p>Apart from coding, I&apos;m a movie buff, a cricket and badminton enthusiast, and I find joy in experimenting with cooking.</p><br /><br />
                <h3>🌟 Why Me?</h3>
                <p>I&apos;m not just coding; I&apos;am creating digital stories. Let&apos;s collaborate and turn your ideas into captivating realities.</p><br />
            </div>
            <AboutCard />
        </>

    );
};

export default About;