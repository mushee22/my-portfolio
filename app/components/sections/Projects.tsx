import React from 'react';

import ProjectImageOne from 'app/assets/project-1.png'
import ProjectImageTwo from 'app/assets/project-2.png'
import ProjectImageThree from 'app/assets/project-3.png'

export default function Projects() {
  return (
    <section className=" pt-[120px] relative">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-4 items-center">
                <h3 className="text-forground text-[32px] font-medium">
                  <span className="text-primary">#</span>projects
                </h3>
                <svg width="511" height="2" viewBox="0 0 511 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M511 1.5H0V0.5H511V1.5Z" fill="#C778DD" />
                </svg>

              </div>
              <div className="text-forground font-normal">
                <span>View all {"~~>"}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 items-start gap-x-4 mt-12">
              <div className="border border-gray">
                <img src={ProjectImageOne} alt="" className="w-full" />
                <div className="border-t border-b border-gray p-2 font-normal text-gray flex gap-x-2">
                  <span>HTML</span>
                  <span>HTML</span>
                  <span>HTML</span>
                  <span>HTML</span>
                </div>
                <div className="p-4 font-normal text-gray space-y-4">
                  <p className="text-2xl text-forground  font-medium">ChertNodes</p>
                  <p>Minecraft servers hosting </p>
                  <div>
                    <button className="border border-primary px-4 py-2 text-white font-normal">
                      Live {"<~>"}
                    </button>
                  </div>
                </div>
              </div>
              <div className="border border-gray">
                <img src={ProjectImageTwo} alt="" className="w-full" />
                <div className="border-t border-b border-gray p-2 gap-y-2 text-base font-normal text-gray flex flex-wrap gap-x-2">
                  <span>React</span>
                  <span>Express</span>
                  <span>Discord.js</span>
                  <span>Node.js</span>
                  <span>HTML</span>
                  <span>SCSS</span>
                  <span>Python</span>
                  <span>Flask</span>
                </div>
                <div className="p-4 font-normal text-gray space-y-4">
                  <p className="text-2xl text-forground  font-medium">ChertNodes</p>
                  <p>Minecraft servers hosting </p>
                  <div>
                    <button className="border border-primary px-4 py-2 text-white font-normal">
                      Live {"<~>"}
                    </button>
                  </div>
                </div>
              </div>
              <div className="border border-gray">
                <img src={ProjectImageThree} alt="" className="w-full" />
                <div className="border-t border-b border-gray p-2 font-normal text-gray flex flex-wrap gap-x-2">
                  <span>CSS</span>
                  <span>Express</span>
                  <span>Node.js</span>
                </div>
                <div className="p-4 font-normal text-gray space-y-4">
                  <p className="text-2xl text-forground  font-medium">
                    Kahoot Answers <br /> Viewer
                  </p>
                  <p>Minecraft servers hosting </p>
                  <div>
                    <button className="border border-primary px-4 py-2 text-white font-normal">
                      Live {"<~>"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100px] h-[155px] border border-gray absolute -right-9 bottom-7"></div>
        </section>
  )
}
