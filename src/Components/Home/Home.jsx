import React, { useEffect, useState } from 'react';
import './Home.css'
import { Link, useNavigation } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import Chefs from '../../Chefs/Chefs';
import Footer from '../../Footer/Footer';

const Home = () => {
    const navigation = useNavigation()
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/che')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className=''>
            {/* main Header */}
            <div className='header-container'>
                <div className='text-box ms-5'>
                    <p>Welcome</p>
                    <h1>KUDIL</h1>
                    <h3>YOU ARE RIGHT CHOICE TO YOUR SPECIAL PROGRAM</h3>
                    <Link className='btn explore-btn'>Explore More <FaArrowRight></FaArrowRight></Link>
                </div>
            </div>

            {/* main section1 */}
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-4'>
                {
                    navigation.state === 'loading' ? <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div> : ""
                }
                {
                    navigation.state === 'loading' ? <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div> : ""
                }
                {
                    chefs.map(chef => <Chefs
                        key={chef.id}
                        chefs={chef}
                    ></Chefs>)
                }
            </div>



            {/* main section2 */}
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i.ibb.co/tHy3Jfn/fotor-2023-5-2-23-43-35.png" class="d-block imag-slid" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/xgYT0Q3/fotor-2023-5-2-23-46-4.png" class="d-block imag-slid" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/9WWj9fZ/fotor-2023-5-2-23-47-49.png" class="d-block imag-slid" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/TMCmNJQ/fotor-2023-5-2-23-49-7.png" class="d-block imag-slid" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/bgvwTxw/fotor-2023-5-2-23-49-52.png" class="d-block imag-slid" alt="..." />
                    </div>
                </div>
            </div>






            {/* Footer */}
            <Footer></Footer>

        </div>
    );
};

export default Home;
