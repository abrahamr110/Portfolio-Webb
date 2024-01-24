import React from "react"
import avatar from '../images/avatar.webp'
// import { FaArrowRightToBracket } from "react-icons/fa6";

const Home=()=>{
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-gray-300">
                <div className="justify-center flex flex-col h-full mx-3">
                    <h2 className="text-4xl sm:text-7xl font-bold">En proceso de ser un desarrollador Full-Stack</h2>
                    <p className="py-4 max-w-md">Actualmente estoy cursando el ciclo superior 'Desarrollo de aplicaciones multiplataforma (DAM)', me apasiona la programación, lo que más me gusta es el front-end.</p>

                    <div>
                    <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 to-blue-600 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                        {/* <FaArrowRightToBracket size={20} className="ml-2"/> */}
                        </span>
                    </button>
                </div>
                </div>

                <div>
                    <img src={avatar} alt="my avatar" className="w-2/3 md:w-full rounded-2xl mx-auto"/>
                </div>
            </div>
        </div>        
    ) 
}

export default Home