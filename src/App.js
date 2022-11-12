import Navbar from "./components/navbar/navbar";
import Landing from "./components/landingSection/landing";
import Services from "./components/serviceSection/Services";
import Perks from "./components/perkSection/Perks";
import Ratings from "./components/RatingSection/Ratings";
import Testimonial from "./components/testiminonialSection/Testimonial";
import Blog from "./components/blogSection/Blog";
import Contact from "./components/contactSection/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";
import "./components/general.css";
import "animate.css/animate.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Services />
      <Perks />
      <Ratings />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
