import React, { useEffect, useState } from 'react';

import Carousel from 'react-elastic-carousel';
import './Review.css';

const Review = () => {

    const [review, setReview] = useState([]);
    useEffect(()=>{
       fetch('https://young-anchorage-57844.herokuapp.com/review') 
        .then(res => res.json())
        .then(data => setReview(data))

    }, [])

    console.log(review)


    return (
        <div className="review-container container mt-5">
            <h3 className="text-center text-black pt-5 my-5">Clients <span
             className="text-success">Feedbacks</span></h3>
            <Carousel itemsToShow={3} showArrows={false} enableAutoPlay={true} autoPlaySpeed={3000}  className="py-5 carousel-section">

                {review.map(item => <div className="text-center p-3 carousel review-carosel" key={item._id}>
                    <img className="img-fluid" src={item.photoURL} alt=""/>
                    <h5 className="text-white">{item.name}</h5>
                    <h6> {item.description}</h6>
                    <p>{item.review}</p>
                </div>)}

            </Carousel>
        </div>
    );
};


export default Review;