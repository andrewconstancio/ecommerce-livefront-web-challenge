import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MobileDropdown from "./MobileDropdown";
import React from 'react';

const MobileMenuItems = ({ item, depthLevel, toggleMenu}) => {

	// state variable to show / hide drop down of navigation items
	const [dropdown, setDropdown] = useState(false);
  
	// toggle the state variable to show / hide drop down of navigation items
	const toggleDropdown = () => {
		setDropdown((prev) => !prev);
	};

  // return the main html content for this component
	return (
		<li className="menu-items">
      {/* if navigation item has children render the mobile dropdown component */}
			{item.children ? (
				<>
					<button
						data-testid="mobile-dropdown-expand-button"
						type="button"
						aria-haspopup="menu"
						aria-expanded={dropdown ? "true" : "false"}
						onClick={() => toggleDropdown()}>
						<span className="nav-main-item">{item.title}</span>
						<FaChevronDown 
							className={dropdown ? "nav-item-chevron-rotate" : "nav-item-transition"} 
						/>
					</button>
					<MobileDropdown
						item={item}
						dropdown={dropdown}
						depthLevel={depthLevel + 1}
						toggleMenu={toggleMenu}
					/>
				</>
			) : ( 
        // if navigation item has no children render the navigation link to page
				<Link
					to={item.path} 
					role="button"  
					className={depthLevel == 0 ? "nav-main-item" : ""}
					type="button"
					aria-haspopup="menu"
					aria-expanded={dropdown ? "true" : "false"}
					onClick={() => toggleMenu()}
				>
					{item.title}
				</Link>
			)}
		</li>
	)
}

export default MobileMenuItems;