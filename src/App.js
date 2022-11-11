import "./App.css";
import Navbar from "./components/navbar/navbar";
import Landing from "./components/landingSection/landing";
import Services from "./components/serviceSection/Services";
import Perks from "./components/perkSection/Perks";
import "./App.css";
import "./components/general.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Services />
      <Perks />
    </div>
  );
}

export default App;
