import React from 'react';
import HerosectionImage from 'app/assets/herosection-image.png'

export default function HeroSection() {
  return (
    <section className=" py-8 md:py-[60px] container max-sm:px-3 mx-auto space-y-8 flex flex-col justify-center md:flex-row items-center gap-x-16">
    <div className="flex-1">
      <h2 className=" text-lg sm:text-2xl md:text-[32px] font-medium  text-white">
        <span className="text-primary">I</span> am  a  <span className="text-primary">front-end developer</span>
      </h2>
      <div className="space-y-6">
        <p className="text-gray text-sm font-normal ">
          He crafts responsive websites where technologies <br /> meet creativity
        </p>
        <button className="border border-primary px-4 py-2 text-white font-normal">
          Contact me!!
        </button>
      </div>
    </div>
    <div>
      <img src={HerosectionImage} />
      <div className="flex items-center gap-x-[10px] border border-gray px-2 py-[6px] text-sm">
        <div className="w-4 h-4 bg-primary"></div>
        <p className="text-white font-normal">Currently working on <strong>Portfolio</strong></p>
      </div>
    </div>
  </section>
  )
}
