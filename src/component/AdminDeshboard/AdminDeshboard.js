import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
import AllService from './AllService/AllService';
import AddService from './AddService/AddService';
import MakeAdmin from './MakeAdmin/MakeAdmin';

const AdminDeshboard = () => {
    return (
        <div>
            	<h1>Admin deshboard</h1>
                <Router>
                <div className="container">
                    
                    <div className="row">
                    <div className="col-md-2 pt-5  border-right h-100">
                        <nav>
                        <ul className="list-unstyled">
                            <li>
                            <Link className="list-name" to="/all-service"> <span className='mr-2'>
        <FontAwesomeIcon icon={faShoppingCart} /> </span> All Service</Link>
                            </li>
                            <li>
                            <Link className="list-name" to="/addService"> <span className='mr-2'>
        <FontAwesomeIcon icon={faShoppingBasket} /> </span> AddService</Link>
                            </li>
                            <li>
                            <Link className="list-name" to="/makeAdmin"> <span className='mr-2'>
        <FontAwesomeIcon icon={faKeyboard} /> </span> MakeAdmin</Link>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    <div className="col-md-8  pt-5  details">
                        
                            <Switch>
                                <Route path="/admin-deshboard">
                                    <AllService/>
                                </Route>
                                <Route path="/addService">
                                    <AddService/>
                                </Route>
                                <Route path="/all-service">
                                    <AllService/>
                                </Route>
                                <Route path="/makeAdmin">
                                    <MakeAdmin />
                                </Route>
                            </Switch>
                    </div>
                    </div>
                </div>
        
            </Router>
        </div>
    );
};

export default AdminDeshboard;