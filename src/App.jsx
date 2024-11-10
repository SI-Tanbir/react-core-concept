import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
function handleClick(){
  alert('button clicked')
}

  return (
    <>
    
      <h1>React core concept</h1>
    <button onClick={() => {alert('buttion clicked..chii')}}>Click me</button>
     
    </>
  )
}

export default App
