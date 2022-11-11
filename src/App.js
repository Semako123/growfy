import "./App.css";
import Navbar from "./components/navbar/navbar";
import Landing from "./components/landing/landing";
import ServiceSection from "./components/serviceSection/ServiceSection";
import PerkSection from "./components/perkSection/PerkSection";
import "./App.css";
import "./components/general.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <ServiceSection />
      <PerkSection />
    </div>
  );
}

export default App;
