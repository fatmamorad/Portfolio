import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/fatmLogo.png";
import { initFlowbite } from "flowbite";
import { Link } from "react-scroll";
function Navbar() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <nav className="w-full fixed top-0 left-0 right-0 bg-purple-200/40 backdrop-blur-md  z-50 border-gray-200 ">
        <div className="w-3/4 mx-auto">
          <div className=" flex flex-wrap items-center justify-between mx-auto ">
            <a href="/" className="">
              <img src={logo} className="h-15  mt-0 mb-0" alt="Flowbite Logo" />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className=" md:bg-transparent bg-white rounded-2xl mb-3 font-medium  justify-center items-center flex flex-col p-4 md:p-0  borderrounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   ">
                <li className="flex-row justify-center items-center ">
                 
                  <Link
                    to="home"
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    spy={true}
                    className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 "
                    aria-current="page"
                  >
                     <p className="text-center hidden md:block">
                    <i className="fa fa-home "></i>
                  </p>
                    Home

                  </Link>
                </li>
                <li className="flex-row justify-center   items-center">
                 
                  <Link
                  activeClass="active"
                    smooth={true}
                    offset={-80}
                    duration={500}
                    spy={true}
                   to="about"
                    
                    className="block py-2 px-3rounded-sm md:p-0 "
                    aria-current="page"
                  >
                     <p className="text-center  hidden md:block">
                    <i className="fa-solid fa-user-circle "></i>
                  </p>
                    About Me
                  </Link>
                </li>

                <li className="flex-row justify-center items-center">
                  <Link
                  activeClass="active"
                    to="projects"
                     smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    className="block py-2 px-3rounded-sm md:bg-transparent  md:p-0"
                    aria-current="page"
                  >
                    <p className="text-center  hidden md:block">
                    <i class="fa-solid fa-laptop-code"></i>
                  </p>
                    Projects
                  </Link>
                </li>
                <li className="flex-row justify-center items-center">
                 
                  <Link
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    offset={-80}
                    duration={500}
                    spy={true}
                    className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 "
                    aria-current="page"
                  >
                     <p className="text-center  hidden md:block">
                    <i class="fa-solid fa-phone"></i>
                  </p>
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
