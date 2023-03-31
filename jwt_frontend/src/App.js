import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Secret from "./components/secret";
import Products from "./components/products";
import axios from "axios";
import "./App.css";
import Categories from "./components/Categories";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <div className="app">
      <div className="appBody">
        <Router>
          <Routes>
            <Route exact path="/" element={<SignUp />}>
              Welcome to My App
              {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
              ) : (
                <></>
              )}
            </Route>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
export default App;
