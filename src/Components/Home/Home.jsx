import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            <div className='header-container'>
                <div className='text-box ms-5'>
                    <p>Welcome</p>
                    <h1>KUDIL</h1>
                    <h3>YOU ARE RIGHT CHOICE TO YOUR SPECIAL PROGRAM</h3>
                    <Link className='btn explore-btn'>Explore More <FaArrowRight></FaArrowRight></Link>
                </div>
            </div>




            {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
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
            </div> */}
        </div>
    );
};

export default Home;
