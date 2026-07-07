import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import { useTheme } from "./hooks/useTheme";

function App() {
  const [isDark, setIsDark] = useTheme();

  return (
    <div className="relative min-h-screen">
      <Background />
      <Nav isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
