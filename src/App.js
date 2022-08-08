import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* <div className="app"> */}
      {/* <Header /> */}
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      {/* </div> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
