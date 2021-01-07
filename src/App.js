import './App.css';
import Header from './Header';
import React, {useEffect} from 'react';
import Home from './home/Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './checkout/Checkout';
import Login from './authentication/Login';
import { auth } from './configuration/firebase';
import { useStateValue } from './StateProvider/StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser)

      if (authUser) {
        // the user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM convention
    <Router>
      <div className="app">
        <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
            <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
              <Header />
              <h1>I am the payment</h1>
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
