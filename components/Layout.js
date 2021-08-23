import React from "react";
import homeStyles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
