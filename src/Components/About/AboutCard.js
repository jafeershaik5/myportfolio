import React from 'react';
import { DiJavascript1, DiReact, DiGit, DiCss3, DiHtml5, DiPython, DiNodejs } from 'react-icons/di';
// , DiMongodb, DiNodejs
import { SiMacos, SiVisualstudiocode, SiVercel, SiTailwindcss, SiExpress, SiPostman, SiBootstrap, SiVite } from 'react-icons/si';
// , SiExpress

const AboutCard = () => {
    const skillsetIcons = [DiJavascript1, DiReact, DiPython, DiGit, DiCss3, DiHtml5, SiTailwindcss, SiExpress, DiNodejs, SiBootstrap];
    // , DiNodejs, DiMongodb, SiExpress
    const toolsIcons = [SiMacos, SiVisualstudiocode, SiVite, SiVercel, SiPostman];

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
