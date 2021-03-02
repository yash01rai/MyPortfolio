import React from "react";
import { useGlobalContext } from "./context";
import { social } from "./data";
import logo from "./freeLogo.png";

const Navbar = () => {
  const { Dark, setDark } = useGlobalContext();

  return (
    <nav className={`${Dark ? "dark-gray" : null}`}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" style={{ height: "60px" }} />
        </div>
        <ul className={`${Dark ? "social-dark a" : "social-icons"}`}>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={Dark ? "dark-mode" : null}>
        <div className="swipy">
          <label className="switch">
            <input type="checkbox" onChange={() => setDark(!Dark)} />
            <span className="slider round dtext">
              <span className={Dark ? "atext" : "dtext"}>
                {Dark ? "Light" : "Dark"}
              </span>
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
