import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../../index.css";
import CV from "../../assets/cv2.pdf";
import fatmaImage from "../../assets/Images/fatma.png";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="grid grid-cols-12 h-screen md:my-14 my-20">
        <div className="md:col-span-6 col-span-12 order-1 md:order-0 p-3 h-full flex items-center ">
          <div className="flex ">
            <div className="">
              <div>
                <div class="flex items-center w-fit px-2  my-4   text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800">
                  <div class="inline-flex items-center justify-center shrink-0 w-8 h-8 text-purple-950  rounded-lg dark:bg-blue-800 dark:text-blue-200">
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
                      />
                    </svg>
                  </div>
                  <div class=" text-sm font-normal text-purple-950">
                    Frontend Developer
                  </div>
                </div>

                <h1 className="md:text-5xl text-2xl font-mono  bg-gradient-to-r from-purple-950 via-purple-700 to-purple-500 bg-clip-text text-transparent ">
                  Fatma.M Mourad
                </h1>
                <p className=" text-purple-950 md:text-xl text-sm">
                  Buildeing Modern Web Applications
                </p>
                <div className="my-2 grid grid-cols-12 gap-2">
                  <kbd class="col-span-5 md:col-span-2 px-2 py-1.5 text-xs font-semibold text-purple-950 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 me-1">
                    HTML5
                  </kbd>
                  <kbd class="col-span-5 md:col-span-2 px-2 py-1.5 text-xs font-semibold text-purple-950 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 me-1">
                    CSS3
                  </kbd>
                  <kbd class="col-span-5 md:col-span-2 px-2 py-1.5 text-xs font-semibold text-purple-950 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 me-1">
                    JS
                  </kbd>
                  <kbd class="col-span-5 md:col-span-2 px-2 py-1.5 text-xs font-semibold text-purple-950 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 me-1">
                    Bootstarp
                  </kbd>
                  <kbd class="col-span-5 md:col-span-2 px-2 py-1.5 text-xs font-semibold text-purple-950 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 me-1">
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
        <div className="md:col-span-6 col-span-12 flex  h-full justify-center items-center ">
          <img src={fatmaImage} />
        </div>
      </div>
    </>
  );
}

export default Home;
