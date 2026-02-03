import React from "react";
import { Carousel } from "antd";

import hp from "../image/hp.jpeg";
import nptel from "../image/nptel.jpeg";
import projectexpo from "../image/projectexpo.png";
import cmr from "../image/cmr.png";
import mindlustercertificate from "../image/mindlustercertificate.png"; 
import tsic from "../image/tsic.png";
import gc from "../image/gc.png";
import javaimage from "../image/javaimage.png";
import Be10x from "../image/Be10x.jpeg";
import jpm from "../image/jpm.jpeg";
import dataforage from "../image/dataforage.jpeg";
import awsforage from "../image/awsforage.jpeg";

const Certification = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-16">
      <div className="max-w-5xl mx-auto px-4 mt-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-sky-400 mb-6">
          <span className="text-white">My</span> Certifications
        </h2>

        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          These certifications showcase my continuous growth and technical skills 
          across cloud, programming, and backend technologies.
        </p>

        {/* Carousel Section */}
        <div className=" p-6 rounded-xl ">
          <Carousel autoplay autoplaySpeed={2000} dotPosition="bottom">
             {/* Slide 1 */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={javaimage}
                alt="java certificate"
                className="w-full h-64 object-contain rounded-sm"
              />
              <h3 className="text-xl text-center mt-4 text-sky-300 font-semibold">
                
              </h3>
            </div>

            {/* Slide 1 */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={mindlustercertificate}
                alt="mysql certificate"
                className="w-full h-64 object-contain rounded-sm"
              />
              <h3 className="text-xl text-center mt-4 text-sky-300 font-semibold">
                
              </h3>
              
            </div>
            {/* Slide 1 */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={jpm}
                alt="JPMorgan certificate"
                className="w-full h-64 object-contain rounded-sm"
              />
              <h3 className="text-xl text-center mt-4 text-sky-300 font-semibold">
                
              </h3>
            </div>

             {/* Slide 2 */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={tsic}
                alt="TSIC certificate"
                className="w-full h-64 object-contain rounded-sm"
              />
              <h3 className="text-xl text-center mt-4 text-sky-300 font-semibold">
                
              </h3>
            </div>

             {/* Slide 3 */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={gc}
                alt="training certificate"
                className="w-full h-64 object-contain rounded-sm"
              />
              <h3 className="text-xl text-center mt-4 text-sky-300 font-semibold">
                
              </h3>
            </div>
            {/* Slide 1 */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={awsforage}
                alt="AWS certificate"
                className="w-full h-64 object-contain rounded-sm"
              />
              <h3 className="text-xl text-center mt-4 text-sky-300 font-semibold">
                
              </h3>
            </div>


            {/* Slide 4 */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={projectexpo}
                alt="Technovation certificate"
                className="w-full h-64 object-contain rounded-sm"
              />
              <h3 className="text-xl text-center mt-4 text-sky-300 font-semibold">
                
              </h3>
            </div>

            {/* Slide 5 */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={cmr}
                alt="certificate of excellence"
                className="w-full h-64 object-contain rounded-sm"
              />
              <h3 className="text-xl text-center mt-4 text-green-300 font-semibold mb-9">
              
              </h3>
              
            </div>
            {/* Slide 1 */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={dataforage}
                alt="software engineering certificate"
                className="w-full h-64 object-contain rounded-sm"
              />
              <h3 className="text-xl text-center mt-4 text-sky-300 font-semibold">
                
              </h3>
            </div>

            {/* Slide 6 */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={hp}
                alt="Effective Leadership Certificate"
                className="w-full h-64 object-contain rounded-sm"
              />
              <h3 className="text-xl text-center mt-4 text-yellow-300 font-semibold">
              
                
              </h3>
            </div>
             {/* Slide 7 */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={Be10x}
                alt="Be10x certificate"
                className="w-full h-64 object-contain rounded-sm"
              />
              <h3 className="text-xl text-center mt-4 text-green-300 font-semibold mb-9">
              
              </h3>
            </div>  


             {/* Slide 8 */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={nptel}
                alt="NPTEL CERTIFICATE"
                className="w-full h-64 object-contain rounded-sm"
              />
              <h3 className="text-xl text-center mt-4 text-green-300 font-semibold mb-9">
              
              </h3>
            </div>  
            

          </Carousel>
        </div>

      

      </div>
    </div>
  );
};

export default Certification;
