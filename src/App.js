import './App.css';
import FixedBackground from './components/FixedBackground';
import InfoPage from './components/Information';
import FrontPage from './components/FrontPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import DisableZoom from './functions/DisableZoom';


function App() {
  return (
    <div className="app-container">
      <DisableZoom />
      <FixedBackground />
      <div className='content'>
        <FrontPage />
        <InfoPage />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
