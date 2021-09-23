import "./styles.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";

export default function Navbar() {
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
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <i className="fas fa-atom"></i>
          Vlados
          <i className="fas fa-atom"></i>
        </Link>

        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Главная
            </Link>
          </li>

          {!button &&
            (
              <li className="nav-item">
                <Link to="/projects" className="nav-link" onClick={closeMenu} >
                  Проекты
                </Link>
              </li>
            )
          }

          <li className="nav-item">
            <Link to="/aboutMe" className="nav-link" onClick={closeMenu}>
              О себе
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contacts" className="nav-link" onClick={closeMenu}>
              Контакты
            </Link>
          </li>
        </ul>

        {button ?
          <Link to="/projects" onClick={closeMenu} >
            <Button buttonStyle="btn--outline">
              ПРОЕКТЫ
            </Button>
          </Link>
          : <div className="menu-icon" onClick={handleClick}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        }
      </div>
    </nav>
  )
}
