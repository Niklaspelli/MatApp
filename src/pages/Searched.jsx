
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Searched() {

const [searchedRecipes, setSearchedRecipes] = useState([]);
let params = useParams();


const getSearched = async (searchedRecipes) => {
const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedRecipes}`)
const data = await api.json();
setSearchedRecipes(data.meals)
};

useEffect(() => {
    getSearched(params.search)
}, [params.search]);


  return (
    <div>
        {searchedRecipes.map((item) => {
          return(        
         <Link to={`/recipe/${item.idMeal}`} key={item.idMeal}>
          <div className='imageMeals'>
         
           <img src={item.strMealThumb} alt="" className='mealSelection'/>
            <h4>{item.strMeal}</h4>
             </div>
                             </Link>
                           
);
 })}  
    </div>
  );
}

export default Searched
