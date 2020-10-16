import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';

const NoMatch = () => {
    return (
        <div className="bannersection">
            <div>   
            <h3>The Page is not found! </h3>
            <h1>404 ERROR!!</h1>
            <h1 className="imoji text-center">👽</h1>
            <Link to="/" className="goHomeButton mt-5 btn btn-primary">Go Home</Link>
            </div>
        </div>
    );
};

export default NoMatch;