import React from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import { useStateValue } from "./Provider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
      <div className="header">
        <Link to="/">
          <img src="2022-07-24 (2).png" className="header_logo" />
        </Link>
        <div className="header_search">
          <input type="text" className="header_searchInput" />
          <AiOutlineSearch className="header_searchIcon" />
        </div>
        <div className="header_nav">
          <Link to="/login">
            <div className="header_option">
              <span className="header_optionLineOne">Hello</span>
              <span className="header_optionLineTwo">Sign In</span>
            </div>
          </Link>
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header_optionBasket">
              <AiOutlineShoppingCart />
              <span className="header_optionLineTwo header_basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
