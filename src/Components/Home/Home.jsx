import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import { FaArrowRight, FaFacebook, FaGem, FaGithub, FaGoogle, FaHome, FaInfo, FaInstagram, FaLinkedin, FaPhone, FaPrint, FaTwitter } from "react-icons/fa";

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
            <footer class="text-center text-lg-start bg-black mt-5">

                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div class="me-5 d-none d-lg-block">
                        <span className='text-white'>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <Link href="" class="me-4 ">
                            <i class="  text-white"><FaFacebook></FaFacebook></i>
                        </Link>
                        <Link href="" class="me-4 ">
                            <i class=" text-white"><FaTwitter></FaTwitter></i>
                        </Link>
                        <Link href="" class="me-4 ">
                            <i class=" text-white"><FaGoogle></FaGoogle></i>
                        </Link>
                        <Link href="" class="me-4 ">
                            <i class=" text-white"><FaInstagram></FaInstagram></i>
                        </Link>
                        <Link href="" class="me-4 ">
                            <i class=" text-white"><FaLinkedin></FaLinkedin></i>
                        </Link>
                        <Link href="" class="me-4 ">
                            <i class=" text-white"><FaGithub></FaGithub></i>
                        </Link>
                    </div>

                </section>

                <section class="">
                    <div class="container text-center text-md-start mt-5">

                        <div class="row mt-3">

                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class=" me-3 text-white"> <FaGem></FaGem></i><span className='text-white'>Company name</span>
                                </h6>
                                <p className='text-white'>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>



                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4 text-white">
                                    Uses
                                </h6>
                                <p>
                                    <Link to="/" class="uses">Html</Link> </p><p>
                                    <Link to="/" class="uses">Css</Link>  </p><p>
                                    <Link to="/" class="uses">Bootstrap</Link></p><p>
                                    <Link to="/" class="uses">React js</Link>
                                </p>
                            </div>



                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4 text-white">
                                    Useful links
                                </h6>
                                <p>
                                    <Link to="/" class="uses">Pricing</Link>
                                </p>
                                <p>
                                    <Link to="/" class="uses">Settings</Link>
                                </p>
                                <p>
                                    <Link to="/" class="uses">Orders</Link>
                                </p>
                                <p>
                                    <Link to="/" class="uses">Help</Link>
                                </p>
                            </div>



                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-bold mb-4 text-white">Contact</h6>
                                <p className='text-white'><i class=" me-3"></i><FaHome></FaHome> New York, NY 10012, US</p>
                                <p className='text-white'>
                                    <i class=" me-3"></i>
                                    <FaInfo></FaInfo> info@example.com
                                </p>
                                <p className='text-white'><i class=" me-3"></i><FaPhone></FaPhone> + 01 234 567 88</p>
                                <p className='text-white'><i class="me-3"></i><FaPrint></FaPrint> + 01 234 567 89</p>
                            </div>

                        </div>

                    </div>
                </section>

                <div class="text-center p-4 text-white">
                    © 2021 Copyright : <span><Link className='uses' to="/">KUDIL</Link></span>
                </div>

            </footer>

        </div>
    );
};

export default Home;
