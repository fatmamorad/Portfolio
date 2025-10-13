import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import AbouMe from "../AbouMe/AbouMe";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import ContactMe from "../ContactMe/ContactMe";

function Layout() {
  return (
    <>
       <Navbar></Navbar>
    <div className=" w-3/4 mx-auto h-screen">
   
      <Home></Home>
      <AbouMe></AbouMe>
      <Projects></Projects>
      <ContactMe></ContactMe>
      </div>
    </>
  );
}

export default Layout;
