import React from "react";
import ContactHeader from './Components/ContactHeader';
import Footer from './Components/Footer';

const Contact = () => {
    return (
        <>
        <ContactHeader/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-8 col-md-6 col-lg-4 mx-auto">
                        <div className="card contact-card">
                        <div className="card-body text-center">                        
                            <div className="form">
                                <div className="row mb-4">
                                    <h5 className="">Leave a message!</h5>
                                </div>
                                <div className="row mb-4">
                                    <input name="name" type="text" placeholder="Full Name" className="nkt-form"></input>
                                </div>
                                <div className="row mb-4">
                                <input name="Email" type="email" placeholder="Email" className="nkt-form"></input>
                                </div>
                                <div className="row mb-4">
                                <input name="mobile" placeholder="Mobile" className="nkt-form"></input>
                                </div>
                                <div className="row mb-4">
                                <textarea name="message" type="text" placeholder="Your Message" className="nkt-form nkt-txt-area"></textarea>
                                </div>
                                
                                    <button className="nkt-btn-submit">Submit</button>
                                
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
            <div className="nkt-5"></div>
            <Footer/>
        </>
    )
}

export default Contact;