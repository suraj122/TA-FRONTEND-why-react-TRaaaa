import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import About from "./About";
import Blog from "./Blog";
import Work from "./Work";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Blog />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
