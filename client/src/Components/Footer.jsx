import React from "react";
import {FaInstagram, FaYoutube, FaBehance, FaFacebookF, FaEnvelope, FaPhoneAlt} from 'react-icons/fa'


const NktFooter = () => {
    return (
        <>
        <div className="container-fluid bg-dark-teal">
            <div class="container pb-4">
                <footer class="row ">
                    <div className="row py-5">
                        <div className="col-sm-6 text-center text-md-left">
                            <h3 className="subs-text">Subscribe to Newsletter</h3>
                        </div>
                        <div className="col-sm-6">
                            <div className="Subscribe d-flex justify-content-center justify-content-md-end">
                                <input className="subs-input" placeholder="Enter your E-mail" name="subsrcibe"></input>
                                <a href="#" className="subs-btn">SUBSCRIBE</a>
                            </div>    
                        </div>
                    </div>


                    <div class="col-sm-3 mb-3">
                        <h5 className="text-white text-center text-md-start text-lg-start">Resources</h5>
                        <ul class="nav flex-column text-center text-md-start text-lg-start">
                            <li class="nav-item mb-2"><a href="#" class="p-0 footer-link">Pricing</a></li>
                            <li class="nav-item mb-2"><a href="#" class="p-0 footer-link">Service</a></li>
                            <li class="nav-item mb-2"><a href="#" class="p-0 footer-link">Contact</a></li>
                        </ul>
                    </div>

                    <div class="col-sm-3 mb-3">
                        <h5 className="text-white text-center text-md-start text-lg-start">Community</h5>
                        <ul class="nav flex-column text-center text-md-start text-lg-start">
                            <li class="nav-item mb-2"><a href="#" class="p-0 footer-link">About</a></li>
                            <li class="nav-item mb-2"><a href="#" class="p-0 footer-link">Blog</a></li>
                            <li class="nav-item mb-2"><a href="#" class="p-0 footer-link">Portfolio</a></li>
                            
                        </ul>
                    </div>

                    <div class="col-sm-3 mb-3">
                        <h5 className="text-white text-center text-md-start text-lg-start">Information</h5>
                        <ul class="nav flex-column text-center text-md-start text-lg-start">
                            <li class="nav-item mb-2"><a href="#" class="p-0 footer-link">Terms and Condition</a></li>
                            <li class="nav-item mb-2"><a href="#" class="p-0 footer-link">Privacy Policy</a></li>
                            <li class="nav-item mb-2"><a href="#" class="p-0 footer-link">Cookie Policy</a></li>
                        </ul>
                    </div>

                    <div class="col-sm-3 mb-3">
                        <h5 className="text-white text-center text-md-start text-lg-start">Connect with us</h5>
                        <ul class="nav flex-column text-center text-md-start text-lg-start">
                            <li class="nav-item mb-2"><a href="#" class="p-0 footer-link"><FaPhoneAlt/> +91 8709194910</a></li>
                            <li class="nav-item mb-2"><a href="#" class="p-0 footer-link"><FaEnvelope/> info@pixsans.com</a></li>
                            <div class="d-flex mb-2 justify-content-between">
                                <a href="#" class="footer-icon"><FaInstagram/></a>
                                <a href="#" class="footer-icon"><FaBehance/></a>
                                <a href="#" class="footer-icon"><FaYoutube/></a>
                                <a href="#" class="footer-icon"><FaFacebookF/></a>
                            </div>
                        </ul>
                    </div>
                
                </footer>
            </div>
        </div>
        <div className="container-fluid bg-teal pt-3">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 mx-auto text-center">
                        <p className="">Copyright 2022 <a className="text-footer" href="">pixsans.com</a> | Built by <a className="text-footer" href="">yourbugfixers.com</a></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NktFooter;