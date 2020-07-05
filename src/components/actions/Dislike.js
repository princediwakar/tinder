import React from 'react'

const Dislike = ({userId, modifySuperficialChoices}) => (
    <button
        type="button"
        onClick={()=>modifySuperficialChoices(userId, 'ADD_TO_DISLIKED_USERS')}
        className="bg-white rounded-full h-12 w-12 p-3 shadow-md"
    >
        <img src="/images/misc/dislike.png" alt="Dislike User"/>
    </button>
)

export default Dislike
