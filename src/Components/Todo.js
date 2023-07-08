import React from "react";
import {useState} from "react"

export default function Todo() {
  const [toDo,setToDo]=useState();
  const[items,setItems]=useState([]);
  const updateTodo=(e)=>{
setToDo(e.target.value)
  }
  const addDetail=()=>{
    if(!toDo){

    }else{
    setItems([...items,toDo])
    setToDo("")
    }
  }
  const deleteItem=(id)=>{
    console.log(id)
const updateData=items.filter((elem,ind)=>{
return elem!==id;
});
setItems(updateData);
  }
  const deleteElement=()=>{
    setItems([]);
  }
  
  return (
    <div>
      <input type="text" onChange={updateTodo} value={toDo}/>
      <button onClick={addDetail}>Add</button>
      {
        items.map((ele,index)=>{
return(
<div key={index}>
<h3>{ele}</h3>
<button onClick={()=>deleteItem(ele)} >Delete</button>
</div>

)
        })
      }
   <div>
     <button onClick={deleteElement}>RemoveAll</button>
      </div>
    
    </div>
  );
}
