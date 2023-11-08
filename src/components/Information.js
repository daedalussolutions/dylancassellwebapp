import React from 'react';
import '../App.css';
import Picture from '../images/IMG_7250.png';

const Information = () => {
    return(
    <div className="info-container">
        <div className="info-text">
            <h2 className="info-header">I am Dylan Cassell and I am a fullstack developer</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o
                fficia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className="picture">
            <div className="picture-container">
                <img src={Picture} alt="Picture" />
            </div>
        </div>
    </div>
    );
}

export default Information;