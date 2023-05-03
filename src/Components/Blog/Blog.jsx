import React from 'react';
import './blog.css'

const Blog = () => {

    return (
        <div className='container'>

            <h2 className='text-center text mt-5 mb-5'>Some Questions And Answer</h2>
            <div className='blog-container'>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Tell us the differences between uncontrolled and controlled components.
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                In the context of software development, components refer to independent and reusable parts of a program. These components can be classified as either controlled or uncontrolled depending on how they are managed and manipulated. <br />
                                <h5>Uncontrolled Components:</h5>
                                <p>
                                    An uncontrolled component is a component that manages its own state internally, without relying on the application's state management system. In other words, an uncontrolled component has its own internal state, which can be modified without being tracked by the parent component. Uncontrolled components are often used for simple, isolated functionality that doesn't require a lot of interactivity with other components. They are easier to set up and use since they don't require any explicit coordination with other components.
                                </p>
                                <h5>Controlled Components:</h5>
                                <p>
                                    On the other hand, a controlled component is a component that relies on the application's state management system to manage its state. A controlled component receives its state from the parent component through props and notifies the parent when its state changes through callbacks. Controlled components are often used for more complex, interactive functionality that requires coordination with other components. They are more flexible and powerful than uncontrolled components, but require more effort to set up and use.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How to validate React props using PropTypes?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                React provides a utility called PropTypes, which allows developers to validate the types of props passed to components. This helps to catch errors early in the development process and ensure that components are being used correctly.

                                To use PropTypes in a React component, you need to import it from the 'prop-types' package and define the propTypes static property on the component.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Tell us the difference between nodejs and express js.
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Node.js and Express.js are two popular web development technologies that are often used together to build server-side applications. Node.js is a runtime environment for JavaScript that allows developers to run JavaScript code on the server-side, while Express.js is a web application framework built on top of Node.js that provides a set of tools and features for building web applications and APIs. <br />
                                <p>Here are the main differences between Node.js and Express.js:</p>
                                <h5>Node.js:</h5>
                                <p>
                                    Node.js is a runtime environment for JavaScript that allows developers to run JavaScript code on the server-side. It provides a set of built-in modules and APIs that can be used to perform tasks such as reading and writing files, networking, and processing data. Node.js is known for its non-blocking I/O model, which allows it to handle large numbers of connections simultaneously without blocking the event loop.
                                </p>
                                <h5>Express.js:</h5>

                                <p>
                                    Express.js is a web application framework built on top of Node.js that provides a set of tools and features for building web applications and APIs. It provides a simple and flexible way to handle HTTP requests and responses, manage routes, and perform middleware functions. Express.js is known for its simplicity, ease of use, and flexibility. It allows developers to build web applications quickly and easily by providing a set of common features and patterns.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                What is a custom hook, and why will you create a custom hook?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>
                                    In React, a custom hook is a reusable function that contains some shared stateful logic, which can be used across different components. Custom hooks are a way to extract component logic into reusable functions that can be shared and tested independently.</p> <br />

                                <p>
                                    A custom hook can be created to encapsulate complex logic that is needed in multiple components. It allows developers to reuse code and keep the codebase DRY (Don't Repeat Yourself). Custom hooks can also simplify component logic and make it easier to understand and test.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5185.jpg" alt="" />
            </div>
        </div>
    );
};

export default Blog;