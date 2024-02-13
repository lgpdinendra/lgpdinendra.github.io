import React, { useRef } from 'react'
import './Contact.css';
import facebook_icon from '../Asset/fb.png'
import inst_icon from '../Asset/inst.png'
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef(); 

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6iak05m', 'template_gaofstr', form.current, 'JIFZ_JB4SHMQ_v7CI')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
          }, (error) => {
              console.log(error.text);
          });
      };
    

  return (
    <section id ='contactpage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>You can talk with me</span>

            <form ref={form} onSubmit={sendEmail} className='contactForm'>
                <input type='text' className='name'
                    placeholder='Your Name' name='from_name'/>

            <input type='email' className='email'
                    placeholder='Your Email' name='from_email'/>

            <textarea name='message' rows='5' className='msg'
                    placeholder='Your Message' />

            <button type='submit' value='send' className='submitBtn'>
                Submit
            </button>

            <div className='links'>
                <img src={facebook_icon} alt="linkimg" className="link" />
                <img src={inst_icon} alt="linkimg" className="link" />
                
            </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
