import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Main() {
  return (
    <div className="flex-grow">
     <header className="justify-between flex p-2 border border-gray-200">
         <div className="textContainer">
            <h1 className="text-3xl tracking-wide font-bold text-black font-serif">Chatbot Mind Map</h1>
            <p className="text-md">This is the brain and the memory of the chatbot. You can add, edit and analyse</p>
            <p className="text-md">the source data being used to answer user queries from here.</p>
         </div>

         <div className="imageContainer flex justify-center items-center space-x-10">
         <button className="rounded-md border border-blue-800 text-blue-800 p-3 tracking-wide">GUIDED TOUR</button>
         <p>SELECT ORG</p>
         <img src="profile.png" alt="" />
         </div>
     </header>

     <main>
        
     </main>
    </div>
  )
}

export default Main
