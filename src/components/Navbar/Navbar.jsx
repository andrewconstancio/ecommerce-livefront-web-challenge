import { navItems } from "../../static/Navitems.js"
import NavLink from "./Navlink.jsx";
import { Link } from "react-router-dom";
import React from 'react';

const Navbar = () => {

  // return the main html content for this component
	return (
		<>
      {/* main store logo text on navigation bar */}
			<Link to={"/"} className="logo-text-desktop" aria-label="Go to home screen">Fake Store</Link>
			<nav className="desktop-nav" aria-label="main">
				<ul className="menus">
          {/* loop over navigation items  */}
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
  
// export default component 
export default Navbar;