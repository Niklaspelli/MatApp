import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Category() {

  const [categories, setCategories] = useState([]);

 useEffect(() => { 
    getData()
  }, [])

  const getData =  async () => {
     const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);

       const data = await api.json();
       setCategories(data.categories)
    }; 
 

    return (
      <div>
        {categories.map((category, index) => (
          <Link key={index} to={`/meals/${category.strCategory}`}>
            <h2>{category.strCategory}</h2>
            <img src={category.strCategoryThumb} alt={category.strCategory} />
          </Link>
        ))}
      </div>
    );
  }

export default Category

//https://www.themealdb.com/api.php