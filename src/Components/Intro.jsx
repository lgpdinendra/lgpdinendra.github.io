import React from 'react'
import './Intro.css'
import men from '../Asset/dashboard.png';
//import  btnImg from '../Asset/logo1.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introtext'>I'am 
        <span className="introName"> Pawan</span>
        <br/>
        Web Developer</span>
        <p className="intropara">As a versatile web developer, I specialize in crafting seamless and 
        responsive user experiences. With expertise in both frontend and backend technologies,
         I bring ideas to life by blending creativity with technical proficiency. Whether it's designing captivating 
        interfaces or building robust server-side functionality, I thrive on delivering solutions that elevate digital experiences to new heights.</p>

        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}><button className="btn">
          {/*<img src={btnImg} alt='btn' className='btnImg' />*/}
            Hire Me
          </button></Link>
      </div>
      <img src={men} alt='men' className='bg'/>
    </section>
  )
}

export default Intro
