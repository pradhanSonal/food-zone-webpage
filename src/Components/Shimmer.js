import './Shimmer.css';
const Shimmer = ()=>{
    return(
    <div>
<div className="parent-card">
{Array(20).fill("").map((e,index)=> {return <div className="child-card" key={index}></div>})}

</div>
    </div>
    )
}
export default Shimmer