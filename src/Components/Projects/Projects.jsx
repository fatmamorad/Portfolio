import React from "react";
import { NavLink } from "react-router-dom";

import port from "../../assets/Images/portifloo.png";
import post from "../../assets/Images/PostApp.png";
import expense from "../../assets/Images/expense.png";
import game from '../../assets/Images/game.png';
import hung from '../../assets/Images/hung.png';
import weather from '../../assets/Images/weathrer.png';
import firstReact from '../../assets/Images/firstReact.png';

function Projects() {
  const projects = [
    {
      id: 1,
      demoUrl: "https://ecommerce-app-lxke.vercel.app/",
      desc: "Responsive e-commerce website built with Next.js. Features product listings, shopping cart, and a modern UI to enhance the online shopping experience.",
      projectImg: port,
      githubUrl: "https://github.com/fatmamorad/Ecommerce_APP",
    },
    {
      id: 2,
      demoUrl: "https://posts-app-blue.vercel.app/#/Login",
      desc: "Responsive PostApp website built with React.js. Features Add Post, Delete Post, add comment, delete comment, update profile image and a modern UI.",
      projectImg: post,
      githubUrl: "https://github.com/fatmamorad/Posts-App",
    },
    {
      id: 3,
      demoUrl: "https://fatmamorad.github.io/HungManGame/",
      desc: "HungManGame is a simple interactive game using HTML, CSS and JS. Guess the word before attempts run out. Replay button included.",
      projectImg: hung,
      githubUrl: "https://github.com/fatmamorad/HungManGame",
    },
    {
      id: 4,
      demoUrl: "https://fatmamorad.github.io/Expense_Tracker/",
      desc: "Simple expense tracker web app with categories and amount input, showing a list of all expenses in real-time.",
      projectImg: expense,
      githubUrl: "https://github.com/fatmamorad/Expense_Tracker",
    },
    {
      id: 5,
      demoUrl: "https://fatmamorad.github.io/MemoryGame/",
      desc: "Puzzle Memory Game using HTML, CSS, JS. Match pieces to form the complete picture. Clean UI & smooth play.",
      projectImg: game,
      githubUrl: "https://github.com/fatmamorad/MemoryGame",
    },
    {
      id: 6,
      demoUrl: "https://first-reat-app.vercel.app/",
      desc: "First React app. Shows knowledge of components, state management, and user interaction.",
      projectImg: firstReact,
      githubUrl: "https://github.com/fatmamorad/FirstReatApp",
    },
    {
      id: 7,
      demoUrl: "https://fatmamorad.github.io/Weather-App/",
      desc: "Weather App using HTML, CSS, JS. Users search for a city and get live weather info. Clean & intuitive UI.",
      projectImg: weather,
      githubUrl: "https://github.com/fatmamorad/Weather-App",
    },
    {
      id: 8,
      demoUrl: "https://portfolio-lime-three-79.vercel.app/",
      desc: "Weather App using HTML, CSS, JS. Users search for a city and get live weather info. Clean & intuitive UI.",
      projectImg: weather,
      githubUrl: "https://github.com/fatmamorad/Portfolio",
    },
  ];

  return (
    <div className="my-20 px-4" id='projects'>
      <p className="text-purple-950  text-center text-3xl lg:text-5xl font-bold mb-10">Projects</p>
    <div className="grid grid-cols-12 gap-5">
        {projects.map((item) => (
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <div
            key={item.id}
            className="bg-white border  border-gray-200 rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
          >
         
            <div className="w-full  overflow-hidden">
              <img
                src={item.projectImg}
                alt="Project Screenshot"
                className="w-full h-full object-cover"
              />
            </div>

        
            <div className="p-4">
              <p className="text-sm md:text-base text-gray-700 mb-4">{item.desc}</p>

              <div className="flex justify-between gap-2">
                <NavLink to={item.githubUrl} target="_blank" rel="noopener noreferrer">
                  <button className="w-full py-2 text-purple-900 border border-purple-300 rounded hover:bg-purple-50">
                    <i className="fa-brands fa-github mr-1"></i> Code
                  </button>
                </NavLink>
                <NavLink to={item.demoUrl} target="_blank" rel="noopener noreferrer">
                  <button className="w-full py-2 text-purple-900 border border-purple-300 rounded hover:bg-purple-50">
                    <i className="fa fa-code mr-1"></i> Demo
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
      </div>
  
  );
}

export default Projects;
