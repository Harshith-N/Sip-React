import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">
                Navbar
            </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link ">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>
                <Link className="btn btn-primary" to="/Login">Login</Link>
                <Link className="btn btn-primary" to="/Signup">Signup</Link>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;