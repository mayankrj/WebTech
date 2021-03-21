import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shop from '../images/home2.jpg';
import "../style.css" ;
class Home extends Component {
    state = {}
    render() {
        return (
            <div >
                        
            <img id="carthome" src={shop} alt="" />
            <div class="centered">
            <h1 class="display-4">NVM SHOP</h1>
            <p class="lead">Shopping Loves You!</p>
            <hr class="my-4" />
            
            <p class="lead">
            <Link to='/about' >  <a class="btn btn-info btn-lg" href="#" role="button">About</a></Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/login' ><a class="btn btn-warning btn-lg" href="#" role="button">Login / Signup</a></Link>
            </p></div>

       </div> 


        );

    }

}


export default Home;
