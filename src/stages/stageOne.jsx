import React from 'react'

const StageOne = ({setStageTwo}) => {
  return (
    <div className="card">
        <h1>Вы пользуетесь Keplr?</h1>
      <h3>Давайте проверим!</h3>
      <button onClick={()=>{setStageTwo()}}>Проверить</button>
    </div>
  )
}

export default StageOne