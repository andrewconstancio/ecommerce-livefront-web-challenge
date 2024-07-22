import { Link } from "react-router-dom";
import React from 'react';

const Navdropdown = ({listElementId, item, dropdown, toggleDropdown}) => {
	return (
		<ul id={listElementId} className={`dropdown ${dropdown ? "show" : ""}`} aria-expanded={dropdown}>
		{item.groupTitle && (
			<li className="menu-title">
				<h3 className="">{item.groupTitle}</h3>
			</li>
		)}
		{item.children.map((dropDownItem) => (
			<li key={dropDownItem.id} className="menu-items">
				<Link
					to={dropDownItem.path}
					onClick={toggleDropdown}
					aria-label={`${dropDownItem.title} page`}
				>
					{dropDownItem.title}
				</Link>
		  	</li>
		))}
	  </ul>
	)
  }
  
  export default Navdropdown;