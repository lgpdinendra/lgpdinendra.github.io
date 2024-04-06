import React from 'react'
import './Skill.css';
import front from '../Asset/f1.jpg'
import back from '../Asset/b1.jpg'
import mobile from '../Asset/mobile1.jpg'

const Skill = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className="skillDesc">Versatile web developer skilled in both frontend and backend technologies. Specializing in creating captivating user interfaces and robust server-side solutions. Proficient in HTML, CSS, JavaScript, Node.js,Python,React.js and spring boot. Committed to delivering seamless and engaging digital experiences.</span>
        <div className='skillBars'>
            <div className="skillBar">
                <img src={front} alt='Design 1' className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Frontend Development</h2>
                    <p>Frontend Developer specializing in creating user-friendly interfaces with HTML, CSS, and JavaScript, with a strong emphasis on the React.js framework. Committed to designing visually appealing and intuitive websites that elevate user experiences.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={back} alt='Design 2' className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Backend Development</h2>
                    <p>Backend developer proficient in Spring Boot and Node.js frameworks. I design and implement server-side solutions, ensuring seamless data management and optimal system functionality. With expertise in Java and JavaScript, I create robust, scalable backends that power dynamic and efficient web applications.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={mobile} alt='Design 3' className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Mobile Application Development</h2>
                    <p>Expert in Mobile Application Development with a focus on Android Studio. Crafting intuitive and user-friendly apps that seamlessly blend design and functionality. Proficient in leveraging Android Studio tools to bring innovative and engaging mobile experiences to life.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill
