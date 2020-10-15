import React, { useContext } from 'react';
import { Link,BrowserRouter as Router } from 'react-router-dom';
import { userContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import './Navbar.css';

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext)


    return (
        <div  className="row no-padding">
            <div className="col-md-2 padding-0 ">
                <Link to="/" className="img">
                    <img src={logo} className="img-fluid logo"  alt="logo"/>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nesciunt, dignissimos pariatur repellat quod esse</p> */}
                </Link>
            </div>
                <div className="col-md-6 ml-auto  padding-0 ">
                    <ul className="d-flex list-unstyled ">
                        <li className= "p-3"> <Link className="nev-item" to="/home" activeClassName="selected">Home</Link> </li>
                        <li className= "p-3"> <Link className="nev-item" to="/portfolio" >Our portfolio</Link> </li>
                        <li className= "p-3"> <Link className="nev-item" to="/learn" >Our Learn</Link> </li>
                        <li className= "p-3"> <Link className="nev-item" to="/contact-us" >Contact Us</Link> </li>
                        {
                            loggedInUser.name ? <li className= "p-3"> <Link >{loggedInUser.name}</Link> </li> :<li className= "p-3 signinButton"> <Link className="btn btn-success" to="/login" >LogIn</Link> </li>
                        }
                        
                        
                    </ul>
                </div>
            
        </div>
    );
};

export default Navbar;