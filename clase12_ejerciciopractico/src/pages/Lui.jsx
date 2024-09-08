import { useState } from 'react';
import AddTask from '../components/AddTask';
import Header from '../components/Header/Header';
import SeeTask from '../components/SeeTask';


function Lui() {

  const [showCmponent, setShowComponent]= useState(true);

  const [list, setlist]= useState( [] );

      return (
        <>
          <Header setShowComponent = {setShowComponent} />

          {
            showCmponent ? 
            <AddTask list = {list} setlist = {setlist} /> :
            <SeeTask list= {list} />
          }
          
          
        </>

      )
  
}

export default Lui
