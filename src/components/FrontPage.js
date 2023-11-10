import React from 'react';
import '../App.css';
import { motion } from "framer-motion";
import { AnimatePresence } from 'framer-motion';

const FrontPage = () => {
    return(
        <div className="front-page-container">
            <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={ {duration: 0.5, ease: "easeIn"}}>
                <h1 title='DYLAN CASSELL'>DYLAN CASSELL</h1>
                <div className='mobile-name-display'>
                    <h1 title='DYLAN'>DYLAN</h1>
                    <h1 title='CASSELL'>CASSELL</h1>
                </div>
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
        </div>
    );
}

export default FrontPage;