import React from 'react';
import '../App.css';
import { motion } from "framer-motion";
import { AnimatePresence } from 'framer-motion';
import scrollDownIcon from "../assets/icons/scrolldown.svg";

const FrontPage = () => {
    return(
        <div className="front-page-container">
            <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={ {duration: 0.5, ease: "easeIn"}}>
                <h1 title='DYLAN CASSELL'>DYLAN CASSELL</h1>
            </motion.div>
            <AnimatePresence>
                <motion.div
                initial={{ x: -1500}}
                animate={{ x: 0}}
                transition={{delay: 3}}
                >
                    <div>
                    <h3>Fullstack Developer</h3>
                    </div>
                </motion.div>
            </AnimatePresence>
                <AnimatePresence>
                    <div className='scroll-down-icon-container'>
                        <motion.img
                        initial={{ opacity:0, y: 0 }}
                        animate={{opacity:1, y: [0, 30, 0] }} // Animate the 'y' property from 0 to 30, back to 0
                        transition={{delay: 6, repeat: Infinity, duration: 1.5 }} // Infinite animation with a duration of 1 second
                        style={{ display: 'inline-block' }}
                        src={scrollDownIcon}
                        className='scrollDownIcon'
                    />
                    </div>
            </AnimatePresence>
        </div>
    );
}

export default FrontPage;