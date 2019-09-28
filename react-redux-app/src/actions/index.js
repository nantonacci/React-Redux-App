import axios from 'axios';

export const FETCH_RECIPE_START = "FETCH_RECIPE_START";
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_FAILURE = "FETCH_RECIPE_FAILURE";

export const fetchRandomRecipe = () => {

    return function(dispatch) {
        dispatch({ type: FETCH_RECIPE_START });
        setTimeout(()=> {
            axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_RECIPE_SUCCESS, payload: res.data.meals[0] });
                console.log(res.data.meals[0].strMeal);
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: FETCH_RECIPE_FAILURE, payload: err.message + ' fetching recipe data'})
            });
        }, 2000);
    }
}