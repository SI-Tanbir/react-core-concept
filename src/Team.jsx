import { useState } from "react"

export default function Team(){
    let teamStyle={
        border:'2px solid red',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    let [team,setTeam]=useState(11);

    function addcount(){
        let adding =team +1;
        setTeam(adding);
    }

    function removecount(){
        let remove =team -1;
        setTeam(remove);
    }

    return (
        <div style={teamStyle}>
            <h3>Players:{team}</h3>

            <button onClick={addcount}>add</button>
            <button onClick={removecount}>remove</button>
        </div>
    )
}