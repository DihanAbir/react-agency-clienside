import React, { createContext, useState } from 'react';
import './App.css';
import LandingPage from './component/Home/LandingPage/LandingPage';
import Login from './component/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
import ClientDeshboard from './component/ClientDeshboard/ClientDeshboard';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './component/Login/firebase.config';
import Navbar from './component/Home/Navbar/Navbar';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';


export const userContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [serviceState, setServiceState] = useState({});
  

  //redirect hooks
  // const history = useHistory();
  // const location = useLocation();

  // const { from } = location.state || { from: { pathname: "/" } };
  

  //frebase section 
  if(firebase.apps.length === 0){

    firebase.initializeApp(firebaseConfig);
  }
  
  

  const handlerGoogleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        
        .then(function(result) {
            const user = result.user;
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {name: displayName, photoURL, email}
            console.log(signedInUser)
            setLoggedInUser(signedInUser)
            // history.replace(from);

          }).catch(function(error) {
            console.log(error);
          });
  }
  
 
  


  return (
    <userContext.Provider  value={[serviceState, setServiceState, loggedInUser, setLoggedInUser]}>
        <div>
          {
            loggedInUser.name ?
             <div className='identity d-flex'>
              <p>{loggedInUser.name}</p> <div><img className="img-fluid profilepic" src={loggedInUser.photoURL} alt=""/></div>
            </div>: ""
          }
        </div>
        <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route exact path="/login">
            <Login handlerGoogleAuth = {handlerGoogleAuth}></Login>
          </Route>
          {/* <Route exact path="/user-Deshboard">
            <ClientDeshboard></ClientDeshboard>
          </Route> */}
         
          <PrivateRoute exact path="/user-Deshboard">
            <ClientDeshboard></ClientDeshboard>
          </PrivateRoute>
        </Switch>


      </Router>

    </userContext.Provider>
    
  );
}

export default App;
