import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Threads from "./Pages/Threads/Threads";
//import { Switch } from "react-router-dom";
//import { Redirect } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Threads />} />

        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
