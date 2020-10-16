import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import './Service.css'


const Service = (props) => {
    const services = [
        {
            image: "service1",
            title: "Web Development and apps Development",
            description: "Build Native Apps on iOS and Android From a Single Codebase. Download and Build Today. Native Performance. Open Source. Fast Development. Flexible UI.",
        },
        {
            image: "service2",
            title: "Graphics Designing",
            description: "Graphic design is the process of visual communication and problem-solving through the use of typography, photography, iconography and illustration",
        },
        {
            image: "service3",
            title: "Web Development and Designing",
            description: "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; interface design",
        },
    ]
    const [serviceState, setServiceState, loggedInUser, setLoggedInUser] = useContext(userContext);
    const handlerService = (Singleservice) => {
        
        // console.log(Singleservice);
        const {image,title,description} = Singleservice;
        const singleServiceInfo = {image,title,description};
        setServiceState(singleServiceInfo)
        // console.log(singleServiceInfo)
        // console.log(serviceState)
        
    }
    


    return (
        
            <div className=" p-2 my-5 container">
                    <h1 className="text-center">Privide Awesone <span className="text-success">Services</span></h1>
                <div className="row">
                    {
                        services.map(Singleservice =>
                            <Link  to="/user-deshboard" onClick={() =>handlerService(Singleservice)} className="col-md-4 mt-5" >
                                <div className="p-3 rounded text-center servie-container">
                                    <img className="img-fluid" src={require(`../../../images/icons/${Singleservice.image}.png`)} alt=""/>
                                    <h6 className='pt-5 pb-4'>{Singleservice.title}</h6>
                                    <p>{Singleservice.description}</p>
                                </div>
                            </Link>)
                    }
                </div>



            </div>
            
    );
};

export default Service; 