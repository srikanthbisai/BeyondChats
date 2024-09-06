import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import ForumIcon from '@mui/icons-material/Forum';

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
         <Button variant="outlined" >GUIDED TOUR</Button>
         <p>SELECT ORG</p>
         <img src="profile.png" alt="" />
         </div>
     </header>

     <main className='flex justify-center items-center space-x-4 mt-4'>
     <Button variant="contained" startIcon={<AddIcon />}>
        ADD DATA
      </Button>
      <Button variant="contained" startIcon={<AvTimerIcon />}>
        DATA TRAINING STATUS
      </Button>
      <Button variant="contained" startIcon={<ForumIcon />}>
       GROUND TRUTHS
      </Button>
     </main>

     <div className='w-1/2 mx-auto'>
      <hr style={{ border: '1px solid black', margin: '20px 0' }} />
    </div>

    <hero className="flex justify-center items-center space-x-4 mt-4"> 
      
    </hero>
    </div>
  )
}

export default Main
