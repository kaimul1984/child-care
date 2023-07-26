import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import AboutUs from "./components/AboutUs";
import OurDailyRoutine from "./components/OurDailyRoutine";
import Topbar from "./components/Topbar";
import Gallaries from "./components/Gallaries";

const App = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Slider />
      <AboutUs />
      <OurDailyRoutine />
      <Gallaries/>
    </>
  );
};

export default App;
