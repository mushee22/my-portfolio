import React from 'react';


interface Props {
    sectionName: string
}

export default function SectionHeader({ sectionName }: Props) {
    return (
        <div className="flex gap-x-4 items-center">
            <h3 className="text-forground text-lg sm:text-2xl md:text-[32px] font-medium">
                <span className="text-primary">#</span>{sectionName}
            </h3>
            <div className="h-[1px] bg-primary hidden sm:block sm:w-[300px]"></div>
        </div>

    )
}
