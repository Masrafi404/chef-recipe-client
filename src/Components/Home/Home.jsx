import React, { useContext, useEffect, useState } from 'react';
import './Home.css'
import { Link, useNavigation } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import Chefs from '../../Chefs/Chefs';
import Footer from '../../Footer/Footer';

const Home = () => {

    const navigation = useNavigation()
    const [chefs, setChefs] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch('https://kudil-backend-server-masrafi404.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
        setLoading(false)
    }, [])

    return (
        <div className=''>

            {/* main Header */}
            {
                loading && <div className="d-flex  home-data-load justify-content-center">
                    <div className="spinner-border text-warning mt-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <div className='header-container'>
                <div className='text-box ms-5 fixed-bottom'>
                    <p className=''>Welcome</p>
                    <h1>KUDIL</h1>
                    <h3>YOU ARE RIGHT CHOICE TO YOUR SPECIAL PROGRAM</h3>
                    <Link className='btn explore-btn mb-5'>Explore More <FaArrowRight></FaArrowRight></Link>
                </div>
            </div>

            {/* main section1 */}
            <div>


                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-4 mt-5'>



                    {
                        chefs.map(chef => <Chefs
                            key={chef.id}
                            chefs={chef}
                        ></Chefs>)
                    }
                </div>

            </div>

            {/* main section2 */}

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <h2 className='text-center mb-2'>Special Recipes</h2>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/tHy3Jfn/fotor-2023-5-2-23-43-35.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/xgYT0Q3/fotor-2023-5-2-23-46-4.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/9WWj9fZ/fotor-2023-5-2-23-47-49.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/TMCmNJQ/fotor-2023-5-2-23-49-7.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/bgvwTxw/fotor-2023-5-2-23-49-52.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* our service */}
            <div className="row ms-3 me-3">
                <h3 className='text-center mt-5'>Our Service</h3>
                <div className="col-sm-3 mb-3 mb-sm-6">
                    <div className="card">
                        <div className="">
                            <img className='img-our' src="https://media.istockphoto.com/id/1152493500/photo/authentic-indian-dishes-and-snacks.jpg?s=612x612&w=is&k=20&c=GwsLYfxsh3HXO9dZ4DAPQNQ8sfiljg1CFUCPhCYv-_8=" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 mb-sm-6">
                    <div className="card">
                        <div className="">
                            <img className='img-our' src="https://media.istockphoto.com/id/997345886/photo/indian-cuisine-on-diwali-holiday-tikka-masala-samosa-patties-and-sweets-with-mint-chutney-and.jpg?s=612x612&w=is&k=20&c=t3ghFahWorFApJRGYUlukwaeXDK1n0ii6FQeDTypQ9I=" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 mb-sm-6">
                    <div className="card">
                        <div className="">
                            <img className='img-our' src="https://media.istockphoto.com/id/1173089065/photo/ilish-or-hilsa-famous-bengali-fish-curry-with-grinded-mustard-seed.jpg?s=612x612&w=is&k=20&c=T1csmood_1VgUKXDmcrVjWwzJq3gIhNEMR621Q9gFP0=" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 mb-sm-6">
                    <div className="card">
                        <div className="">
                            <img className='img-our' src="https://media.istockphoto.com/id/1326090605/photo/homemade-spicy-green-mango-pickles-drying-on-sunlight-into-two-plastic-pot-at-home-to.jpg?s=612x612&w=is&k=20&c=_IxkzreBNGlwykKnNyk2Te6MpKX8SMnl1eDCDVAKMWk=" alt="" />
                        </div>
                    </div>
                </div>
            </div>




            {/* Footer */}
            <Footer></Footer>

        </div>
    );
};

export default Home;
