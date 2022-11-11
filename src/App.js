import "./App.css";
import Navbar from "./components/navbar/navbar";
import Landing from "./components/landingSection/landing";
import Services from "./components/serviceSection/Services";
import Perks from "./components/perkSection/Perks";
import Ratings from "./components/RatingSection/Ratings";
import Testimonial from "./components/testiminonialSection/Testimonial";
import "./App.css";
import "./components/general.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Services />
      <Perks />
      <Ratings />
      <Testimonial/>
    </div>
  );
}

export default App;
