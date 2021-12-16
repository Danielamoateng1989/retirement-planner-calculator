import React from 'react'
import ProfileImage from '../images/backgroundImage_ccexpress.png';


const Aboutme = () => {
    return (
    <section className='about-me'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Hi! I'm Danny.<br />
            Welcome to <br />
            my world! Let's connect.
        
          </h1>
          <p style={{"font-family": 'Lato' }}>
          Organized, dedicated and ambitious professional with excellent attention to detail, and a love for learning new technologies.           </p>
          <button className='btn'>Explore</button>
        </article>
        <article className='hero-DanielImage'>
          <img src={ProfileImage} className='Daniel-img' alt='portrait' />
        </article> 
      </div>
    </section>
    )
}

export default Aboutme
