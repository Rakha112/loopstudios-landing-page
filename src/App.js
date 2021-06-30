import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import {HashRouter, Route} from 'react-router-dom';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="container">
        <Navbar />
        <Route path="/loopstudios-landing-page" exact component={About}/>
        <Route path="/coming-soon" exact component={ComingSoon}/>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
