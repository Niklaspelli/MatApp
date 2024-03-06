
import Searched from "./Searched";
import Home from './Home'
import Meals from './Meals';
import Recipe from './Recipe';
import { Route, Routes, useLocation } from "react-router-dom";



function Pages() {
  const location = useLocation();
  return (
  
    <Routes location={location} key={location.pathname}>
     <Route path="/" element={<Home />} />
     <Route path="/searched/:search" element={<Searched />} />
     <Route path="/recipe/:id" element={<Recipe />} />
     <Route path="/meals/:type" element={<Meals />} />
    </Routes>

  )
}

export default Pages;
