import React from 'react'
import LeftSideImage from 'app/assets/skill-left-side-image.png'

export default function SkillSection() {
    return (
        <section className="pt-[90px] container mx-auto ">
            <div className="flex justify-between items-center">
                <div className="flex gap-x-4 items-center">
                    <h3 className="text-forground text-[32px] font-medium">
                        <span className="text-primary">#</span>skills
                    </h3>
                    <div className="h-[1px] bg-primary w-[300px]"></div>

                </div>
            </div>
            <div className='flex gap-x-6 justify-between'>
                <div className='mt-3'>
                    <img src={LeftSideImage} alt='Left side image' />
                </div>
                <div className='flex items-start gap-x-4'>
                    <div className='border border-gray '>
                        <div className='border-b border-gray py-2 px-2'>
                            <span className='font-medium text-forground'>Languages</span>
                        </div>
                        <div className='p-2 text-gray font-normal'>
                            <div className='flex flex-wrap max-w-[178px] gap-x-2'>
                                <span>TypeScript</span>
                                <span>Lua</span>
                                <span>Python</span>
                                <span>JavaScript</span>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className='border border-gray '>
                            <div className='border-b border-gray py-2 px-2'>
                                <span className='font-medium text-forground'>Languages</span>
                            </div>
                            <div className='p-2 text-gray font-normal'>
                                <div className='flex flex-wrap max-w-[178px] gap-x-2'>
                                    <span>TypeScript</span>
                                    <span>Lua</span>
                                    <span>Python</span>
                                    <span>JavaScript</span>
                                </div>
                            </div>
                        </div>
                        <div className='border border-gray '>
                            <div className='border-b border-gray py-2 px-2'>
                                <span className='font-medium text-forground'>Languages</span>
                            </div>
                            <div className='p-2 text-gray font-normal'>
                                <div className='flex flex-wrap max-w-[178px] gap-x-2'>
                                    <span>TypeScript</span>
                                    <span>Lua</span>
                                    <span>Python</span>
                                    <span>JavaScript</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className='border border-gray '>
                            <div className='border-b border-gray py-2 px-2'>
                                <span className='font-medium text-forground'>Languages</span>
                            </div>
                            <div className='p-2 text-gray font-normal'>
                                <div className='flex flex-wrap max-w-[178px] gap-x-2'>
                                    <span>TypeScript</span>
                                    <span>Lua</span>
                                    <span>Python</span>
                                    <span>JavaScript</span>
                                </div>
                            </div>
                        </div>
                        <div className='border border-gray '>
                            <div className='border-b border-gray py-2 px-2'>
                                <span className='font-medium text-forground'>Languages</span>
                            </div>
                            <div className='p-2 text-gray font-normal'>
                                <div className='flex flex-wrap max-w-[178px] gap-x-2'>
                                    <span>TypeScript</span>
                                    <span>Lua</span>
                                    <span>Python</span>
                                    <span>JavaScript</span>
                                </div>
                            </div>
                        </div>
                        <div className='border border-gray '>
                            <div className='border-b border-gray py-2 px-2'>
                                <span className='font-medium text-forground'>Languages</span>
                            </div>
                            <div className='p-2 text-gray font-normal'>
                                <div className='flex flex-wrap max-w-[178px] gap-x-2'>
                                    <span>TypeScript</span>
                                    <span>Lua</span>
                                    <span>Python</span>
                                    <span>JavaScript</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
