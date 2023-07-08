import { useState,useEffect } from "react";
const Profile=(props)=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
const timer=setInterval(()=>{
console.log("SetInterval updated")
},1000)
console.log("useEffect Updated")
return()=>{
    //when we unmount the component that time we have to clear setInterval
    clearInterval(timer);
    console.log("useEffext returned")
}
    },[])
    console.log("render updated")
    return(
        <div>
            <h1>Profile</h1>
            <h2>Name::::{props.name}</h2>
            <h3>Count:{count}</h3>
            <button onClick={()=>{
                setCount(count + 1);
            }}>count</button>
        </div>
    )
}
export default Profile;