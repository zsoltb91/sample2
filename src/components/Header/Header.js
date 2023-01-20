import "./Header.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="header-container">
      <div className="menu-container">
        <a href="/#main2">
          <div className="logo">Sample</div>
        </a>
        <nav ref={navRef} className="menu">
          <ul className="list">
            <li className="listitem">
              <a href="/#main2">Home</a>
            </li>
            <li className="listitem">
              <a href="/#work">My work</a>
            </li>
            <li className="listitem">
              <a href="/#contact">Contact</a>
            </li>
          </ul>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
}

export default Header;
