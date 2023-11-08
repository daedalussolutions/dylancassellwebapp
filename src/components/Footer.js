import React from 'react';
import ReactDOM from 'react-dom'
import '../App.css';
import { SocialIcon } from 'react-social-icons'

const Information = () => {
    return(
        <div className='footer-container'>
            <div className='social-media-icons'>
                <SocialIcon className='linkedin' bgColor="currentColor" fgColor="black" target="_blank" url="https://www.linkedin.com/in/dylan-cassell-" />
                <SocialIcon className='github' bgColor="currentColor" fgColor="black" target="_blank" url="https://github.com/daedalussolutions" />
                <SocialIcon className='twitter' bgColor="currentColor" fgColor="black" target="_blank" url="https://twitter.com/daedalussltns" />
            </div>
            <div className='copyright-container'>
                <p>Created by <span title='Dylan Cassell'>Dylan Cassell</span> - ©2023</p>
            </div>
        </div>



    );
}

export default Information;