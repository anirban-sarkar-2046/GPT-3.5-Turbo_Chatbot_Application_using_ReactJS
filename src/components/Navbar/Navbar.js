import React, { useState } from "react";
import './Navbar.css';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(true);
    return (
        <>
            <div className="hamburger">
            <div className = "hamburger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu />
                </a>
            </div>

            <div className={showMediaIcons ? "mobile-menu-link" : <div></div>}>
                    <div className="mobile-menus">
                    <ul>
                        <li>
                            <Link to="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>Home</Link>
                        </li>
                        <li>
                            <Link to="/chathistory" onClick={() => setShowMediaIcons(!showMediaIcons)}>Chats</Link>
                        </li>
                        <li>
                            <Link to="/blog" onClick={() => setShowMediaIcons(!showMediaIcons)}>Blog</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={() => setShowMediaIcons(!showMediaIcons)}>About</Link>
                        </li>
                        <li>
                            <Link to="/subscription" onClick={() => setShowMediaIcons(!showMediaIcons)}>Subscription</Link>
                        </li>
                        <li>
                            <Link to="/profile" onClick={() => setShowMediaIcons(!showMediaIcons)}>Profile</Link>
                        </li>
                        <li>
                            <a href onClick={() => window.location.href = window.location.origin}>Sign out</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            
            <nav className="main-nav">
                <div className="menu-link">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/chathistory">Chats</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/subscription">Subscription</Link>
                        </li>
                    </ul>
                </div>
                <div className="profile">
                    <ul>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                    <a href onClick={() => window.location.href = window.location.origin}><button>Sign out</button></a>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;