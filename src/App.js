import logo from './logo.svg';
import './App.css';
import FixedBackground from './components/FixedBackground';
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import InfoPage from './components/Information';
import FrontPage from './components/FrontPage';


function App() {
  return (
    <div className="app-container">
      <FixedBackground />
      <div className='content'>
        <FrontPage />
        <InfoPage />
      </div>
      
    </div>
  );
}

export default App;
