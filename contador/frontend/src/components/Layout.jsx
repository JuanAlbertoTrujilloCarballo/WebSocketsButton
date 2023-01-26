import React from "react";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div id="layout-container">
      <h1>Mini proyecto usando Websockets</h1>
      <h2>Un botón para pulsar con tus amigos</h2>
      <div id="layout-children">
        {children}
      </div>
    </div>
  );
}

export default Layout;