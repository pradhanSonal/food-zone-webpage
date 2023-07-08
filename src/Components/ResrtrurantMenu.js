
import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utilis.js/constraint";
const RestrurantMenu=()=>{
    
 const[resInfo,setResInfo] =useState(null) ; 
const {resId}=useParams();
 console.log(resId)
useEffect(()=>{
fetchMenu();
},[])
const fetchMenu =async()=>{
    const data =await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json)
    setResInfo(json.data)
}
if(resInfo===null){
    return <Shimmer></Shimmer>;
}
const {name,costForTwoMessage,cuisines,avgRating

}=resInfo?.cards[0]?.card?.card?.info;
const {itemCards}=resInfo?.cards[2]?.groupedCard
?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
console.log(itemCards);
    
    return (
        <>
            {/* <h2>{resItem.cards[0].card.card.name}</h2> */}
            <div className="menu">
                <h1>{name}</h1>
               
                <p>{cuisines.join(",")} -{costForTwoMessage}</p>
              
                <h3>{avgRating}*****</h3>
                <ul>{
                    itemCards.map(item=><li key={item.card.info.id}>{item?.card?.info?.name} -{"Rs."} {item?.card?.info?.price/100}</li>)
                }
                   
                </ul>
            </div>
        </>
    )
    }
export default RestrurantMenu;