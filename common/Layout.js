import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = (props) => {
  const {children, footerstatus} = props;
  return (
    <>
      {true ? (<div className="container">
        <Header />
        <Navbar />
        {children}
        {!footerstatus && (<Footer />)}
      </div>) : 
      (<div className="container">
        <Header />
        <Navbar />
        {children}
        {footerstatus && (<Footer />)}
      </div>)
}
    </>
  );
};

export default Layout;
