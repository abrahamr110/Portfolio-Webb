import React, { useState } from "react"
import{FaBars,FaTimes} from "react-icons/fa"

const NavBar=()=>{
    const links=[
        {
            id:1,
            link:'Home'
        },
        {
            id:2,
            link:'About'
        },
        {
            id:3,
            link:'Portfolio'
        },
        {
            id:4,
            link:'Studies'
        },
        {
            id:5,
            link:'Experience'
        },
        {
            id:6,
            link:'Contact'
        },
    ];

    const[nav,setNav]=useState(false)

    return(
        <div className="flex justify-between items-center w-full h-20 bg-zinc-950 text-white px-4">
            <div>
                <h1 className="text-5xl font-signature px-2">WebSite</h1>   
            </div>

            <ul className="hidden md:flex">
                {links.map(({id,link})=>(
                    <li key={id} className="px-4 cursor-pointer hover:scale-90 font-medium duration-200 text-gray-600">
                        {link}
                    </li>
                ))}                         
            </ul>

            <div onClick={()=>setNav(true)} className="md:hidden cursor-pointer px-4 text-gray-600">
                {nav?<FaTimes size={30}/>:<FaBars size={30}/>}
            </div>

            {nav?(
                <ul className="flex flex-col justify-center items-center absolute w-full h-screen top-0 left-0 bg-gradient-to-b from-black to-gray-800"> 
                    {links.map(({id,link})=>(
                    <li key={id} className="px-4 py-6 cursor-pointer text-4xl font-medium text-gray-600">
                        {link}
                    </li>
                ))} 
                </ul>
            ):null}
        </div>
    )
}

export default NavBar