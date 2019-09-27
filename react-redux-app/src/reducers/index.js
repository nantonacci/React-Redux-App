import { FETCH_RECIPE_START, FETCH_RECIPE_SUCCESS, FETCH_RECIPE_FAILURE } from '../actions';

const initialState = {
    recipeName: '',
    recipeIng: '',
    recipeUrl: '',
    error: '',
    isFetching: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECIPE_START:
            console.log('start');
            return {
                ...state,
                isFetching: true
            };
        case FETCH_RECIPE_SUCCESS:
            console.log('success');
            return {
                ...state,
                recipeName: action.payload.strMeal,
                recipeIng: action.payload.strIngredient,

                let ingredients = "";
                action.payload.forEach(thing => {
                    if (thing)
                })

                recipeUrl: action.payload.strSource,
                error: '',
                isFetching: false
            }
        case FETCH_RECIPE_FAILURE:
            console.log('fail');
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
};
