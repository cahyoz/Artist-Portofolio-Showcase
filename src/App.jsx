import "./App.css";
import Hero from "./components/hero";
import Gallery from "./components/Gallery";
import InfoPage from "./components/info_page";

function App() {
  return (
    <div className="h-screen w-screen overflow-y-auto">
      <section id="hero" className="h-screen flex items-center justify-center ">
        <Hero />
      </section>
      <section
        id="gallery"
        className="h-screen flex items-center justify-center"
      >
        <Gallery />
      </section>
      <section
        id="commission"
        className="h-screen flex items-center justify-center"
      >
        <InfoPage />
      </section>
    </div>
  );
}

export default App;
