import { Link } from "react-router-dom";
import { useState } from "react";
import { navItems } from "../../static/Navitems.js"
import MobileMenuItems from "./MobileMenuItems.jsx";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import React from 'react';

const MobileNavBar = () => {
	const depthLevel = 0;

	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu((prev) => !prev);
	};

	return (
		<nav className="mobile-nav" aria-label="main">
			<div className="mobile-logo-area">
				<button
					className="mobile-nav__menu-button"
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

				<Link 
					to={"/"} 
					className="logo-text-mobile" 
					aria-label="Go to home screen"
					>Fake Store
				</Link>
			</div>
	
			{showMenu && (
				<ul className="menus">
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