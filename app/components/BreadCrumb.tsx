import React from 'react';

interface Props {
    name: string,
    description: string
}

export default function BreadCrumb({ name, description }: Props) {
    return (
        <div className="container max-sm:px-3 mx-auto mt-[60px]">
            <h3 className="text-forground text-lg sm:text-2xl md:text-[32px] font-medium">
                <span className="text-primary">/</span>{name}
            </h3>
            <p className='font-normal text-gray mt-3'>Who am i?</p>
        </div>
    )
}
