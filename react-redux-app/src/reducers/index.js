import { FETCH_RECIPE_START, FETCH_RECIPE_SUCCESS, FETCH_RECIPE_FAILURE } from '../actions';

const initialState = {
    recipeName: '',
    recipeImg: '',
    recipeUrl: '',
    recipeYouTube: '',
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
                recipeImg: action.payload.strMealThumb,
                recipeUrl: action.payload.strSource,
                recipeYouTube: action.payload.strYoutube,
                error: '',
                isFetching: false,
                
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