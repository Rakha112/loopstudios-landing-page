import Creations from "./components/Creations";
import Home from "./components/Home";
import Leader from "./components/Leader";
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Leader />
      <Creations />
    </div>
  );
}

export default App;
