import React, { useEffect, useState } from 'react';
import './Recipes.css'
import Header from '../Components/Header/Header';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import Footer from '../Footer/Footer';

const Recipes = () => {
    const { id } = useParams()
    const recipe = useLoaderData()
    const { picture, recipes, experience, description, likes, chef_name, numRecipes } = recipe
    return (
        <div>

            <Header></Header>
            <div className='w-100'>
                <div className="mx-5 my-3">
                    <div className="chef-container2">
                        <div className='mt-auto mb-auto me-4 ms-5 chef-info2'>
                            <h3>{chef_name}</h3>
                            <h5>Experience : {experience} Years</h5>
                            <p>Description: {description}</p>
                            <p className='mb-1'>Number Recipes : {numRecipes}</p>
                            <p className='mb-1'>Likes : {likes}</p>
                        </div>
                        <div><img className='' src={picture} alt="..." /></div>
                    </div>

                </div>
                <div>
                    <h3 className='text-center'>Chef Recipes</h3>
                    {
                        recipes.map(recipe => <Recipe
                            recipe={recipe}
                        ></Recipe>)

                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Recipes;
