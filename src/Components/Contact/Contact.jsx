import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <form className="signup-header mt-5">
                <h4 className=' mt-5 mb-3 text-white text-center'>Contact Us</h4>
                <div className="text-center">
                    <input name='name' className='input-field ps-3' type="text" placeholder='Your Name' required /></div><br />
                <div className="text-center">
                    <input name='email' className='input-field ps-3' type="email" placeholder='Email' required /></div><br />
                <div className="text-center">
                    <textarea className=' input-field ps-3 your-message pt-2 pe-3' type="text" placeholder=' Your Message' required ></textarea>
                </div>

                <div className="text-center">
                    <input className='btn bg-white text-black mt-2 mb-5' type="submit" value="Send Message" />



                </div>
            </form>
        </div>
    );
};

export default Contact;