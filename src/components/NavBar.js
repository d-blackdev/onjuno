import React from "react";
import styled from "styled-components";
import '../css/NavBar.css'
import { NavLink } from "react-router-dom";
import Logo from "../Image/Logo.png";
import { FaAngleDown } from "react-icons/fa";
import Button from "./Button";

function NavBar() {
  return (
    <nav className=" flex md:flex-row justify-between w-4/5 mx-auto z-10">
      <NavLink to="/">
        <img className="nav-logo w-48 h-8 mt-2" src={Logo} alt="img" />
      </NavLink>
      <Links>
        <ul className="flex md:flex-row justify-between text-center">
          <NavLink className="link" to="/">Home</NavLink>
          <NavLink className="link flex md:flex-row" to="/company">
           <h6> Company</h6> <FaAngleDown className="mt-1 text-sm ml-1" />
          </NavLink>
          <NavLink className="link flex md:flex-row" to="/learn">
          <h6> Learn</h6> <FaAngleDown className="mt-1 text-sm ml-1"/>
          </NavLink>
          <NavLink className="link flex md:flex-row" to="/legal">
          <h6> Legal</h6> <FaAngleDown className="mt-1 text-sm ml-1" />
          </NavLink>
        </ul>
      </Links>
      <div className="flex md:flex-row justify-between pl-16">
        <Button name="Login"/>&nbsp; &nbsp;  
        <Button name="Signup" filled />
      </div>
    </nav>
  );
}

export default NavBar;

const Links = styled.ul`
//  ul{
//    margin-left: -50px;
//  }
  .link{
      padding: 10px 25px 10px 10px;
      font-size:15px;
  }
`;
