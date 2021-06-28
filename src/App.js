import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={About}/>
        <Route path="/coming-soon" exact component={ComingSoon}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
