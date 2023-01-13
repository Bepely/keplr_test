import { useState } from 'react'

import StageOne from './stages/stageOne'
import StageTwo from './stages/stageTwo'
import StageThree from './stages/stageThree'

function App() {
  const [keplr, setKeplr] = useState(null)
  const [address, setAddress] = useState(null)
  const [surveyStage, setSurveyStage] = useState(0)
  


 const setStage = (num) => {
  setSurveyStage(num)
 } 


  
  const stageBlocks = () => {
    switch(surveyStage){
      case 0:
        return <StageOne setStageTwo={()=>setStage(1)}/>
      case 1: 
        return <StageTwo setAddress={setAddress} address={address} setStageThree={()=>{setStage(2)}}/>
      case 2: 
        return <StageThree keplr={keplr} setKeplr={setKeplr}
                address={address} setStageOne={()=>{setStage(0)}}/>
    }
  }


  return (
    <div className="App">
     {stageBlocks()}
    </div>
  )
}

export default App
