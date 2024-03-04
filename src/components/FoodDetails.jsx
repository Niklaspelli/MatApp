import { useState, useEffect } from 'react';

function FoodDetails() {

  const [category, setCategory] = useState([]);

 useEffect(() => { 
    getData()
  }, [])

  const getData =  async () => {
     const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);

       const data = await api.json();
       setCategory(data.categories)
    }; 
 

  return (
    <div>
  {category.map((recipe) => {
    return(
      // eslint-disable-next-line react/jsx-key
      <div>
<h2>{recipe.strCategory}</h2>
<img src={recipe.strCategoryThumb} alt="" />
<p>{recipe.strCategoryDescription}</p>
      </div>
        
    );
  })}
</div>
  );
}

export default FoodDetails

//https://www.themealdb.com/api.php