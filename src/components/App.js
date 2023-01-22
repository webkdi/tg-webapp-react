import React from 'react'
import { useEffect } from 'react';
import '../style.css'

const tg = window.Telegram.WebApp;

const App = () => {

useEffect(() => {
  tg.ready();

})

  const onClose = () => {
    tg.close()
  }

   return (
    <>
      <div className='App'>
        <h2>Test Here</h2>
        <button onClick={onClose}>Закрыть</button>
      </div>

    </>
  )

}


export default App