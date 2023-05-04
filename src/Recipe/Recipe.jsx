import React, { useState } from 'react';
import './Recipe.css'
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
    const [db, setDb] = useState(false)
    const { name, image, ingredients, cookingMethod, rating } = recipe
    const favorite = () => {
        toast.success('Your Favorite Recipe added!', {
            position: toast.POSITION.TOP_CENTER
        })
        setDb(!db)
    }
    return (
        <div className='d-flex recipe-container'>
            <div>
                <img className='img-recipe' src={image} alt="" />
            </div>
            <div className=' info'>
                <h3>Recipe Name: {name}</h3>
                <h4>ingredient: {ingredients}</h4>
                <h4>cookingMethod: {cookingMethod}</h4>
                <Rating placeholderRating={rating}
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                >
                </Rating> {rating} <br />
                <button onClick={favorite} className={db === true ? "btn disabled mt-3" : "btn bg-black text-white mt-3 "}>Add Favorite</button>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipe;

