import React from 'react'
import './Work.css';

const Work = () => {
  return (
    <section id='works'>
        <h2 className='workstitle'>My Projects</h2>
        <span className='worksDesc'></span>
        <div className='worksImgs'>
            <img src='' alt='workImage' className='worksImg'/>
            <img src='' alt='workImage' className='worksImg'/>
            <img src='' alt='workImage' className='worksImg'/>
            <img src='' alt='workImage' className='worksImg'/>
        </div>
        <a href='https://github.com/lgpdinendra'><button className="worksBtn" >See GitHub</button></a>
    </section>
  )
}

export default Work
