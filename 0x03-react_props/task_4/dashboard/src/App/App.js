import React from "react";
import "./App.css";
import holberton_logo from "../assets/holberton_logo.jpg";
import { getFullYear, getFooterCopy } from "../utils/utils";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import Notifications from "../Notifications/Notifications.js";
import propTypes from "prop-types";
import CourseList from "../CourseList/CourseList"

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
      </div>
      <div className="App-body">
        {!isLoggedIn ? <Login /> : <CourseList />}
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );

}

App.defaultProps = {
    isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: propTypes.bool,
};

export default App;
