import "./App.css";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      } else {
        console.log("not logged in");
      }
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
