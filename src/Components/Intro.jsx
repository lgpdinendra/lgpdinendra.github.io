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
        Full Stack Developer</span>
        <p className="intropara">As a full stack developer, I offer a comprehensive skill set to bring your digital ideas to life. From crafting intuitive user interfaces that engage your audience to building robust server-side logic that ensures seamless functionality, I provide end-to-end solutions. Whether it's creating dynamic web applications, optimizing database performance, or integrating third-party services, I deliver scalable and efficient solutions tailored to your needs. With my expertise in both front-end and back-end technologies, you can expect a cohesive and high-quality product that exceeds your expectations.</p>

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
