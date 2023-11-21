import React from "react";
import Head from "./head";
import Search from "./search";
import Navbar from "./navbar";
import "./header.css";
const Header = ({cartItem}) => {
  return (
    <>
      <Head />
      <Search cartItem={cartItem}/>
      <Navbar />
    </>
  );
};

export default Header;
