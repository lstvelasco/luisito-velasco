import { useState } from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GoToTop from "./components/GoToTop";

function App() {
  const [isHeroHovered, setIsHeroHovered] = useState(false);

  return (
    <>
      <Layout isHeroHovered={isHeroHovered}>
        <div
          onMouseEnter={() => {
            setIsHeroHovered(true);
          }}
          onMouseLeave={() => {
            setIsHeroHovered(false);
          }}
        >
          <Hero />
        </div>
        <Projects />
        <Skills />
        <Contact />
        <GoToTop />
      </Layout>
    </>
  );
}

export default App;
