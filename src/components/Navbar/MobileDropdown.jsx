import MobileMenuItems from "./MobileMenuItems";
import React from 'react';

const MobileDropdown = ({item, dropdown, depthLevel, toggleMenu}) => {
	return (
		<ul className={`dropdown ${dropdown ? "show" : ""}`}>
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