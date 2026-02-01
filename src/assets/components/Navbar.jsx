import { useState } from "react";
import { Link } from "react-scroll";
import logo from "./logo.png";
import nav_underline from "./nav_underline.svg";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />

      <ul className="nav-menu">
        <li>
          <Link
            to="home"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setMenu("home")}
          >
            Home
          </Link>
          {menu === "home" && <img src={nav_underline} alt="" />}
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setMenu("about")}
          >
            About Me
          </Link>
          {menu === "about" && <img src={nav_underline} alt="" />}
        </li>

        <li>
          <Link
            to="portfolio"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setMenu("portfolio")}
          >
            Portfolio
          </Link>
          {menu === "portfolio" && <img src={nav_underline} alt="" />}
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setMenu("contact")}
          >
            Contact
          </Link>
          {menu === "contact" && <img src={nav_underline} alt="" />}
        </li>
      </ul>

      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default Navbar;
