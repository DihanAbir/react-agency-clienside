import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import Navbar from '../Navbar/Navbar';
import Organization from '../Organization/Organization';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner" >
           <div className="container">
                <Navbar/>
                <BannerSection/>
           </div>
        </div>
    );
};

export default Banner;