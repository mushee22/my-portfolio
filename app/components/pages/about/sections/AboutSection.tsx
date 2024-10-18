import React from 'react';
import AboutImage from 'app/assets/about-image.png'

export default function AboutSection() {
    return (
        <div className='container max-sm:px-3 mx-auto flex justify-between items-center'>
            <div className='text-gray font-normal max-w-[515px] space-y-6'>
                <p> Hello, i’m Elias!</p>
                <p>
                    I’m a self-taught front-end developer based in Kyiv,
                    Ukraine. I can develop responsive websites from  scratch and raise them into modern
                    user-friendly web  experiences.
                </p>
                <p>
                    Transforming my creativity and knowledge into a websites has been my passion for over a year.
                    I have been helping various clients to establish their presence online.
                    I always strive to learn about the newest technologies and frameworks.
                </p>
            </div>
            <div className=' hidden md:block '>
                <img src={AboutImage} alt='' />
            </div>
        </div>
    )
}
