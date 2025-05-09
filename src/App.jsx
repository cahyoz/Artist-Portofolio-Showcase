import { useRef, useState } from "react";
import "./App.css";
import CarouselArt from "./components/Carousel_art";
import Hero from "./components/hero";
import Gallery from "./components/Gallery";

function App() {
  const heroRef = useRef(null);
  const carouselRef = useRef(null);
  const [activePage, setActivePage] = useState("hero");

  const handleScroll = (e) => {
    if (e.deltaY < 0) {
      heroRef.current?.scrollIntoView({ behavior: "instant" });
    }
  };

  const scrollToSection = (section) => {
    setActivePage(section);
    if (section === "carousel") {
      carouselRef.current?.scrollIntoView({ behavior: "instant" });
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden" onWheel={handleScroll}>
      <section
        ref={heroRef}
        className="h-screen flex items-center justify-center "
      >
        <Hero scrollToSection={scrollToSection} />
      </section>
      <section
        ref={carouselRef}
        className="h-screen flex items-center justify-center"
      >
        {activePage === "carousel" && <Gallery />}
      </section>
    </div>
  );
}

export default App;
