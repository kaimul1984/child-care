import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import AboutUs from "./components/AboutUs";
import Topbar from "./components/Topbar";
import Gallaries from "./components/Gallaries";
import Contact from "./components/Contact";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import ContextProvider from "./components/context";

const App = () => {
  return (
    <ContextProvider>
      <div className="App">
        <Topbar />
        <Navbar />
        <div className="section">
          <Slider />
          <AboutUs />
          <WhyChooseUs />
          <Gallaries />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </ContextProvider>
  );
};

export default App;
