import MobileMenuItems from "./MobileMenuItems";
import React from 'react';

const MobileDropdown = ({ item, dropdown, depthLevel, toggleMenu }) => {

	// return the main html content for this component
	return (
		<ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {/* loop over nav items and render mobile menu items component */}
			{item.children.map((item, index) => {
				return (
					<MobileMenuItems
						key={index}
						item={item}
						depthLevel={depthLevel}
						toggleMenu={toggleMenu}
					/>
				);
			})}
		</ul>
	);
};

export default MobileDropdown;