import "./styles.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClicked((prev) => !prev);
  const closeMenu = () => setClicked(false);

  const showButton = () => {
    if (window.innerWidth <= 800) {
      setButton(false);
      setClicked(false);
    } else {
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton);

  useEffect(() => {
    showButton();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <i class="fas fa-atom"></i>
          Vlados
          <i class="fas fa-atom"></i>
        </Link>

        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/resume" className="nav-link" onClick={closeMenu}>
              Resume
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contacts" className="nav-link" onClick={closeMenu}>
              Contacts
            </Link>
          </li>
        </ul>

        {button ?
          <Button buttonStyle="btn--outline">
            SIGN UP
          </Button>
          : <div className="menu-icon" onClick={handleClick}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar;
