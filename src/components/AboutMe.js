import React from 'react';
import headshot from '../assets/headshottie.jpg';

function AboutMe() {
    return(
        <div className='aboutme'>
            <h1> AboutMe </h1>
            <div className='headshot'>
                <img
                    className='headshot'
                    src={headshot}
                    alt='Head Shot'
                    height={100}
                    width={100}
                />

            </div>
            <div className='info'>
                <p>
                Experience in Full Stack Web Development. Certificate from OSU Bootcamp and Skill Distillery. Bachelor's from Ohio State University. I am a hard worker and determined to be an asset in everything I do.
                </p>
            </div>
        </div>
    )
}

export default AboutMe;