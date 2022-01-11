import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Languages } from "./components/languages";
import { About } from "./components/about";
import { Works } from "./components/works";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
import { Resume } from "./components/resume";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Languages data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Works data={landingPageData.Services} />
      {/* <Gallery data={landingPageData.Gallery}/> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Resume data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
