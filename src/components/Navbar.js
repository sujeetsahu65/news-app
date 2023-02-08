import React from 'react'
import PropTypes from 'prop-types';
import {NavLink, Outlet } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">NewsHub</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li><NavLink className="dropdown-item" to="/entertainment">Entertainment</NavLink></li>
            <li><NavLink className="dropdown-item" to="/general">General</NavLink></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><NavLink className="dropdown-item" to="/health">Health</NavLink></li>
            <li><NavLink className="dropdown-item" to="/business">Business</NavLink></li>
      
        {/* <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Categories
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="/entertainment">Entertainment</NavLink></li>
            <li><NavLink className="dropdown-item" to="/general">General</NavLink></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><NavLink className="dropdown-item" to="/science">Science</NavLink></li>
            <li><NavLink className="dropdown-item" to="/business">Business</NavLink></li>
          </ul>
        </li> */}
      
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" ></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    <main>
      <Outlet/>
    </main>
    
    
    </>
  )
}
