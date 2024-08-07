import React from 'react';
import { DiJavascript1, DiReact, DiGit, DiCss3, DiHtml5, DiPython } from 'react-icons/di';
// , DiMongodb, DiNodejs
import { SiMacos, SiVisualstudiocode, SiVercel } from 'react-icons/si';
// , SiExpress

const AboutCard = () => {
    const skillsetIcons = [DiJavascript1, DiReact, DiPython, DiGit, DiCss3, DiHtml5];
    // , DiNodejs, DiMongodb, SiExpress
    const toolsIcons = [SiMacos, SiVisualstudiocode, SiVercel];

    return (
        <section className='container aboutcard-container'>
            <div className='skillheading'>
                <h2>Professional <span>skillset</span></h2>
            </div>
            <div className='skillcard-container'>
                {skillsetIcons.map((Icon, index) => (
                    <div className='skill-card' key={index}>
                        <Icon />
                    </div>
                ))}
            </div>
            <div className='skillheading'>
                <h2><span>Tools </span>I Use</h2>
            </div>
            <div className='skillcard-container'>
                {toolsIcons.map((Icon, index) => (
                    <div className='skill-card' key={index}>
                        <Icon />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutCard;
