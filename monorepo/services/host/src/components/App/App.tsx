import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <div className={styles.page}>
      <nav className={styles.navigation}>
        <Link to={"/admin/about"}>About</Link>
        <Link to={"/shop"}>Shop</Link>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};
