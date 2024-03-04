import { useState, useEffect } from 'react';
import FoodDetails from './components/FoodDetails';
import Searchbar from './components/Searchbar';
import Home from './components/pages/Home'; 
/* import { useParams } from "react-router-dom"; */
import './App.css'


function App() {


  return (
    <>

     

   <Searchbar />
     <FoodDetails />
     <Home /> 

    </>
  )
}

export default App
 {/*   {data && <div>{JSON.stringify(data[0])}</div>}
      {!data && <div>Data is not available yet..</div>} */}