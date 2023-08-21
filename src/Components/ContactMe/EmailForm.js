import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const EmailForm = () => {
    const form = useRef();
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const userKey = process.env.REACT_APP_USER_KEY;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, userKey).then((result) => {
            console.log(result.text);
            form.current.reset();
            toast('🚀 Sent Successfully!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        }, (error) => {
            console.log(error.text);
            toast.error('Email Not Sent!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        });
    };

    return (
        <section className='form-box'>
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor='name'>Name</label>
                <input id='name' type="text" name="user_name" required autoComplete='off' />
                <label htmlFor='email'>Email</label>
                <input id='email' type="email" name="user_email" required autoComplete='off' />
                <label htmlFor='subject'>Subject</label>
                <input id='subject' type="text" name="subject" required autoComplete='off' />
                <label htmlFor='message'>Message</label>
                <textarea id='message' name="message" required autoComplete='off' /><br />
                <input type="submit" value="Send" />
            </form>
        </section>
    );
};