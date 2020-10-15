import React, { Component } from 'react';  
import Carousel from 'react-elastic-carousel';
import './Carousel.css';

const CarouselSection = () => {
    const items= [
        {id: 1, image: 'carousel-1'},
        {id: 2, image: 'carousel-2'},
        {id: 3, image: 'carousel-3'},
        {id: 4, image: 'carousel-4'},
        {id: 5, image: 'carousel-5'},
        {id: 6, image: 'carousel-2'},
        {id: 7, image: 'carousel-3'},
        {id: 8, image: 'carousel-4'},
        {id: 9, image: 'carousel-5'},
      ]
    return (
        <div className="carousel-container">
            <h3 className="text-center text-white pt-5 my-5">Here Are Some Of <span className="text-success">Ous Works</span> </h3>
            <Carousel itemsToShow={3} showArrows
            ={false} enableAutoPlay={true} autoPlaySpeed={3000}  className="py-5 carousel-section">
                {items.map(item => <div className="p-3 m-4 carousel" key={item.id}>
                    <img className="img-fluid" src={require(`../../../images/${item.image}.png`)} alt=""/>
                </div>)}
            </Carousel>
        </div>
    );
};

export default CarouselSection;