import { useEffect, useState } from "react"
import Friends from "./ListFriends";

export default function User(){
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setUsers(data))
    },[])

    return(
        <div>
            <h3>friends: {users.length}</h3>
            {
                users.map(friend => <Friends friend={friend}></Friends>)
                
            }



        </div>

    )
} 