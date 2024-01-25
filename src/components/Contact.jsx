import React from "react";

const Contact=()=>{
    return(
        <div name="Contacto" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen p-4 text-white">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contacto</p>
                    <p className="py-6">De esta forma, puedes contactar conmigo.</p>
                </div>

                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/e7a9d38c-0d7d-4574-8c82-e63275bb969f" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text" name="name" placeholder="Introduce tu nombre" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                        <input type="text" name="name" placeholder="Introduce tu email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                        <textarea name="mensaje" rows="10" placeholder="Introduce tu mensaje" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                        <button className="text-white bg-gradient-to-r from-cyan-300 to-blue-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 w-fit-content">Contactar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact