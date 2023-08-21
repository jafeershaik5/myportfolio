import React from 'react';
import Particle from '../Particle';
import { EmailForm } from './EmailForm';

const ContactMe = () => {
    return (
        <>
            <Particle />
            <div className='container contact-container'>
                <div className='contact-header'>
                    <h2>Don&apos;t Hesitate to Reach Out</h2><br />
                </div>
                <div className='form-div'>
                    <EmailForm />
                </div>
            </div>
        </>
    );
};

export default ContactMe;
