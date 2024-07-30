import "./App.css";
import Brand from "./components/Brand/brand";
import Features from "./components/Features/features";
import Footer from "./components/Footer/footer";
import Hero from "./components/Hero/hero";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brand />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
