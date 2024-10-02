import React from 'react';
import Particle from '../Particle';
import { projects } from './ProjectData';
import { FaGithub, FaLink } from 'react-icons/fa';


const Projects = () => {
    return (
        <>
            <Particle />
            <div className='container projects-container flex'>
                <div className='projects-heading'>
                    <h2>My <span>Recent Works</span></h2>
                    <p>Here are few Project I&apos;ve worked on recently</p>
                </div>
                <div className='project-cards'>
                    {projects.map((item, index) => {
                        return <div className='p-card' key={index}>
                            <img className='p-card-image' src={item.image} />
                            <h4 className='p-card-name'>{item.name}</h4>
                            <p className='p-card-description'>{item.description}</p>
                            <div className='p-card-links'>
                                <a href={item.demoLink} target='_blank' rel="noreferrer">{<FaLink />} Demo</a>
                                <a href={item.githubLink} target='_blank' rel="noreferrer">{<FaGithub />}Github</a>
                            </div>
                        </div>;
                    })}
                </div>
            </div>
        </>
    );
};

export default Projects;