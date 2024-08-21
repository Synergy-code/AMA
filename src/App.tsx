import About from "./layouts/About";
import Contact from "./layouts/Contact";
import Donation from "./layouts/Donation";
import Hero from "./layouts/Hero";
import Nav from "./layouts/Nav";
import SectionVideo from "./layouts/SectionVideo";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About/>
      <SectionVideo/>
      <Donation/>
      <Contact/>
    </>
  );
}

export default App;
