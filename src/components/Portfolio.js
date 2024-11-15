import React from 'react';
import wrenchPortalCover from '../assets/images/wrench-bg-cover.png'
import codergrindCover from '../assets/images/codergrind-cover.png'
import weatherOnRailsCover from '../assets/images/weather-on-rails-cover.PNG'
import daedalussolutionsCover from '../assets/images/daedalussolutions-cover.jpg'

const Portfolio = () => {
    const images = [
        {image: wrenchPortalCover, link: 'https://wrenchportal.com/services'},
        {image: daedalussolutionsCover, link: 'https://daedalussolutions.online'},
        {image: weatherOnRailsCover, link: 'https://weatheronrails.online/'},
        {image: codergrindCover, link: 'https://codergrind.online/'},
    ];

  return (
      
    <div className='portfolio-container'>
         {images.map((image, index) => (
        <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
            <img key={index} src={image.image}/>
        </a>
      ))}
    </div>
  );
};

export default Portfolio;