import React from "react";
import { Link, NavLink } from "react-router-dom";
import { StyleMain } from "./Layout.styled";
import { SingUp } from "../Auth/SignUp";
import { SingIn } from "../Auth/SingIn";
import { AuthDetails } from "../Auth/AuthDetails";

const Layout = ({ children }) => {
  return (
    <StyleMain>
      <header className="headerStyle">
        <NavLink className = 'header-link' to='/' >Home</NavLink>
        <NavLink className = 'header-link' to='/teachers' >Teachers</NavLink>
        <NavLink className='header-link' to='/favorites' >Favorites</NavLink>
        <SingUp />
        <SingIn />
        <AuthDetails/>
        <Link>SignUp</Link>
        <Link>SignIn</Link>
        <Link>LogOut</Link>
      </header>
      <main className="mainStyle">{children}</main>
    </StyleMain>
  );
};

export default Layout;