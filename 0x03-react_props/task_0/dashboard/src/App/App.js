import React from "react";
import "./App.css";
import holberton_logo from "../assets/holberton_logo.jpg";
import { getFullYear, getFooterCopy } from "../utils/utils";
import Header from "../Header/Header.js"
import Login from "../Login/Login.js"
import Footer from "../Footer/Footer.js"
import Notifications from "../Notifications/Notifications.js"

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
      </div>
      <div className="App-body">
        <Login />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
