import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Link,BrowserRouter as Router } from 'react-router-dom';
import { userContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import './Navbar.css';
import Navbars from 'react-bootstrap/Navbar'

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext)


    return (
        <div  className="row no-padding">



            {/* raw   */}
            <div className="col-2 padding-0 ">
                <Link to="/" className="img">
                    <img src={logo} className="img-fluid logo"  alt="logo"/>
                    
                </Link>
            </div>
                <div className="col-8 ml-auto  padding-0 ">
                    
                    <Navbars expand="lg">
                    
                    <Navbars.Toggle aria-controls="basic-navbar-nav" />
                    <Navbars.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link className="nev-item mx-2" href="#home">Home</Nav.Link>
                        <Nav.Link className="nev-item mx-2" href="#our-portfolio">Our portfolio</Nav.Link>
                        <Nav.Link className="nev-item mx-2" href="#our-Learn">Our Learn</Nav.Link>
                        <Nav.Link className="nev-item mx-2" href="#Contact Us">Contact Us</Nav.Link>
                        <Link className="  btn btn-success" to="/login" >LogIn</Link>
                        <Link className="ml-3 btn btn-success" to="/admin-deshboard" >Admin</Link>
                        </Nav>
                    </Navbars.Collapse>
                    </Navbars>
                    
                      
                </div>
            
        </div>
    );
};

export default Navbar;