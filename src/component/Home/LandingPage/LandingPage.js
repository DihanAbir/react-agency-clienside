import React from 'react';
import Banner from '../Banner/Banner';
import CarouselSection from '../Carousel/Carousel';
import Email from '../Email/Email';
import Organization from '../Organization/Organization';
import Review from '../Review/Review';
import Service from '../Service/Servise';
import './LandingPage.css'

const LandingPage = () => {
    return (
        <>
            <Banner></Banner>
            <Organization/>
            <Service/>
            <CarouselSection/>
            <Review/>
            <Email/>
        </>
    );
};

export default LandingPage;