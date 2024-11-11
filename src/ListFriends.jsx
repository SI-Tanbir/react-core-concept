
export default function Friends({friend}){
    console.log(friend)
    let {name,username,email}=friend;
    // name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info"
    return(
        <div>
            <h2>name:{name}</h2>
            <h2>email:{email}</h2>
        </div>

    )
}