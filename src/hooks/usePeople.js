import { useState } from "react"
import data from '../components/data.json'


export const usePeople = () => {
    const [people, setPeople] = useState(data)
    return { people, setPeople }
}