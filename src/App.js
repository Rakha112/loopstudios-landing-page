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
        <Route path="/loopstudios-landing-page" exact component={About}/>
        <Route path="/loopstudios-landing-page/coming-soon" exact component={ComingSoon}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
