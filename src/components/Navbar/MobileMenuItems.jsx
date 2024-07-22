import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MobileDropdown from "./MobileDropdown";
import React from 'react';

const MobileMenuItems = ({ item, depthLevel, toggleMenu}) => {

	// depth of the menu item
	const [dropdown, setDropdown] = useState(false);
  
	// toggle child navigation drop down 
	const toggleDropdown = (e) => {
		e.stopPropagation();
		setDropdown((prev) => !prev);
	};

	return (
		<li className="menu-items">
			{item.children ? (
				<>
					<button
						data-testId="mobile-dropdown-expand-button"
						type="button"
						aria-haspopup="menu"
						aria-expanded={dropdown ? "true" : "false"}
						onClick={(e) => toggleDropdown(e)}>
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
				<Link
					to={item.path} 
					role="button"  
					className={depthLevel == 0 ? "nav-main-item" : ""}
					type="button"
					aria-haspopup="menu"
					aria-expanded={dropdown ? "true" : "false"}
					onClick={(e) => toggleMenu(e)}
				>
					{item.title}
				</Link>
			)}
		</li>
	)
}
  
export default MobileMenuItems;