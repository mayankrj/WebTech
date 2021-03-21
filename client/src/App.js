

import React,{Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route ,Switch,Link,Redirect} from "react-router-dom";
import Registration from './components/Registration';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import DisplayProducts from './components/DisplayProducts';
import NavBar  from './components/NavBar';
import {DataProvider} from './components/Context';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

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

          
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about" component={About} />
              <Route path="/login" exact strict render={() => (
                this.state.isLoggedIn ? (<Redirect to='/products' />): ( <Login parentCallback={this.loginHandleCallback} />) 
              )} />
             
              <Route path="/products" exact strict render={() => (
                this.state.isLoggedIn ? (<DisplayProducts />) : (<Redirect to='/login' />)
              )} />
              <Route path='/register' component={Registration} />
              <Route path='/products/:id' component={ProductDetails} />
              <Route path='/cart' exact strict render={() => (
                this.state.isLoggedIn ? (<Cart />) : (<Redirect to='/login' />)
              )} /> 
            </Switch>
          
          
    </div>
    </DataProvider>
  );
  }
}

export default App;

