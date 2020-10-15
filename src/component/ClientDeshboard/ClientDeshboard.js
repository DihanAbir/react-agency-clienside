import React from "react";
import Navbar from '../Home/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Order from "./Order/Order";
import Review from "./Review/Review";
import ServiceList from "./ServiceList/ServiceList";
import './ClientDeshboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'

const ClientDeshboard = () => {
  return (
        <div>
            <Navbar></Navbar>
            <Router>
                <div className="container">
                    
                    <div className="row">
                    <div className="col-md-2 pt-5  border-right h-100">
                        <nav>
                        <ul className="list-unstyled">
                            <li>
                            <Link className="list-name" to="/order"> <span className='mr-2'>
        <FontAwesomeIcon icon={faShoppingCart} /> </span> Order</Link>
                            </li>
                            <li>
                            <Link className="list-name" to="/service-list"> <span className='mr-2'>
        <FontAwesomeIcon icon={faShoppingBasket} /> </span> Service List</Link>
                            </li>
                            <li>
                            <Link className="list-name" to="/review"> <span className='mr-2'>
        <FontAwesomeIcon icon={faKeyboard} /> </span> Review</Link>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    <div className="col-md-8  pt-5  details">
                        
                            <Switch>
                                <Route path="/user-deshboard">
                                    <Order />
                                </Route>
                                <Route path="/order">
                                    <Order />
                                </Route>
                                <Route path="/service-list">
                                    <ServiceList />
                                </Route>
                                <Route path="/review">
                                    <Review />
                                </Route>
                            </Switch>
                    </div>
                    </div>
                </div>
        
            </Router>
        </div>
    
  );
};

export default ClientDeshboard;
