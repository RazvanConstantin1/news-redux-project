import React from "react";
import styles from "../styles/NavBar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const user = true;

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className={styles.navbarWrapper}>
      <div>
        <h1>NewzZ</h1>
        <p>{user}</p>
      </div>
      <div className={styles.buttonWrapper}>
        {user && <button onClick={handleLogout}>Logout</button>}
        {!user && <button onClick={() => navigate("/login")}>Login</button>}
      </div>
    </div>
  );
};

export default NavBar;
