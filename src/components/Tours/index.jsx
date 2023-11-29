import React from "react";
import Vsection from "../../components/Vsection"
import img1 from "../../assets/images/atp.png";
import img2 from "../../assets/images/infinity.png";
import img3 from "../../assets/images/oregon.png";
import img4 from "../../assets/images/responsible.png";
import img5 from "../../assets/images/traveloka.png";


const index = () => {
    return (
        <section className="py-[40px] md:py-[80px]">
            <div className="container">
                <div className="flex items-center justify-between  mb-[40px] md:mb-[80px]">
                    <img className="w-[66px] md:w-[100px] lg:w-auto" src={img1} alt="atp" />
                    <img className="w-[66px] md:w-[100px] lg:w-auto" src={img2} alt="infinity" />
                    <img className="w-[66px] md:w-[100px] lg:w-auto" src={img3} alt="oregon" />
                    <img className="w-[66px] md:w-[100px] lg:w-auto" src={img4} alt="responsible" />
                    <img className="w-[66px] md:w-[100px] lg:w-auto" src={img5} alt="traveloka" />
                </div>


                <div>
                  <Vsection/>
                </div>
                
            </div>
        </section>
    );
};

export default index;