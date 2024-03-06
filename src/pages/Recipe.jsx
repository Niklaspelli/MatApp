import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
let params = useParams();
const [details, setDetails] = useState({});


const fetchDetails = async () => {
  const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.name}`);
const detailData = await api.json();
setDetails(detailData);

}

useEffect(() => {
fetchDetails();

}, [params.name]);

return (
  <div>
{details.strInstructions}
</div>
);
}
/*     {details.strInstructions.map((ingredient) => {
      <li key={ingredient.strInstructions}>{ingredient.strInstructions}</li>

  
})} */


  /* return (
    <div>
      <ul>
        {details.strInstructions.map((ingredient) => {
          <li key={ingredient.strInstructions}>{ingredient.strInstructions}</li>
        })}
      </ul>
    </div>
  )
} */

export default Recipe
