import React from 'react'
import AboutImage from 'app/assets/about-image.png'

export default function AboutSection() {
    return (
        <section className='mt-[60px] relative'>
            <div className=' container mx-auto pt-8 flex items-center justify-between'>
                <div className='font-normal text-gray space-y-6 max-w-[515px]'>
                    <div className="flex gap-x-4 items-center">
                        <h3 className="text-forground text-[32px] font-medium">
                            <span className="text-primary">#</span>about-me
                        </h3>
                        <div className="h-[1px] bg-primary w-[300px]"></div>
                    </div>
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
                    <button className="border border-primary px-4 py-2 text-white font-normal">
                        Read more {"->"}
                    </button>
                </div>
                <div>
                    <img src={AboutImage} alt='' />
                </div>
            </div>
            <div className='absolute right-0 bottom-10'>
                <svg width="80" height="103" viewBox="0 0 80 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#ABB2BF" />
                    <circle cx="26.75" cy="2" r="2" fill="#ABB2BF" />
                    <circle cx="51.5" cy="2" r="2" fill="#ABB2BF" />
                    <circle cx="76.25" cy="2" r="2" fill="#ABB2BF" />
                    <circle cx="2" cy="26.75" r="2" fill="#ABB2BF" />
                    <circle cx="26.75" cy="26.75" r="2" fill="#ABB2BF" />
                    <circle cx="51.5" cy="26.75" r="2" fill="#ABB2BF" />
                    <circle cx="76.25" cy="26.75" r="2" fill="#ABB2BF" />
                    <circle cx="2" cy="51.5" r="2" fill="#ABB2BF" />
                    <circle cx="26.75" cy="51.5" r="2" fill="#ABB2BF" />
                    <circle cx="51.5" cy="51.5" r="2" fill="#ABB2BF" />
                    <circle cx="76.25" cy="51.5" r="2" fill="#ABB2BF" />
                    <circle cx="2" cy="76.25" r="2" fill="#ABB2BF" />
                    <circle cx="26.75" cy="76.25" r="2" fill="#ABB2BF" />
                    <circle cx="51.5" cy="76.25" r="2" fill="#ABB2BF" />
                    <circle cx="76.25" cy="76.25" r="2" fill="#ABB2BF" />
                    <circle cx="2" cy="101" r="2" fill="#ABB2BF" />
                    <circle cx="26.75" cy="101" r="2" fill="#ABB2BF" />
                    <circle cx="51.5" cy="101" r="2" fill="#ABB2BF" />
                    <circle cx="76.25" cy="101" r="2" fill="#ABB2BF" />
                </svg>
            </div>
            <div className='w-[75px] h-[155px] absolute -left-[40px]  top-1/2 -translate-y-[100px]  border border-gray'></div>
        </section>
    )
}
