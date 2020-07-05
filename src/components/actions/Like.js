import React from 'react'

const Like = ({userId, modifySuperficialChoices}) => (
    <button
        type="button"
        onClick={()=>modifySuperficialChoices(userId, 'ADD_TO_LIKED_USERS')}
        className="bg-white rounded-full h-12 w-12 p-3 shadow-md"
    >
        <img src="/images/misc/like.png" alt="Like User"/>
    </button>
)

export default Like
