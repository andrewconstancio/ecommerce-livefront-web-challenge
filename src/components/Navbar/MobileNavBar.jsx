import { Link } from "react-router-dom";
import { useState } from "react";
import { navItems } from "../../static/Navitems.js"
import MobileMenuItems from "./MobileMenuItems.jsx";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import React from 'react';

const MobileNavBar = () => {

  // starting depth of naviation item
	const depthLevel = 0;

  // state variable to show / hide the navigation menu
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu((prev) => !prev);
	};

	return (
		<nav className="mobile-nav" aria-label="main">
			<div className="mobile-logo-area">
				<button
					className="mobile-nav-menu-button"
					type="button"
					onClick={() => toggleMenu()}
					aria-haspopup="menu"
					aria-pressed={showMenu ? "true" : "false"}
					aria-expanded={showMenu ? "true" : "false"}
					aria-label={showMenu ? `Expanded navigation submenu` : `Collapsed navigation submenu`}
				>
					{showMenu ? (
						<RxCross2 />
					) : ( 
						<IoMdMenu />
					)}
				</button>

        {/* main store logo text on navigation bar */}
				<Link 
					to={"/"} 
          onClick={() => toggleMenu()}
					className="logo-text-mobile" 
					aria-label="Go to home screen"
					>Fake Store
				</Link>
			</div>
	
      {/* if show menu state variable is true show navigation menu items  */}
			{showMenu && (
				<ul className="menus">
          {/* loop over navigation items  */}
					{navItems.map((menu, index) => {
					return (
						<MobileMenuItems
							key={index}
							item={menu}
							depthLevel={depthLevel}
							toggleMenu={toggleMenu}
						/>
					);
					})}
				</ul>
			)}
	  	</nav>
	)
  }
  
  export default MobileNavBar;