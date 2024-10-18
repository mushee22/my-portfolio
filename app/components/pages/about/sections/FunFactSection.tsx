import React from 'react'
import SectionHeader from '~/components/SectionHeader'

export default function FunFactSection() {
    return (
        <div className='container max-sm:px-3 mx-auto mt-[60px]'>
            <SectionHeader sectionName='my-fun-facts' />
            <div className='flex flex-wrap max-w-[600px] gap-4 mt-12'>
                <div className="flex items-center gap-x-[10px] border border-gray px-2 py-[6px] text-sm">
                    <p className="text-gray font-normal">
                    I like winter more than summer
                    </p>
                </div>
                <div className="flex items-center gap-x-[10px] border border-gray px-2 py-[6px] text-sm">
                    <p className="text-gray font-normal">
                    I often bike with my friends
                    </p>
                </div>
                <div className="flex items-center gap-x-[10px] border border-gray px-2 py-[6px] text-sm">
                    <p className="text-gray font-normal">
                    I like pizza and pasta
                    </p>
                </div>
                <div className="flex items-center gap-x-[10px] border border-gray px-2 py-[6px] text-sm">
                    <p className="text-gray font-normal">
                    I was in Egypt, Poland and Turkey
                    </p>
                </div>
                <div className="flex items-center gap-x-[10px] border border-gray px-2 py-[6px] text-sm">
                    <p className="text-gray font-normal">
                    I like winter more than summer
                    </p>
                </div>
                <div className="flex items-center gap-x-[10px] border border-gray px-2 py-[6px] text-sm">
                    <p className="text-gray font-normal">
                    I like winter more than summer
                    </p>
                </div>

                <div className="flex items-center gap-x-[10px] border border-gray px-2 py-[6px] text-sm">
                    <p className="text-gray font-normal">
                    My favorite movie is The Green Mile
                    </p>
                </div>

                <div className="flex items-center gap-x-[10px] border border-gray px-2 py-[6px] text-sm">
                    <p className="text-gray font-normal">
                    I am still in school
                    </p>
                </div>
                <div className="flex items-center gap-x-[10px] border border-gray px-2 py-[6px] text-sm">
                    <p className="text-gray font-normal">
                    I don’t have any siblings
                    </p>
                </div>
                
            </div>
        </div>
    )
}
