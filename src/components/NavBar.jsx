import React, { useState } from "react"
import{FaBars,FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"

const NavBar=()=>{
    const links=[
        {
            id:1,
            link:'Home'
        },   
        {
            id:2,
            link:'Portfolio'
        },
        {
            id:3,
            link:'Experiencia'
        },
        {
            id:4,
            link:'Contacto'
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
                    <li key={id} className="px-4 cursor-pointer hover:scale-105 font-medium duration-200 text-gray-600">
                        <Link to={link} smooth duration={500}>{link}</Link>
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