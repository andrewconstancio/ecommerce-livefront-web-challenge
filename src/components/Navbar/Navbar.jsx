import { navItems } from "../../static/Navitems.js"
import NavLink from "./Navlink.jsx";
import { Link } from "react-router-dom";
import React from 'react';

const Navbar = () => {

	return (
		<>
			<Link to={"/"} className="logo-text-desktop" aria-label="Go to home screen">Fake Store</Link>
			<nav className="desktop-nav" aria-label="main">
				<ul className="menus">
					{navItems.map((item, index) => (
						<NavLink 
							key={index} 
							item={item}
						/>
					))}
				</ul>
			</nav>
		</>
	)
  }
  
  export default Navbar