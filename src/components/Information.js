import React from 'react';
import '../App.css';
import Picture from '../assets/images/IMG_7250.png';

const Information = () => {
    return(
    <div className="info-container">
        <div className="info-text">
            <h2 className="info-header">My name is Dylan Cassell.</h2>
            <div className='info-body'>
            <p>
                I am a technology jack of all trades.
            </p>
            <p>
                While working full time as a Network Technician, I am developing and managing several projects relating to web development and remote server networking.
            </p>
        </div>
        </div>
        <div className="picture-container">
            <img src={Picture} className="picture" alt="Picture" />
        </div>
    </div>
    );
}

export default Information;