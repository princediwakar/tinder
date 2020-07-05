import React from 'react'

import Actions from './Actions'


const Person = ({person, modifySuperficialChoices}) => {
    const {name, desc, age, image} = person;
    return(
        <div className="">
            <div className="bg-white shadow-md">
                <img 
                    src={`/images/users/${image}`} alt={name}
                    className="w-full h-100 object-cover"
                
                />
            </div>

            <div className="bg-white shadow-md py-3 pl-4">
                <p className="font-bold text-xl">
                    {name}, <span>{age}</span>
                </p>
                <p className="text-sm text-gray-800">
                    {desc}
                </p>
            </div>

            <Actions 
                person={person}
                modifySuperficialChoices={modifySuperficialChoices}
            />
        </div>
    )
}

export default Person