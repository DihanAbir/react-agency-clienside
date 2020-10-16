import React from 'react';
import banner from '../../../images/logos/Frame.png';
import './BannerSection.css';



const BannerSection = () => {
    
    


    return (

        <div className="row bannersection">
            <div className="col-5 p-5">
                <h1>Let's Grow Your Brand To The Next Level</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, obcaecati officia in temporibus asperiores optio.</p>
                <a href="HireUs" className="btn btn-danger">Hire Use</a>
            </div>
            <div className="col-5">
                <div className="img">
                    <img className="img-fluid" src={banner} alt=""/>
                </div>
            </div>
            
        </div>
    );
};

export default BannerSection;