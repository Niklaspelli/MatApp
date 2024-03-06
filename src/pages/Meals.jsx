
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Meals() {

const [meals, setMeals] = useState([]);
let params = useParams();


const getMeals = async (meals) => {
const api = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?i=${meals}`)

const data = await api.json();
setMeals(data.meals)
};

useEffect(() => {
    getMeals(params.search)
}, [params.meals]);


  return (
    <div>
        {meals.map((meals) => {
          return(
          // eslint-disable-next-line react/jsx-key
          <Link to={"/recipe/" + meals.strMeal}>
           <img src={meals.strMealThumb} alt="" />
                 <h4>{meals.strMeal}</h4>
             </Link>
);
 })}  
    </div>
  );
}
export default Meals