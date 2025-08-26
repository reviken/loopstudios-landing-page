import About from "../About";
import Creations from "../Creations";
import Footer from "../Footer";
import Hero from "../Hero";

export default function LandingPage() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <About />

        <Creations />
      </main>
      <Footer />
    </>
  );
}
