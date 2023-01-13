import React from 'react'



const StageTwo = ({setStageThree, setAddress, address}) => {

const enable = async () => {
  const chainId = "cosmoshub-4";

  // Enabling before using the Keplr is recommended.
  // This method will ask the user whether to allow access if they haven't visited this website.
  // Also, it will request that the user unlock the wallet if the wallet is locked.
  await window.keplr.enable(chainId);

  const offlineSigner = window.keplr.getOfflineSigner(chainId);

  // You can get the address/public keys by `getAccounts` method.
  // It can return the array of address/public key.
  // But, currently, Keplr extension manages only one address/public key pair.
  // XXX: This line is needed to set the sender address for SigningCosmosClient.
  const accounts = await offlineSigner.getAccounts();
  await setAddress(accounts)
  
  

}
enable()


  return (
    <div className="card">
      {window.keplr ? 
        <>
        <h1>Похоже, что вы пользуетесь Keplr!</h1>
        <h3>Теперь узнаем, есть-ли у вас кошелек?</h3>
        {address === null ? <h5>Авторизируйтесь для продолжения</h5> : <button onClick={setStageThree}>Узнать</button>}
        
        </>  
        :
        <>
        <h1>Похоже, что у вас нет кошелька Keplr</h1>
        <h3>Вы всегда можете начать им пользоваться!</h3>
        <a href="https://www.keplr.app/"><h5>Keplr</h5></a>
        </>
    }
    </div>
  )
}

export default StageTwo