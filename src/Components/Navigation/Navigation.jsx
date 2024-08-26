import React, { useState } from "react";
import "./Navigation.css";
// import Checks from "../../../public/Images/BackChecksImage.svg";
import { Link } from "react-router-dom";
const Navigation = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State to manage dropdown visibility
    const [isMouseOverDropdown, setIsMouseOverDropdown] = useState(false); // State to track mouse over dropdown
    const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode

    const NavigationLinks = [
        { link: "Home" },
        { link: "AboutUs" },
        { link: "Projects" },
        // { link: "Works", hasDropdown: true }, // Add hasDropdown property for link with dropdown
        // { link: "Supporters" }
    ];

    const handleMouseEnter = () => {
        setIsDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        if (!isMouseOverDropdown) {
            setIsDropdownVisible(false);
        }
    };

    const handleDropdownMouseEnter = () => {
        setIsMouseOverDropdown(true);
    };

    const handleDropdownMouseLeave = () => {
        setIsMouseOverDropdown(false);
        setIsDropdownVisible(false);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode); // Toggle dark mode state
        const body = document.querySelector('body');
        body.classList.toggle('dark-mode'); // Toggle dark mode class on body
    };

    return (
        <>
            <nav>
                <header id="top-navigation-header">
                    <div className="left-side-logo-navigation">
                        <h5>Hello</h5>
                    </div>
                    <div className="right-side-links-navigation">
                        <div className="PCNavigation">
                            <ul className={isDarkMode ? "nav-links-dark" : "nav-links-light"}>
                                {NavigationLinks.map((item, index) => (
                                    <Link to={`/${item.link}`} key={index}>
                                        <li

                                            onMouseEnter={item.hasDropdown ? handleMouseEnter : null}
                                            onMouseLeave={item.hasDropdown ? handleMouseLeave : null}
                                        >
                                            {item.link}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                            {isDropdownVisible && (
                                <div
                                    className="dropdown-container"
                                    onMouseEnter={handleDropdownMouseEnter}
                                    onMouseLeave={handleDropdownMouseLeave}
                                >
                                    {/* Dropdown content goes here */}
                                    {/* Example: */}
                                    <div className="inside-dropdown-content">
                                        <div>
                                            <h4>WebWork</h4>
                                        </div>
                                        <div>
                                            <h4>AppWork</h4>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <button className="btn-style-border" onClick={toggleDarkMode}>
                                {isDarkMode ? "Switch Light" : "Switch Dark"}
                            </button>

                        </div>
                        <div className="hurburgerMenuBtn">
                            hiii
                        </div>
                    </div>
                </header>
            </nav>
        </>
    );
};

export default Navigation;
