import React, { useContext } from 'react'
import {usePeople} from '../hooks'

const PeopleContext = React.createContext({})


export const PeopleProvider = ({children}) => {
    const {people, setPeople} = usePeople()
    
    return (
        <PeopleContext.Provider value={{people, setPeople}}>
            {children}
        </PeopleContext.Provider>
    )    
}


export const usePeopleValue = () => useContext(PeopleContext)
