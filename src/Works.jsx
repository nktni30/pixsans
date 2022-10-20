
import React from "react";
import { ImageBox } from "./Components/ImageBox";
import { OurWorks } from "./utils/WorkData";

const Works = () => {
    return(
    <>
        <div className="container">
            <div className="row mt-5">
                {OurWorks && OurWorks.map((item) =>
                    <ImageBox
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                    />
                )}
            </div>
        </div>
    </>
    )
}

export default Works;
