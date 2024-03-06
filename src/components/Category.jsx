import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Category() {

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
<Link to={"/meals/" + recipe.idCategory}>       
<h2>{recipe.strCategory}</h2>
<img src={recipe.strCategoryThumb} alt="" />
 </Link>
    );
  })}
</div>
  );
}

export default Category

//https://www.themealdb.com/api.php