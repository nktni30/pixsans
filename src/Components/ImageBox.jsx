import React from "react";

export function ImageBox({ img, title, desc }) {
    return (
        <div className="col-sm-3 mb-2">
            <div className="card work-card">
                <div className="work-card">
                    <img className="card-img-top work-img" src={img} />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center nkt-gray">{title}</h5>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}