import './App.css';
import FixedBackground from './components/FixedBackground';
import InfoPage from './components/Information';
import FrontPage from './components/FrontPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import DisableZoom from './functions/DisableZoom';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className="app-container">
      <DisableZoom />
      <FixedBackground />
      <div className='content'>
        <FrontPage />
        <InfoPage />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
