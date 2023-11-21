import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Search = ({ cartItem }) => {

  return (
    <section className="search">
      <div className="container c_flex">
        <div className="logo width">
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="search-box f_flex">
          <input type="text" placeholder="search..." />
          <i className="fa fa-search" />
          <span style={{ marginTop: "10px", marginLeft: "5px" }}>All Category</span>
        </div>
        <div className="icon f_flex width">
          <i className="fa fa-user icon_circle" />
          <div className="cart">
            <Link to="/cart">
              <i className="fa fa-shopping-beg icon-circle" />
              <span>{cartItem && cartItem.length ? cartItem.length : ""}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
