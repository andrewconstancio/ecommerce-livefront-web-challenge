import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import Navdropdown from "./Navdropdown";
import React from 'react';

const NavLink = ({item}) => {

	// state variable to show / hide drop down of navigation tiems
	const [dropdown, setDropdown] = useState(false);

  // reference for navigation list
	let listRef = useRef();

  // change show / hide dropdown state when mouse enter the navgaiton link area
	useEffect(() => {
		const handler = (event) => {
			if (dropdown && listRef.current && !listRef.current.contains(event.target)) {
				setDropdown(false);
			}
		};
			document.addEventListener("mousedown", handler);
			document.addEventListener("touchstart", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [dropdown]);
  
  // set dropdown state variable to true on enter area
	const onMouseEnter = () => {
		setDropdown(true);
	};
  
  // set dropdown state variable to false on enter area
	const onMouseLeave = () => {
		setDropdown(false);
	};
  
  // toggle dropdown state variable
	const toggleDropdown = () => {
		setDropdown((prev) => !prev);
	};

	return (
		<li
			className="menu-items"
			ref={listRef}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
    {/* if navigation item has children render addition navigation menu */}
		{item.children ? (
			<>
				<button
					type="button"
					aria-haspopup="menu"
					aria-pressed={dropdown ? "true" : "false"}
					aria-expanded={dropdown ? "true" : "false"}
					aria-controls={`menu-item-${item.id}`}
					aria-label={dropdown ? `Expand ${item.title} submenu` : `Collapse ${item.title} submenu`}
					className={dropdown ? "nav-item-border nav-item" : "nav-item"}
					onClick={toggleDropdown}
				>
					<span className="nav-main-item">{item.title}</span>
					<FaChevronDown className={dropdown ? "nav-item-chevron-rotate" : "nav-item-transition"} />
				</button>
				<Navdropdown
					listElementId={`menu-item-${item.id}`}
					item={item}
					dropdown={dropdown}
					toggleDropdown={toggleDropdown}
				/>
			</>
		) : (
			<Link
				to={item.path}
				aria-label={`${item.title} page`}
				className={dropdown ? "nav-item-border nav-item" : "nav-item"}
			>
				<span className="nav-main-item">{item.title}</span>
			</Link>
		)}
	</li>
	)
}
  
// export default component 
export default NavLink;