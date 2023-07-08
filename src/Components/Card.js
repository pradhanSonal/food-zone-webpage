import { CDN_URL } from "../utilis.js/constraint";
const Card=(props)=>{
    const {resData} = props;
    //destructuring
    const {cloudinaryImageId,name,cuisines,avgRating,deliveryTime} = resData.data
    return(
    <div className='res-container'>
    <div className='res-card'> 
<img src={CDN_URL+ cloudinaryImageId}alt='biriyani'></img>
<div className='description'>
<h3>{name}</h3>
<h4>{cuisines.join(" ,")}</h4>
<h4>{avgRating} stars</h4>
<h4>{deliveryTime} minutes</h4>
</div>     
    </div>
</div>

    )
}
export default Card;