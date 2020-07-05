import React from 'react'

const Superlike = ({userId, modifySuperficialChoices}) => (
    <button
        type="button"
        onClick={()=>modifySuperficialChoices(userId, 'ADD_TO_SUPERLIKED_USERS')}
        className="bg-white rounded-full h-8 w-8 p-2 shadow-md"
    >
        <img src="/images/misc/superlike.png" alt="Superlike User"/>
    </button>
)

export default Superlike
