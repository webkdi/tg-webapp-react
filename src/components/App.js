import React from 'react'
import { useEffect } from 'react';
import { useTelegram } from "./hooks/useTelegram";
import '../style.css'
import Header from './Header/Header';

const App = () => {

  const {onToggleButton, tg} = useTelegram();

useEffect(() => {
  tg.ready();

})

   return (
    <>
      <div className='App'>
        <Header></Header>
        <button onClick={onToggleButton}>toggle</button>
      </div>

    </>
  )

}


export default App