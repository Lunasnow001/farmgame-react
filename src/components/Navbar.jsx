/* eslint-disable no-unused-vars */
import { useState } from "react";
import Logo from "../assets/img/logo-black.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#F5F7FA] text-black">
      <div className="relative flex md:flex-row flex-col md:justify-between md:items-center mx-auto p-10 max-w-[1320px] h-auto md:h-[80px] container">
        <div className="">
          <a href="">
            {/* <img src={Logo} alt="logo" /> */}
          </a>
        </div>


        <ul className="flex md:flex-row flex-col my-5">
            <li className="md:mx-4 my-2"><a href="#">Home</a></li>
            <li className="md:mx-4 my-2"><a href="#">Service</a></li>
            <li className="md:mx-4 my-2"><a href="#">Feature</a></li>
            <li className="md:mx-4 my-2"><a href="#">Product</a></li>
            <li className="md:mx-4 my-2"><a href="#">Testimonial</a></li>
            <li className="md:mx-4 my-2"><a href="#">FAQ</a></li>
        </ul>

        <ul className="flex">
            <li><a href="#">Login</a></li>
            <li><a href="#">Sing up</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;