import { useState } from "react";
import { LOGO_URL } from "../utilis.js/constraint";
import {Link} from "react-router-dom";
 import useOnline from "../utilis.js/useOnline";
import Online from "../utilis.js/Online";
import Offline from "../utilis.js/Offline";
 
const Header=()=>{

const[btnName,setBtnName]=useState("Login");
 const isOnline = useOnline();

const updatelog=()=>{
//     if(btnName==="Login"){
//         setBtnName("Logout")
//     }
//     else{
// setBtnName("Login");
//     }
//ternary opeartor
btnName==="Login"
?setBtnName("Logout")
:setBtnName("Login");
   
}
    return(


        <div className='header'>
<div className='logo'>
<img src={LOGO_URL} alt='foodimage'/>
</div>
<div>
<ul>
   <li><Link to="/">Home</Link> </li>
   <li><Link to="/about">About</Link> </li>
   <li><Link to="/contact">Contact us</Link> </li>
   <li><Link to="/instamart">InstaMart</Link> </li>
   <li>{!isOnline?<Offline></Offline>:<Online></Online>}</li>
   
    <li>cart</li>
    
   
   
   
    <button className="login" onClick={updatelog}>{btnName}</button>
</ul>
</div>
        </div>
    )
}
export default Header;