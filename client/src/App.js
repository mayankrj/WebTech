
import Axios from 'axios';
import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from './components/Registration';
import Login from './components/Login';
import {Home,About,Login,DisplayProducts,ProductDetails,NavBar,Cart} from './components';
import {DataProvider} from './components/Context';

class App extends Component{
  
  state = {
    isLoggedIn : false
  }

  loginHandleCallback = (childData) => {
    this.setState({ isLoggedIn: childData })
  }

  render() {
  return (
    <DataProvider>
    <div className="App">
          
          <NavBar />

          <input type="button" value={this.state.isLoggedIn ? 'log out' : 'log in'} onClick={this.loginHandle} />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about" component={About} />
              <Route path="/login">
                <Login parentCallback={this.loginHandleCallback} />
              </Route>
              <Route path="/products" exact strict render={() => (
                this.state.isLoggedIn ? (<DisplayProducts />) : (<Redirect to='/login' />)
              )} />
              <Route path='/register' component={Registration} />
              <Route path='/products/:id' component={ProductDetails} />
              <Route path='/cart' component={Cart} exact strict render={() => (
                this.state.isLoggedIn ? (<Cart />) : (<Redirect to='/login' />)
              )} /> 
            </Switch>
          
          
    </div>
    </DataProvider>
  );
  }
}

export default App;

