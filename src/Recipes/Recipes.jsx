import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import { useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import Footer from '../Footer/Footer';

const Recipes = () => {
    const { id } = useParams()
    const [chef, setChef] = useState({ recipes: [] })
    useEffect(() => {
        fetch(`http://localhost:5000/chef/${id}`)
            .then(res => res.json())
            .then(data => {
                setChef(data)
            })
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className=''>
                {
                    chef.recipes.map(recipe => <Recipe
                        recipe={recipe}
                    ></Recipe>)

                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Recipes;
