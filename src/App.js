import logo from './logo.svg';
import './App.css';
import FixedBackground from './components/FixedBackground';
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { Information } from './components/Information'


function App() {
  return (
    <div className="app-container">
      <FixedBackground />
      <div className='content'>
        <h1 title='DYLAN CASSELL'>DYLAN CASSELL</h1>
        <h3 title='Fullstack Developer'>Fullstack Developer</h3>
        <Information />
      </div>
      
    </div>
  );
}

export default App;
