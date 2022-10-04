import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SEO from "./SEO";

const MainLayout = ({ seo, ...props }) => {
  return (
    <>
      <SEO {...seo} />
      <Header />
      <main className="main-child" style={props.style}>
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
