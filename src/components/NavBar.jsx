import React from "react";
import styles from "../styles/NavBar.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../features/authSlice.jsx";

const NavBar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    navigate("/login");
    dispatch(clearUser());
  };

  return (
    <div className={styles.navbarWrapper}>
      <div>
        <h1 onClick={() => navigate("/")}>NewzZ</h1>
        <p>{user?.email}</p>
      </div>
      <div className={styles.buttonWrapper}>
        {user?.email && <button onClick={handleLogout}>Logout</button>}
        {!user?.email && (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
