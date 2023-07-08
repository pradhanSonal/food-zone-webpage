import React from "react";
class Profile extends React.Component{
   constructor(props){
    super(props)
    //create state
    this.state={
        user:{
            name:"",
username:"",
email:""
        }
    }
      
    console.log(" child-constructor invoked" + this.props.name);
    
}
    
   

async componentDidMount(){
    //API Call
    
//     const dta=await fetch("https://jsonplaceholder.typicode.com/users");
//     const response = await dta.json();
//     console.log(response);
   
//     this.setState({
// user:response,
//     })
    // console.log(" child-componenetdidmount called" + this.props.name)
   this.timer= setInterval(()=>{
        console.log("setinterval occured")
    },1000)
    console.log("didmount")
}
//after api call setState() will done=>render() is happend=> dom is updated=> componentDidUpdaTE() will be called 
componentDidUpdate(){
    console.log("updated")
}
//WHEN Component will unmount at that time componentWillUnmount() called
componentWillUnmount(){
    console.log("component unmounted");
    //clear interval for in component will amount because when we use setInterval it will call if even unmount the component as well...
    clearInterval(this.timer);
}
    render(){
       console.log(" child-render happend" + this.props.name)
        return(
            <div>
            
            <h1>{this.state.user[0]?.name}</h1>
            <h2>Name:{this.state.user[0]?.username}</h2>
            <h3>Email:{this.state.user[0]?.email}</h3>
            <h4>Address-zipcode::{this.state.user[0]?.address?.zipcode}</h4>
           
            </div>
        )
    }
}
export default Profile;