import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import './Chefs.css'


const Chefs = ({ chefs }) => {
    const { experience, likes, chef_name, numRecipes, picture, id } = chefs


    return (
        <div>
            <div className='chefs-container mx-auto mb-4'>
                <div className="col">
                    <div className="card">
                        <LazyLoad offset={100} threshold={0.95}>
                            <img className='lazy-img' src={picture} alt="..." />
                        </LazyLoad>
                        <div className="card-body">
                            <h3>{chef_name}</h3>
                            <h5>Experience : {experience} Years</h5>
                            <p className='mb-1'>Number Recipes : {numRecipes}</p>
                            <p className='mb-1'>Likes : {likes}</p>
                            <Link className='btn explore-btn' to={`/recipes/${id}`}>View Recipes</Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Chefs;