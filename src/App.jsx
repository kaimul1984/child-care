import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import AboutUs from "./components/AboutUs";
import OurDailyRoutine from "./components/OurDailyRoutine";

const App = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <AboutUs/>
      <OurDailyRoutine/>
    </>
  );
};

export default App;
