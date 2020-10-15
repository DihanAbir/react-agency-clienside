import React from 'react';
import { Link} from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import './Login.css';


const Login = (props) => {
    const {handlerGoogleAuth} = props; 

    



    return (
        
        <div className="login-container container">
            <div className="main-container text-center">
                <div className="logo">
                    <img className="img-fluid" src={logo} alt=""/>
                </div>
                <br></br>
                <form className="form"  action="">
                    <h5>LOGIN WITH</h5>
                    
                    <p>Don't have a account? <Link onClick={handlerGoogleAuth}>Create a new account</Link> </p>
                </form>
                    <button className="mt-5 googlebtn"   onClick={handlerGoogleAuth}>Continue with Google</button>
            </div>

            <Link to="/user-deshboard" className="btn btn-danger">go</Link>
            <Link to="/" className="btn btn-danger">home</Link>
            
        </div>
    );
};


export default Login;