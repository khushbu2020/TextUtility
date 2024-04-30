import React,{useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      {/* <nav className={`navbar navbar-expand-lg  navbar-${props.modee}  bg-${props.modee}`}> */}
        <Link className="navbar-brand " to="/">
          {/* TextUtility */}
          {props.title}
        </Link>
        <button
          aria-controls="navbarSupportedContent "
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbarSupportedContent"
          data-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {/* <button onClick={()=>{
                props.showmodee()
              }}>click me</button> */}
              <div className="bg-primary rounded mx-2" onClick={()=>{
                props.dColor("primary");
              }} style={{height:"1.5rem",width:"1.5rem",cursor:"pointer"}} ></div>
              <div className="bg-secondary rounded mx-2"  onClick={()=>{
                props.dColor("secondary");
              }} style={{height:"1.5rem",width:"1.5rem",cursor:"pointer"}} ></div>
              <div className=" bg-success rounded mx-2"  onClick={()=>{
                props.dColor("success");
              }} style={{height:"1.5rem",width:"1.5rem",cursor:"pointer"}} ></div>
              <div className="bg-danger rounded mx-2"  onClick={()=>{
                props.dColor("danger");
              }} style={{height:"1.5rem",width:"1.5rem",cursor:"pointer"}} ></div>
              <div className="bg-warning rounded mx-2"  onClick={()=>{
                props.dColor("warning");
              }} style={{height:"1.5rem",width:"1.5rem",cursor:"pointer"}} ></div>
              <div className="bg-info rounded mx-2"  onClick={()=>{
                props.dColor("info");
              }} style={{height:"1.5rem",width:"1.5rem",cursor:"pointer"}} ></div>
              <div className="bg-light rounded mx-2 border"  onClick={()=>{
                props.dColor("light");
              }} style={{height:"1.5rem",width:"1.5rem",cursor:"pointer"}} ></div>
              
          <form className="form-inline my-2 my-lg-0">
          <div className="custom-control custom-switch">
              <input
                className="custom-control-input"
                id="customSwitch1"
                type="checkbox"
                onClick={()=>{props.colorMode()}}
              />
              <label className={`custom-control-label text-${props.mode==="light" ? 'dark' : "light"}`} htmlFor="customSwitch1">
                Mode switch 
              </label>
            </div>
            <input
              aria-label="Search"
              className="form-control mr-sm-2"
              placeholder="Search"
              type="search"
            />
            
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
              Search
            </button>
           
          </form>
        </div>
      </nav>
    </div>
  );
};

Nav.propTypes = {
  title: PropTypes.string.isRequired,
};

Nav.defaultProps = {
  title: "my app",
};
export default Nav;
