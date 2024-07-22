import React from 'react';
import Navbar from "./Navbar.jsx";
import MobileNav from "./MobileNavBar.jsx";

const Header = () => {
	// return the main html content for this component
	return (
	  <header className="nav-area">
			{/* desktop nav bar */}
			<Navbar />

			{/* mobile nav bar */}
			<MobileNav />
	  </header>
	)
}
  
// export default component
export default Header;