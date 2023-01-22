import React from 'react'
import { useEffect } from 'react';
import { useTelegram } from "./hooks/useTelegram";
import '../style.css'

const App = () => {

  const {onToggleButton, tg} = useTelegram();

useEffect(() => {
  tg.ready();

})

   return (
    <>
      <div className='App'>
        <h2>Test Here</h2>
        <button onClick={onToggleButton}>toggle</button>
      </div>

    </>
  )

}


export default App