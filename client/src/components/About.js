import React,{Component} from 'react';
import "../style.css";
import layout from '../images/layout.jpg';
import logo from '../images/image.jpg';
import neha from '../images/neha.jpeg';
import mayank from '../images/mayank.jpeg';
//import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class About extends Component {
    render(){
        return (
            <div >
                
                <div id="stripe">
                    <img id ="cart" src={layout} alt="" />
                </div>
                <h1>About Us</h1>
                <br/>
                <h3> HI, WE ARE NVM!!</h3>
                <p> <font size="5">Our NVM Shop is an E-commerce application built with a vision of providing an elegant and easy to access online portal<br/> 
                    through which users can buy their desired products from a wide range of products of different brands. </font> </p>
                <br/>
          
                <br/>
 
                 <div className="row">
                <div className="col-4" align="center">
                    <div className="card" style={{width : '200px' ,height :'250px'}}>
                        <img className="cardimg" src={neha} alt="Card image cap" />  
                    <div className="card-body">
                        <p className="card-text text-white">Niharika Garg</p>
                    </div>
                    </div>   
                </div> 
                
                
                <div className="col-4" align="center">
                <div className="card" style={{width : '200px' ,height :'250px'}}>
                        <img className="card-img-top" src={logo} alt="Card image cap" />  
                    <div className="card-body">
                        <p className="card-text text-white">Vani Singhal</p>
                    </div>
                </div>  
                </div>  
                <div className="col-4" align="center">
                <div className="card" style={{width : '200px' ,height :'250px'}}>
                        <img className="cardimg" src={mayank} alt="Card image cap" />  
                    <div className="card-body">
                        <p className="card-text text-white">Mayank Raj</p>
                    </div>
                </div>    
               
            </div>
            </div>
            </div>

        );
    }
}

export default About;