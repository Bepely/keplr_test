import React from 'react'


const StageThree = ({address, setAddress, setStageOne}) => {    


  return (
    <div className="card">
      <h1>{address.length>1 ? "Это ваши адреса!": "Это ваш адрес!"}</h1>
      {address.map((addr, index) => (
        <p key={index}>{addr.address}</p>
      ))}
    </div>
  )
}

export default StageThree