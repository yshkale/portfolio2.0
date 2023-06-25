import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="mx-auto max-w-5xl">
        <Header />

        <Hero />

        <Projects />

        <Stack />

        <Footer />
      </div>
    </>
  );
}

export default App;
