import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import Body from './Components/Body';
import reportWebVitals from './reportWebVitals';
import Footer from './Components/Footer';
//import About from './Components/About';
import Error from './Components/Error';
import Contact  from './Components/Contact';
import RestrurantMenu from './Components/ResrtrurantMenu'; 
import Profile from './Components/Profile';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
//import InstaMart from './Components/InstaMart';
import { lazy,Suspense } from 'react';
import Shimmer from './Components/Shimmer';
//Lazy loading
//On demand loading
//Dynamic bundling
//code spliting
//chuking
//Dynamic import


// const stylecard ={
//     background:"gray"
// }
const InstaMart  =lazy(()=>import("./Components/InstaMart")

)
const About =lazy(()=>import("./Components/About"))
//upon on demand loading=>upon render=>suspect loading
const Applayout =()=>{
    return(
        <div className='app'>
<Header></Header>
<Outlet></Outlet>
<Footer></Footer>
        </div>
    )
}
const appRouter=createBrowserRouter([
    {
        path: "/",
        element:<Applayout></Applayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Body></Body>
            },
        {
            path:"/about",
            element:<Suspense fallback={<h1>Loading.....wait for sometime</h1>}><About></About></Suspense>,
            children:[
                {
                path:"profile",
                element:<Profile></Profile>
            },
        ]
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        },
        {
            path:"/instamart",
            element:<Suspense fallback={<Shimmer></Shimmer>}><InstaMart></InstaMart></Suspense>
        },
        {
            path:"/Restrurannt/:resId",
            element:<RestrurantMenu></RestrurantMenu>
        },
       
       

    ]
    },
   
])

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <RouterProvider router={appRouter}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
