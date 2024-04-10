import React from 'react';
import wrenchPortalCover from '../assets/images/wrench-bg-cover.png'
import codergrindCover from '../assets/images/codergrind-cover.png'
import weatherOnRailsCover from '../assets/images/weather-on-rails-cover.PNG'
import cryptoPortfolioCover from '../assets/images/cryptoportfolioexe-cover.png'

const Portfolio = () => {
    const images = [
        {image: codergrindCover, link: 'https://codergrind.onrender.com/'},
        {image: weatherOnRailsCover, link: 'https://weather-on-rails.onrender.com/'},
        {image: cryptoPortfolioCover, link: 'https://cryptoportfolio-exe.onrender.com/'},
        {image: wrenchPortalCover, link: ''}
    ];

  return (
      
    <div className='portfolio-container'>
         {images.map((image, index) => (
        <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
            <img key={index} src={image.image} alt={`Image ${index + 1}`} />
        </a>
      ))}
    </div>
  );
};

export default Portfolio;