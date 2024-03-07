import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Recipe() {
   
    const [details, setDetails] = useState({});
    const location = useLocation();

   
        const fetchDetails = async () => {
            try {
                const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${details}`);
                const detailData = await api.json();
                if (detailData.meals && detailData.meals.length > 0) {
                    setDetails(detailData.meals[0]);
                } else {
                    console.error('No details found for meal:', name);
                    setDetails({});
                }
            } catch (error) {
                console.error('Error fetching meal details:', error);
            }
        };

        useEffect(() => {
        const lastPartOfLocationPath = location.pathname.split('/').slice(-1)[0]
        fetchDetails(lastPartOfLocationPath);
     }, [location]);
   

    return (
        <div>
            {details.strMeal ? (
                <div>
                    <h2>{details.strMeal}</h2>
                   
                    <p>{details.strInstructions}</p>
                </div>
            ) : (
                <p className='error'>No details found for this meal.</p>
            )}
        </div>
    );
}

export default Recipe;

      

    