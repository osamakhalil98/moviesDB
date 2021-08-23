import React from "react";
import Nav from "./Nav.js";
import homeStyles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}
