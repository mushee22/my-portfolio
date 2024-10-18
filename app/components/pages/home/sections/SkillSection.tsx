import React from 'react'
import LeftSideImage from 'app/assets/skill-left-side-image.png'
import SectionHeader from '~/components/SectionHeader'

export default function SkillSection() {
    return (
        <section className="pt-8 md:pt-[90px] container max-sm:px-3 mx-auto ">
            <SectionHeader sectionName='Skills'/>
            <div className='flex gap-x-6 justify-between mt-6 md:mt-8'>
                <div className='mt-3 hidden md:block'>
                    <img src={LeftSideImage} alt='Left side image' />
                </div>
                <div className=' grid grid-cols-2 sm:flex sm:flex-row sm:items-start gap-x-4'>
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
