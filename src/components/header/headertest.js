import React, { useState, useEffect } from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/dropdown";
import { db } from "../../utils/firebase-config";
import { ref, onValue } from "firebase/database";

const Headertest = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth > 1600) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth > 1600) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  useEffect(() => {
    let faaji = document.getElementById("faaji");
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data.faajiFriday.faajiFriday === false) {
        faaji.style.display = "none";
      } else if (data.faajiFriday.faajiFriday === true) {
        faaji.style.display = "flex";
      } else {
        faaji.style.display = "none";
      }
    });
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <div className="header-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/music" className="nav-links" onClick={closeMobileMenu}>
                Music
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/birthday"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Shoutout
              </Link>
            </li>
            <li
              className="nav-item nav-items"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link to="#" className="nav-links">
                More <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item" id="faaji">
              <Link to="/faaji" className="nav-links" onClick={closeMobileMenu}>
                Faaji Friday
              </Link>
            </li>
            <div className="header-buttons ">
              <button className="nav-links-mobile">
                <Link to="/contact" onClick={closeMobileMenu}>
                  Make a Booking
                </Link>
              </button>
            </div>
          </ul>
          <div className="header-button ">
            <button className="nav-links">
              <Link to="/contact" onClick={closeMobileMenu}>
                Make a Booking
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Headertest;
