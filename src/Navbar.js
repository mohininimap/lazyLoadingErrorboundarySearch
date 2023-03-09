import React from 'react';
import propTypes  from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = (props) => {
  return (
    <>
    <div className='navbar'> 
    <NavLink to="/" className="menu">{props.title}</NavLink>
    <NavLink to="/" className="menu">{props.aboutText}</NavLink>
    <NavLink to="/" className="menu">Home</NavLink>
    <NavLink to="/about" className="menu">About</NavLink>
    <NavLink to="/contact" className="menu">Contact</NavLink>
    <NavLink to="/refs" className="menu">Refs</NavLink>
    <NavLink to="/refsfunctional" className="menu">RefsInFunction</NavLink>
    <NavLink to="/refsform" className="menu">Refs</NavLink>
    <NavLink to="/errorboundary" className="menu">ErrorBoundary</NavLink>
    <NavLink to="/searchitemfromlist" className="menu">Search</NavLink>

    
    </div>
   
    </>
  )
}

export default Navbar;


Navbar.propTypes ={title:propTypes.string,
  aboutText:propTypes.string
}
Navbar.defaultProps={
  title:"set title",
  aboutText:"set About text"
}
