import { useState } from "react";
import { SmoothScroll } from "./components/SmoothScroll";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
        {/* Removed mask entirely so the grid is evenly visible everywhere */}
        <div className="bg-grid-plus pointer-events-none fixed inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_80%)]" />

        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

        <div
          className={`relative z-10 min-h-screen transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } text-gray-100`}
        >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
