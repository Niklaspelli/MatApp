
import Searched from "./Searched";
import Home from './Home'
import Meals from './Meals';
import Recipe from './Recipe';
import { Route, Routes } from "react-router-dom";



function Pages() {

  return (
  
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/searched/:search" element={<Searched />} />
     <Route path="/recipe/:id" element={<Recipe />} />
     <Route path="/meals/:type" element={<Meals />} />
    </Routes>

  )
}

export default Pages;
