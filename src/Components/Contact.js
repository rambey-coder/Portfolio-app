import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_w3f33fj', 'template_q1hbqcq', form.current, 'Kfb_H9e07SsApsrSg')
    };

  return (
    <div className="contact-container" id='contact'>
        <div className="sub-contact" >
            <div className="first">
                <h1>CONTACT ME.</h1>
                <div></div>
                <p>
                    I'm interested in freelance and contract gigs - especially ambitious or large projects. However, if you have any other question, don't hesitate to contact me through the form below or my social media.
                </p>
            </div>

                <form className='forms' ref={form} onSubmit={sendEmail}>
                    <div>
                        <input  type='text' name='user_name' placeholder='Name'/>
                        <input  type='email' placeholder='Email' name='user_email'/>
                    </div>
                    
                    <div>
                        <input type='text' name='subject' placeholder='Subject'/>
                    </div>
                    
                    <div>
                     <textarea name='message' placeholder='Message'/>
                    </div>

                    <input type='submit' className='button' value='Send Message!'/>
                </form>

                <div className='footer'></div>
        </div>
    </div>
  )
}

export default Contact