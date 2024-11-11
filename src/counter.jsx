import { useState } from "react"

export default function Counter(){

    let [count,setCount] =useState(0);
    let handleCount =() =>{
        let newCount = count +1;
        setCount(newCount);
    }
    let handleReduce=()=>{
        let reduceCount =count -1;
        setCount(reduceCount);
    }
    

    return (
        <div style={{border:'2px solid tomato'}}>

            <h2>counter:{count}</h2>
            <button onClick={handleCount} > add</button>
            <button onClick={handleReduce} >reduce</button>
        </div>
    )

}