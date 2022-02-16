import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

export default function NavBar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title.name}
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to='/'>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className="theme-container">
              <div className="theme-color">
                {/* <div className="bg-primary colors color1" onClick={()=>{props.toggleMode("primary")}} ></div>
                <div className="bg-danger colors color2" onClick={()=>{props.toggleMode("danger")}} ></div>
                <div className="bg-success colors color3" onClick={()=>{props.toggleMode("success")}} ></div>
                <div className="bg-warning colors color3" onClick={()=>{props.toggleMode("warning")}} ></div> */}
              </div>
            </div>
            <div className="form-check form-switch mx-2">
              <input className="form-check-input" onClick={()=>{props.toggleMode("dark")}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} html-for="flexSwitchCheckDefault">Light Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
