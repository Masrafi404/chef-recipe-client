import React from 'react';
import { FaFacebook, FaGem, FaGithub, FaGoogle, FaHome, FaInfo, FaInstagram, FaLinkedin, FaPhone, FaPrint, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
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

export default Footer;