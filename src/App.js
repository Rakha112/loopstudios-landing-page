import Creations from "./components/Creations";
import Home from "./components/Home";
import Leader from "./components/Leader";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Leader />
      <Creations />
      <Footer />
    </div>
  );
}

export default App;
