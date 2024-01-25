import React from "react";
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/javaScript.png'
import java from '../images/java.png'
import androidStudio from '../images/androidStudio.png'
import tailwind from '../images/tailwind.png'
import heidiSql from '../images/heidiSql.png'
import react from '../images/react.png'
import github from '../images/github.png'

const Experience=()=>{
    const icons=[
        {
            id:1,
            src:html,
            title:"HTML",
            style:"shadow-orange-500"
        },
        {
            id:2,
            src:css,
            title:"CSS 3",
            style:"shadow-blue-500"
        },
        {
            id:3,
            src:tailwind,
            title:"TAILWIND CSS",
            style:"shadow-red-500"
        },
        {
            id:4,
            src:react,
            title:"REACT",
            style:"shadow-cyan-500"
        },
        {
            id:5,
            src:heidiSql,
            title:"HEIDI SQL",
            style:"shadow-green-500"
        },
        {
            id:6,
            src:js,
            title:"JAVASCRIPT",
            style:"shadow-yellow-500"
        },
        {
            id:7,
            src:java,
            title:"JAVA",
            style:"shadow-orange-500"
        },
        {
            id:8,
            src:androidStudio,
            title:"ANDROID STUDIO",
            style:"shadow-green-500"
        },
        {
            id:9,
            src:github,
            title:"GIT HUB",
            style:"shadow-purple-500"
        },
    ]

    return(
        <div name="Experiencia" className="bg-gradient-to-b from-black to-gray-800 w-full">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experiencia</p>
                    <p className="py-6">Estas son las tecnologías con las que yo he trabajado.</p>
                </div>

                <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {icons.map(({id,src,title,style})=>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-20 mx-auto"/>
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}                 
                </div>
            </div>
        </div>
    )
}

export default Experience