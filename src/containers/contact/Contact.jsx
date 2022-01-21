import React, { useState } from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
    const formRef =  useRef()
    const [done, setDone] = useState(false)
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject ,setSubject] = useState("");
    const [message, setMessage] = useState("");

   
    const handleSubmit = (e) =>{
        e.preventDefault()
 
        emailjs.sendForm('service_pwxtyon', 'template_232i2kv', formRef.current, 'user_gfZyqBaSrcJOLE25y0LE5')
        .then(() => {
            setEmail("");
            setName("");
            setMessage("");
            setSubject("")
            setDone(true)

        }, (error) => {
            console.log(error.text);
        });
    }

    if(done === true){
        setInterval(() => {
            setDone(false)
        }, 5000);
    }
    return (
        <section className='contact-section sec-padding'>
            {
                 done && (<div className='crypto__thank'>Thanks, for contacting us</div>)
            }
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>contact me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="contact-form">
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="input-group">
                                    <input type="text"  placeholder='Name' className='input-control' value={name} name='user_name'  onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className="input-group">
                                    <input type="email" placeholder='Email' className='input-control'   value={email} name='user_email' onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="input-group">
                                    <input type="text" placeholder='Subject' className='input-control' value={subject}  name='user_subject' onChange={(e) => setSubject(e.target.value)}  required />
                                </div>
                                <div className="input-group">
                                    <textarea placeholder='Message' className='input-control' value={message} name='message' onChange={(e) => setMessage(e.target.value)} required />
                                </div>
                                <div className="submit-btn">
                                    <button type='submit' className='btn'>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <h3>Email</h3>
                            <p>basiccoder01@gmail.com</p>
                        </div>
                        <div className="contact-info-item">
                            <h3>Phone</h3>
                            <p>+91 00000 00000</p>
                        </div>
                        <div className="contact-info-item">
                            <h3>follow me</h3>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/bhavesh-sakpal-711770189/" rel="noreferrer" target="_blank"><AiFillLinkedin /></a>
                                <a href="https://github.com/basic-coder" rel="noreferrer" target="_blank"><AiFillGithub /></a>
                                <a href="https://www.instagram.com/basic_coder/" rel="noreferrer" target="_blank"><AiFillInstagram /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
