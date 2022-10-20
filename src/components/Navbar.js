import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../assets/styles/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <Link to="/">Robson Trasel</Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#FFF" }} />
        ) : (
          <FaBars size={20} style={{ color: "#FFF" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
