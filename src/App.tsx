import React from "react";
import { Header, Content, WhyUs, About, Footer } from "./components/index";
import { FAQ } from "./components/FAQ/FAQ";

//--legacy-peer-deps
// git push --force origin main

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Content />
      <WhyUs />
      <About />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
