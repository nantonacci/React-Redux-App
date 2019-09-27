import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchRandomRecipe } from '../actions';

const Recipe = ({ fetchRandomRecipe, recipeName, isFetching, error }) => {
    useEffect(()=> {
        fetchRandomRecipe();
    }, [fetchRandomRecipe]);

    const fetchRecipe = e => {
        e.preventDefault();
        fetchRandomRecipe();
    };

    if (isFetching) {
        return <p><span role="img" aria-label="sparkles">✨</span>loading new recipe<span role="img" aria-label="sparkles">✨</span></p>;
    }

    return (
        <>
            <h1>{recipeName}</h1>
            <button onClick={fetchRecipe}>new recipe</button>
            <h3 className="errorMsg">{error}</h3>
        </>
    )
};

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        recipeName: state.recipeName,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {fetchRandomRecipe: fetchRandomRecipe}
)(Recipe);