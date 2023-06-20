import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="bg-light">
        <div className="shadow">
          <div className="col-11 col-md-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
              <div className="container">


              <Link exact className="navbar-brand" to="/">
                PSYCHODEVS
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      
                      activeclassname="active"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      activeclassname="active"
                      to="services"
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      activeclassname="active"
                      to="about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      activeclassname="active"
                      to="contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              </div>

            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
