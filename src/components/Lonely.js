import React from 'react'
import LikedPerson from './LikedPerson'

const Lonely = ({ activeUserImage, likedUsers, superlikedUsers }) => (
    <div className="shadow-lg h-120 overflow-scroll">
        <p className="text-center py-2">There's no one new around you.</p>
        <span className="flex items-center justify-center mx-auto rounded-full w-32 h-32 bg-red-500 shadow-lg">
            <img
                src={`/images/users/${activeUserImage}`}
                alt="You..."
                className="h-20 w-20 border-2 border-white rounded-full  opacity-100"
            />
        </span>

        <div className="mt-4">
            <p className="text-center">
                {likedUsers.length > 0 &&
                   "People you liked...let's hope they like you too!"}
            </p>
            <div className="flex flex-wrap my-2">
                {likedUsers.map(person => (
                    <LikedPerson key={person.id} person={person} />
                ))}
            </div>

            <p className="text-center">
                {superlikedUsers.length > 0 &&
                   "People you super liked."}
            </p>
            <div className="flex flex-wrap my-2">
                {superlikedUsers.map(person => (
                    <LikedPerson key={person.id} person={person} />
                ))}
            </div>

        </div>
    </div>
)
export default Lonely
