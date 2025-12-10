import React from "react";
import { Link,NavLink } from "react-router-dom";


const Navbar = () => {
    return (
      <nav className="nav">
        <div className="nav-left">
          <Link to="/" className="brand">PropertyFinder</Link>
        </div>
        <div className="nav-right">
          <NavLink to="/" end className={({isActive})=> isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/listings" className={({isActive})=> isActive ? "nav-link active" : "nav-link"}>Listings</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
        </div>
      </nav>
    );
  };
export default Navbar;