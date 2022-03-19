import React from "react";
import Layout from "./components/Layout";
// import SEO from "./components/seo";

// Components
import Header from "./components/Header";
import Work from "./components/Work";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";

// styles
import "./styles/globals.css";

export default function App() {
  return (
    <div>
      <Layout>
        {/* <SEO title="Portfolio Template" /> */}
        <Header></Header>
        <Work></Work>
        <About></About>
        <Skills></Skills>
        <Education></Education>
        <Footer></Footer>
      </Layout>
    </div>
  );
}
