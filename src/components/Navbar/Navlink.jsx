import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import Navdropdown from "./Navdropdown";
import React from 'react';

const NavLink = ({item}) => {

	const [dropdown, setDropdown] = useState(false);
	let ref = useRef();

	useEffect(() => {
		const handler = (event) => {
			if (dropdown && ref.current && !ref.current.contains(event.target)) {
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
  
	const onMouseEnter = () => {
		setDropdown(true);
	};
  
	const onMouseLeave = () => {
		setDropdown(false);
	};
  
	const toggleDropdown = () => {
		setDropdown((prev) => !prev);
	};

	return (
		<li
			className="menu-items"
			ref={ref}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
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
  
  export default NavLink;