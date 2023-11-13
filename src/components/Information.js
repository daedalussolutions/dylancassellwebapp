import React from 'react';
import '../App.css';
import Picture from '../images/IMG_7250.png';

const Information = () => {
    return(
    <div className="info-container">
        <div className="info-text">
            <h2 className="info-header">My name is Dylan Cassell.</h2>
            <div className='info-body'>
            <p>
                I am a fullstack developer born and residing in Canada.
            </p>
            <p>
                I am primarily interested in web technologies and infrastructure. My main development frameworks currently are Ruby On Rails, Angular and React. 
                The entire Microsoft Technology stack is something I am quite familiar with as well.
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