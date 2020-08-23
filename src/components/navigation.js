import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Blog", path: "/blog" },
  { title: "Contact Us", path: "/contact-us" },
  { title: "Login", path: "/login" },
];

export default function Navigation({ user }) {
  const [menuActive, setMenuActive] = useState(false);

  const node = useRef();

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setMenuActive(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <nav className="site-navigation" role="navigation">
      <span className="menu-title">My Blog </span>
      {/* <div className="menu-wrap"> */}
      <div
        ref={node}
        className={`menu-content-container ${menuActive && "active"}`}
      >
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <span className="menu-avatar-container">
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={38}
          />
          <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
        </span>
      </div>
      {/* </div> */}
      <i
        className="ionicons icon ion-ios-menu"
        onClick={() => setMenuActive(!menuActive)}
      />
    </nav>
  );
}
