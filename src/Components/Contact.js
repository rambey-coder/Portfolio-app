import React from 'react'
import './Contact.css'

const Contact = () => {

    return (
        <div className='bg-pattern'>
            <div className="contact-container" id='contact'>
                <div className="sub-contact" >
                    <div className="first">
                        <h1>LET'S TALK.</h1>
                        <div></div>
                        <p>
                            I'm open for both freelance and fulltime contracts. Feel free to reach out and discuss your interesting ideas. LET'S CREATE WONDERS TOGETHER
                        </p>
                    </div>

                    <form className='forms' id="contactform" action="https://formsubmit.io/send/1fad9cd4-4248-4744-9691-8556bb88cd73" method="POST">
                        <div>
                            <input type='name' name='user_name' placeholder='Name' />
                            <input type='email' placeholder='Email' name='user_email' />
                            <input name="honeypot" type="text" style={{ display: 'none' }} />
                            <input name="_redirect" type="hidden" id="name" value="https://redirecting-portfolio.netlify.app/" />
                        </div>

                        <div>
                            <input type='text' name='subject' placeholder='Subject' />
                        </div>

                        <div>
                            <textarea name='comment' placeholder='Message' />
                        </div>

                        <input type='submit' className='button' value='Send Message!' />
                    </form>

                    <div className='footer'>
                        <div className="side-footer">
                            <a href='https://github.com/rambey-coder' className='icon-link' target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a588b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>

                            <a href='https://linkedin.com/in/ramadan-bello-584a21237' className='icon-link' target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a588b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>

                            <a href='https://twitter.com/Rambeybello' className='icon-link' target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a588b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            </a>

                            <a href='https://www.instagram.com/rambey9/' className='icon-link' target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a588b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                        <p>	&#169; Bello Ramadan 2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact