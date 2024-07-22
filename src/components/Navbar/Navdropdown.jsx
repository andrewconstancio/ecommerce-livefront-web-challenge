import React from 'react';
import { Link } from "react-router-dom";

const Navdropdown = ({ listElementId, item, dropdown, toggleDropdown }) => {
  // return the main html content for this component
	return (
		<ul id={listElementId} className={`dropdown ${dropdown ? "show" : ""}`} aria-expanded={dropdown}>
      {/* show navigation group title if is not null */}
      {item.groupTitle && (
        <li className="menu-title">
          <h3 className="">{item.groupTitle}</h3>
        </li>
      )}
      {/* loop over child from navigation component and render the list*/}
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