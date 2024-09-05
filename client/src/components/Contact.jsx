import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

   

    const handleSubmit = (e) => {
  

        setName('')
        setEmail('')
        setMessage('')
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                />

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                    required
                ></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact
