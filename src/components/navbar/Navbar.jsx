import React, { useState } from "react";
import "./navbar.css";
import {Link} from 'react-router-dom';
import {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [modeToggle, setModeToggle] = useState(true)

    const lightMode = () =>{
        document.body.classList.add('active')
        setModeToggle(false)
    }
  
    const darkMode = () =>{
        document.body.classList.remove('active')
        setModeToggle(true)
    }

  return (
    <div className="navbar">
      <div className="container">

        <div className="row" style={{justifyContent:"space-between"}}>
        {
              modeToggle ? (
                <div className="nav-toggler"  onClick={lightMode}>
                <BsFillSunFill />
                </div>
              ) :(
                <div className="nav-toggler"  onClick={darkMode}>
                <BsFillMoonFill  />
                </div>
              )
          }
          {!toggleMenu && (
            <button type="button" onClick={()=> setToggleMenu(true)} className="nav-toggler">
              <span></span>
            </button>
          ) }

        {toggleMenu && (
          <nav className="nav">
            <div className="nav-inner">
            <button type="button" onClick={()=> setToggleMenu(false)} className="nav-toggler">
              <span></span>
            </button>
              <ul>
                <li>
                  <Link to="/" onClick={()=> setToggleMenu(false)} className="nav-item">
                    home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={()=> setToggleMenu(false)} className="nav-item">
                    about
                  </Link>
                </li>
                <li>
                  <Link to="/project" onClick={()=> setToggleMenu(false)} className="nav-item">
                    projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={()=> setToggleMenu(false)} className="nav-item">
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
