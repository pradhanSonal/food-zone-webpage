import { useEffect, useState } from "react";
import Card from "./Card";
import resList from "../utilis.js/mockdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utilis.js/useOnline";
const Body=()=>{
    const[esList,setEsList ]=useState([]);
    const[filtercard,setFilterCard]=useState([]);
    const [searchText,setSearchText] =useState("");
    const isOnline=useOnline();
    console.log(searchText);
    const updateData=()=>{
        const res =resList.filter((restdata)=>{
return restdata.data.avgRating>4;
        })
        setEsList(res);
    }
    useEffect(()=>{
        
fetchData();
    },[])
    const fetchData = async ()=>{
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0350041&lng=77.62354130000001&page_type=DESKTOP_WEB_LISTING");
        const res = await data.json();
        //optional chaining
        setEsList(res.data?.cards?.[2]?.data?.data?.cards)
        setFilterCard(res.data?.cards?.[2]?.data?.data?.cards);
        console.log(res);
    }
//    if(esList.length===0){
//     return <Shimmer></Shimmer>
//    }
const updateText=(e)=>{
setSearchText(e.target.value);
}
const updateRes=()=>{
    const filterRes = esList.filter(
      (resData)=>{
        return resData.data.name.toLowerCase().includes(searchText.toLowerCase());
      
      })
    setFilterCard(filterRes);
    
   
}
if(!isOnline){
    return <h1>you are offline please check your internet connection!!!!</h1>
}


    return esList.length===0?<Shimmer></Shimmer>:(
        <>
        <div className='figure'>
        <div className='search-container'>
<input type="text" value={searchText} onChange={updateText}></input>
<button className='search-box' onClick={updateRes}>Search</button>
<button className="search-btn" onClick={updateData}>Top Rated Restaurant</button>
</div>
<div className='card-container'>
{
  filtercard.map((value)=><Link key={value.data.id} to={"/Restrurannt/" + value.data.id}><Card  resData={value}></Card></Link>)
}

{/* <Card title="KFC" menu="Chiken Popcorn" rating="4.5"></Card>
<Card title="Biriyani zone" menu="Hyderbad Dum Biriyani" rating="4.7"></Card>
<Card title="Meghna Food" menu="Chilli Chiken" rating="4.1"></Card>
<Card title="Nandan palace" menu="Chiken Wings" rating="4.9"></Card>
<Card title="Food Paradise" menu="Chiken kebab" rating="4.0"></Card>
<Card title="Behuruz Biriyani" menu="Chiken Tandoori" rating="5.0"></Card>
<Card title="Jaganath Hotel" menu="Chiken lollipop" rating="4.8"></Card> */}
</div>

        </div>
        </>
    )
}

export default Body;