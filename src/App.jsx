import React from "react";
import {Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import "./index.css";

function App() {
  return (
    <React.Fragment>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path='/' />
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
