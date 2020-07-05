import React from 'react'
import Rewind from './actions/Rewind'
import Dislike from './actions/Dislike'
import Like from './actions/Like'
import Superlike from './actions/Superlike'


const Actions = ({ person, modifySuperficialChoices }) => {
    return (
        <div className="flex w-2/3 justify-around items-center mx-auto py-4">
            <Rewind userId={person.id} />
            <Dislike userId={person.id} modifySuperficialChoices={modifySuperficialChoices} />
            <Like userId={person.id} modifySuperficialChoices={modifySuperficialChoices} />
            <Superlike userId={person.id} modifySuperficialChoices={modifySuperficialChoices} />
        </div>
    )
}

export default Actions