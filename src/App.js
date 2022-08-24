import "./App.css";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";

import { getAuth } from "firebase/auth";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./Provider";
import firebaseApp from "./firebase";
const authh = getAuth(firebaseApp);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    authh.onAuthStateChanged((user) => {
      console.log(user);

      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Routes>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
