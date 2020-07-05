import React, { useState } from 'react';
import Header from './components/Header'
import Person from './components/Person'
import Lonely from './components/Lonely'
import data from './data.json'


export const App = () => {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const [superlikedUsers, setSuperlikedUsers] = useState([]);
  const activeUser = 0

  const removedPersonFromDataSrc = (peopleSource, userId) => 
    peopleSource.filter(person => person.id !== userId)


  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people]
    const newLikedUsers = [...likedUsers]
    const newSuperlikedUsers = [...superlikedUsers]
    const newDislikedUsers = [...dislikedUsers]

    console.log('people', people)
    console.log('newpeople', newPeople)
    console.log('newLikedUsers', newLikedUsers)
    console.log('newSuperlikedUsers', newSuperlikedUsers)
    console.log('newDislikedUsers', newDislikedUsers)

    console.log(action)
    switch (action) {
      case 'ADD_TO_LIKED_USERS':
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId)
          newLikedUsers.push(data[userId])
          setLikedUsers(newLikedUsers)
          setPeople(removedPersonFromDataSrc(newPeople, userId))
          
        }
        break;
      case 'ADD_TO_DISLIKED_USERS':
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId)
          newDislikedUsers.push(data[userId])

          setDislikedUsers(newDislikedUsers)
          setPeople(removedPersonFromDataSrc(newPeople, userId))
        }
        break;
      case 'ADD_TO_SUPERLIKED_USERS':
        if (!people[activeUser].superlikedUsers.includes(userId)) {
          newPeople[activeUser].superlikedUsers.push(userId)
          newSuperlikedUsers.push(data[userId])

          setSuperlikedUsers(newSuperlikedUsers)
          setPeople(removedPersonFromDataSrc(newPeople, userId))
        }
        break;
      default:
        return people;
    }
  }



  return (
    <div className="w-80 mx-auto">
      <Header />
      {
        people[1]
          ? <Person
            key={people[1].id}
            person={people[1]}
            modifySuperficialChoices={modifySuperficialChoices}
          />
          : <Lonely
            activeUserImage={people[activeUser].image}
            likedUsers={likedUsers}
            superlikedUsers={superlikedUsers}
          />
      }
    </div>
  )
}

