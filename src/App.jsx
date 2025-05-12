import { useRef, useState } from "react";
import "./App.css";
import Hero from "./components/hero";
import Gallery from "./components/Gallery";

function App() {
  // const heroRef = useRef(null);
  // const carouselRef = useRef(null);
  // const [activePage, setActivePage] = useState("hero");

  // const handleScroll = (e) => {
  //   if (e.deltaY < 0) {
  //     heroRef.current?.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // const scrollToSection = (section) => {
  //   setActivePage(section);
  //   if (section === "carousel") {
  //     carouselRef.current?.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className="h-screen w-screen overflow-y-auto">
      <section className="h-screen flex items-center justify-center ">
        <Hero />
      </section>
      <section className="h-screen flex items-center justify-center">
        <Gallery />
      </section>
    </div>
  );
}

export default App;
