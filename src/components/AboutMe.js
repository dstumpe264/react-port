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
        </div>
    )
}

export default AboutMe;