import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {}
    render() {
        return (
            <div class="container">
                <div class="col my-5">
                    <div class="jumbotron">
                        <h1 class="display-4">NVM SHOP</h1>
                        <p class="lead">Tumhari Dukan.</p>
                        <hr class="my-4" />
                        <p>Mast raho masti me aag lage basti me.</p>
                        <p class="lead">
                        <Link to='/about' >  <a class="btn btn-info btn-lg" href="#" role="button">About</a></Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/login' ><a class="btn btn-warning btn-lg" href="#" role="button">Login / Signup</a></Link>
                        </p>

                    </div>
                </div>
            </div>

        );

    }

}


export default Home;
