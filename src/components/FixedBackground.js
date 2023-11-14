import React from 'react';
import { motion } from "framer-motion";
import line1 from "../assets/icons/bg-line.svg";
import line2 from "../assets/icons/bg-line.svg";
import line3 from "../assets/icons/bg-line.svg";
import line4 from "../assets/icons/bg-line.svg";

const FixedBackground = () => {
  return (
    <div className="fixed-background">
      <motion.img 
            src={line1}
            className='line1 line'
            initial={{ rotate: 0}}
            animate= {{rotate: 180}}
            transition={{ duration: 145, ease: "easeInOut", repeat: Infinity }}
            />
            <motion.img 
            src={line2}
            className='line2 line'
            initial={{ rotate: 0}}
            animate= {{rotate: -180}}
            transition={{ duration: 111, ease: "easeInOut", repeat: Infinity }}
            />
            <motion.img 
            src={line3}
            className='line3 line'
            initial={{ rotate: 0}}
            animate= {{rotate: 180}}
            transition={{ duration: 105, ease: "easeInOut", repeat: Infinity }}
            />
            <motion.img 
            src={line4}
            className='line4 line'
            initial={{ rotate: 0}}
            animate= {{rotate: -180}}
            transition={{ duration: 130, ease: "easeInOut", repeat: Infinity }}
            />
    </div>
  );
};

export default FixedBackground;