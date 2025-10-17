import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../../index.css";
import CV from "../../assets/cv2.pdf";
import fatmaImage from "../../assets/Images/fatma.png";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <div id="home" className="grid grid-cols-12 min-h-screen mt-15 ">
        <div className="lg:col-span-6 col-span-12 order-1 lg:order-0 p-3 h-full flex items-center ">
          <div className="flex w-full justify-center md:justify-end ">
            <div className="">
              <div>
                <div class="flex items-center w-fit px-2  my-4   justify-center text-gray-500 bg-white rounded-lg shadow-sm ">
                  <i className="fa fa-fire"></i>  Frontend Developer
                 
                </div>

                <h1 className="md:text-5xl text-2xl font-mono  bg-gradient-to-r from-purple-950 via-purple-700 to-purple-500 bg-clip-text text-transparent ">
                  Fatma.M Mourad
                </h1>
                <p className=" text-purple-950 md:text-xl text-sm">
                  Buildeing Modern Web Applications
                </p>
                <div className="my-2 grid grid-cols-12 gap-2">
                  <kbd class="col-span-5 md:col-span-2 px-2 py-1.5 text-xs font-semibold text-purple-950 bg-gray-100 border border-gray-200 rounded-lg me-1">
                    HTML5
                  </kbd>
                  <kbd class="col-span-5 md:col-span-2 px-2 py-1.5 text-xs font-semibold text-purple-950 bg-gray-100 border border-gray-200 rounded-lg me-1">
                    CSS3
                  </kbd>
                  <kbd class="col-span-5 md:col-span-2 px-2 py-1.5 text-xs font-semibold text-purple-950 bg-gray-100 border border-gray-200 rounded-lg me-1">
                    JS
                  </kbd>
                  <kbd class="col-span-5 md:col-span-2 px-2 py-1.5 text-xs font-semibold text-purple-950 bg-gray-100 border border-gray-200 rounded-lg me-1">
                    Bootstarp
                  </kbd>
                  <kbd class="col-span-5 md:col-span-2 px-2 py-1.5 text-xs font-semibold text-purple-950 bg-gray-100 border border-gray-200 rounded-lg me-1">
                    ReactJs
                  </kbd>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-12 sm:col-span-6">
                    <NavLink to={CV} target="_blank">
                    <button
                      className=" p-1 my-3 text-purple-950 btn-custom  block"
                      role="button"
                    >
                      <i className="fa fa-eye"></i> View CV
                    </button>
                  </NavLink>
                  </div>
                    <div className="col-span-12 sm:col-span-6">
                  <NavLink to={CV} download={CV} target="_blank">
                    <button
                      className="col-span-12 md:col-span-6 p-1 my-3 text-purple-950 btn-custom  block"
                      role="button"
                    >
                      <i className="fa fa-download"></i> DownLoad CV
                    </button>
                  </NavLink>
                  </div>
                </div>
              </div>

              <div className="my-5">
                <a
                  href="https://wa.me/201005230670"
                  target="_blank"
                  className="me-2 text-purple-950 px-1 py-2 border-purple-950 border rounded-full"
                >
                  <i class="fa-brands fa-xl fa-whatsapp purple-950"></i>
                </a>
                <a
                  href="mailto:fm5130357@gmail.com"
                  target="_blank"
                  className="text-purple-950 px-2 py-2 me-2 border-purple-950 border rounded-full"
                >
                  <i class="fa fa-envelope "></i>
                </a>
                <a
                  href=" https://www.linkedin.com/in/fatma-mahmoud-58671a262/"
                  target="_blank"
                  className="text-purple-950 px-2 me-2 py-2 border-purple-950 border rounded-full"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/fatmamorad"
                  target="_blank"
                  className="text-purple-950 px-2 me-2 py-2 border-purple-950 border rounded-full"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12 flex  h-full justify-center items-center ">
          <img src={fatmaImage} />
        </div>
      </div>
    </>
  );
}

export default Home;
