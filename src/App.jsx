import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import User from './User'


function App() {
function handleClick(){
  alert('button clicked')
}
function vajilla(num){
  alert(num+5)
}

  return (
    <div>

      <User></User>
     

    
      <h1>React core concept</h1>
    
    <button onClick={() => {alert('buttion clicked..chii')}}>Click me</button>

    {/* if you use parameters  */}
    
    <button onClick={()=>vajilla(1)}>vajilla parameter</button>

     <Counter></Counter>

    <Team></Team>


    </div>
  )
}

export default App
