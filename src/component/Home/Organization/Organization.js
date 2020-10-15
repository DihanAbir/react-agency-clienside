import React from 'react';
import './Organization.css'


const Organization = (props) => {
    const logos = ['airbnb', 'google', 'netflix', 'slack', 'uber']
    return (
        
            <div className="img row p-2 container m-auto">
                {
                    logos.map(logo => <div className="col orglogo" >
                            <img className=" p-4 img-fluid" src={require(`../../../images/logos/${logo}.png`)} alt=""/>
                        </div>)
                }



            </div>
            
    );
};

export default Organization; 