import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../../../App';
import './AllService.css';
import pic from '../../../images/customer-1.png'

const AllService = () => {

    const [service, setService, loggedInUser, setLoggedInUser] = useContext(userContext);

    const [allOrder, setAllOrder] = useState([]);
    useEffect(()=>{
       fetch('https://young-anchorage-57844.herokuapp.com/all-order') 
        .then(res => res.json())
        .then(data => setAllOrder(data))

    }, [])


    return (
        <div className="row">
              
              {
                allOrder.map(service =>
                    <div className="col-md-6 " >

                        <div className='single-service text-center p-3 m-3'>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="img">
                                        {
                                            service.image ? <img className="img-fluid" src={require(`../../../images/icons/${service.image}.png`)} alt=""/> : <img className="img-fluid" src={pic}  alt="Image"/>
                                        }
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <h6 className='pt-5 pb-4'>{service.title}</h6>
                            <h6 className='pt-5 pb-4'>{service.name}</h6>
                            <p>{service.description}</p>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default AllService;