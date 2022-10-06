import React from "react";
import WorkProcess from '../assets/images/process.svg';

const Work =()=>{
    return(
        <>
        <div className="row">
            <div className="col-lg-6 mx-auto">
            <h2 className="nkt-h2 text-center">How We <span className="nkt-orange">Work</span>  </h2>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-lg-12">
                <img className="img-fluid" src={WorkProcess}></img>
            </div>
        </div>
        </>
    )
}

export default Work;