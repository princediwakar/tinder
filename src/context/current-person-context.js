import React, { useContext, useState } from 'react'


const CurrentPersonContext = React.createContext()


export const CurrentPersonProvider = ({children}) => {
    const [currentPersonId, setCurrentPersonId] = useState(2)
    
    return (
        <CurrentPersonContext.Provider value={{currentPersonId, setCurrentPersonId}}>
            {children}
        </CurrentPersonContext.Provider>
    )    
}

export const useCurrentPersonValue = () => useContext(CurrentPersonContext)