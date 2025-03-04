import React from "react";
import Hero_Section from "../components/home/Hero_Section";
import Home_Appoinment from "../components/home/Home_Appoinment";
import Home_About from "../components/home/Home_About";
import Home_Service from "../components/home/Home_Service";

function Home() {
  return (
    <>
      <Hero_Section />
      <Home_Appoinment />
      <Home_About />
      <Home_Service />
    </>
  );
}

export default Home;
