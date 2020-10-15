import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { userContext } from '../../../App';
import './ServiceList.css'

const ServiceList = () => {
    
    const [service, setService, loggedInUser, setLoggedInUser] = useContext(userContext);

    const [order, setOrder] = useState([]);
    useEffect(()=>{
       fetch('http://localhost:5000/order?email='+loggedInUser.email) 
        .then(res => res.json())
        .then(data => setOrder(data))

    }, [])

    // console.log(order)


 




    return (
        <div className='row'>
            {
                order.map(service =>
                    <div className="col-md-6 " >

                        <div className='border p-3 m-3'>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="img">
                                        {
                                            service.image ? <img className="img-fluid" src={require(`../../../images/icons/${service.image}.png`)} alt=""/> : <img className="img-fluid"  alt="Image"/>
                                        }
                                        
                                    </div>
                                </div>
                                <div className="col-md-2 offset-md-4">
                                    <button className='btn btn-warning'>pending</button>
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

export default ServiceList;