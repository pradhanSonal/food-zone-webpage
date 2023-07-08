//import { Outlet } from "react-router-dom";
// import Profile from "./ProfileClass";
 import React from "react";
import ProfileFunctionalComponent from "./Profile";
// const About=()=>{
//   return(
//     <>
//         <h1>About us page here</h1>
       
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quis rem temporibus, officia harum accusamus doloribus quos quaerat mollitia? Consequatur corporis nostrum nesciunt veniam iste tempora sunt impedit nisi dicta?</p>
//     <Profile name={"Sonali Class props"}></Profile>
//     {/* <ProfileFunctionalComponent name={"Sonali"}></ProfileFunctionalComponent> */}
//     </>
//   )  
// }
class About extends React.Component{
// eslint-disable-next-line no-useless-constructor
constructor(props){
  super(props);
  console.log("parent-constructor called")
}
 componentDidMount(){
  console.log("parent=componrntdidmount-called")
 
 
}

  render(){
    console.log("parent-render-called")
  return(
    <div>
        <h1>About us page here</h1>
      
    
    <ProfileFunctionalComponent name={"Sonali"}></ProfileFunctionalComponent>
    </div>
  )  
  }
}

export default About;
