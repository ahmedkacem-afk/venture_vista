import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // State for storing color class
  const [color, setColor] = useState("text-green-500");

  // Function to handle NavLink className dynamically
  const getNavLinkClassName = (isActive) => {
    // Determine class name based on active state
    return isActive ? "text-green-500" : "text-black";
  };

  // Event handler to update color state
  const handleNavLinkClick = () => {
    setColor("text-green"); // Update color state when NavLink is clicked
  };

  // Rendering navbar elements
  return (
    <header className="header">
      <NavLink
        to="/"
        className={`w-15 h-16 rounded-lg bg-white items-center justify-center flex font-bold shadow-md ${color}`}
        onClick={handleNavLinkClick}
      >
        <p>Venture Vista</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        {/* Dynamic navigation: if clicked => color blue else text black */}
        <NavLink
          to="/campgrounds"
          className={getNavLinkClassName(false)}
          onClick={handleNavLinkClick}
        >
          Campgrounds
        </NavLink>
        {/* Repeat similar structure for other NavLink components */}
        <NavLink
          to="/profile"
          className={getNavLinkClassName(false)}
          onClick={handleNavLinkClick}
        >
          Profile
        </NavLink>
        <NavLink
          to="/contact"
          className={getNavLinkClassName(false)}
          onClick={handleNavLinkClick}
        >
          Contact
        </NavLink>
        <NavLink
          to="/logout"
          className={getNavLinkClassName(false)}
          onClick={handleNavLinkClick}
        >
          Logout
        </NavLink>
        {/* Those were the links to the pages */}
      </nav>
    </header>
  );
};

export default Navbar;
