import React, { useContext, useEffect, useState } from 'react';
import './Home.css'
import { Link, useNavigation } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import Chefs from '../../Chefs/Chefs';
import Footer from '../../Footer/Footer';
import { AuthContext } from '../Provider/AuthProvider';

const Home = () => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <div className="d-flex  mt-5 justify-content-center">
            <div className="spinner-border mt-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    const navigation = useNavigation()
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('https://kudil-backend-server-masrafi404.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className=''>
            {/* main Header */}
            <div className='header-container'>
                <div className='text-box ms-5 fixed-bottom'>
                    <p className=''>Welcome</p>
                    <h1>KUDIL</h1>
                    <h3>YOU ARE RIGHT CHOICE TO YOUR SPECIAL PROGRAM</h3>
                    <Link className='btn explore-btn'>Explore More <FaArrowRight></FaArrowRight></Link>
                </div>
            </div>

            {/* main section1 */}
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-4'>
                {
                    chefs.map(chef => <Chefs
                        key={chef.id}
                        chefs={chef}
                    ></Chefs>)
                }
            </div>



            {/* main section2 */}

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
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


            {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/tHy3Jfn/fotor-2023-5-2-23-43-35.png" className="d-block imag-slid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/xgYT0Q3/fotor-2023-5-2-23-46-4.png" className="d-block imag-slid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/9WWj9fZ/fotor-2023-5-2-23-47-49.png" className="d-block imag-slid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/TMCmNJQ/fotor-2023-5-2-23-49-7.png" className="d-block imag-slid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/bgvwTxw/fotor-2023-5-2-23-49-52.png" className="d-block imag-slid" alt="..." />
                    </div>
                </div>
            </div> */}






            {/* Footer */}
            <Footer></Footer>

        </div>
    );
};

export default Home;
