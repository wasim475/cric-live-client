import { createContext, useState } from 'react'

export const stateInfo = createContext(null)
const StateProvider = ({children}) => {
    const [teamNames, setTeamNames] = useState(null)
    const [matches, setMatches] = useState([])
    const[batters, setBatters]= useState([])
    const[bowlers, setBowlers]= useState([])
    const [teamTotal, setTeamTotal]= useState(0)
    const [teamWicket, setTeamWicket]= useState(0)
    const [singleMatchData, setSingleMatchData]= useState([])
    const activeBatters = batters?.filter((batter) => batter.active === true);
    const [singleMatchId, setSingleMatchId]= useState(null)
    const [Copyvalue, setCopyValue] = useState('');
    
    const info ={
        teamNames, 
        setTeamNames,
        matches, 
        setMatches,
        batters, 
        setBatters,
        bowlers, 
        setBowlers,
        teamTotal,
        setTeamTotal,
        teamWicket, 
        setTeamWicket,
        singleMatchData, 
        setSingleMatchData,
        activeBatters,
        singleMatchId, 
        setSingleMatchId,
        Copyvalue, 
        setCopyValue
    }
  return (
    <stateInfo.Provider value={info}>
      {children}
    </stateInfo.Provider>
  )
}

export default StateProvider
