import React from 'react'

const LikedPerson = ({person}) => (
        <div className="w-1/3 h-32 shadow-md">
            <img 
                src={`/images/users/${person.image}`} 
                alt={`You liked ${person.name}`}
                className="p-2 w-full h-full object-cover"

                />
        </div>
)


export default LikedPerson