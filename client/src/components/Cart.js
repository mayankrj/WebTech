import React, { Component } from "react";
import {DataConsumer} from './Context';
 
export default class Cart extends Component {
    render() {
      return (
        <div>
          <DataConsumer>
            {
              value=>{
                if(value.cart.length > 0){
                  return(
                    <div>
                      <div><h1>Your Cart</h1></div>
                      <div className="container-fluid text-center">
                        <div className="row">
                          <div className="col-2">
                            <strong>Product</strong>
                          </div>
                          <div className="col-2">
                            <strong>Product Name</strong>
                          </div>
                          <div className="col-2">
                            <strong>Price</strong>
                          </div>
                          <div className="col-2">
                            <strong>Quantity</strong>
                          </div>
                          <div className="col-2">
                            <strong>Amount</strong>
                          </div>
                          <div className="col-2">
                            <strong>Remove</strong>
                          </div>
                        </div>
                      </div>
                      {value.cart.map(cartItem =>{
                        return(
                          <div className="container-fluid text-center">
                            <div className="row">
                              <div className="col-2">
                                <img style={{width:"6rem",height:"4rem"}} src={cartItem.src} className="img-fluid" alt=""/>
                              </div>
                              <div className="col-2">
                                {cartItem.title}
                              </div>
                              <div className="col-2">
                                {cartItem.price}
                              </div>
                              <div className="col-2">
                                <button className="count" onClick={()=> {value.decreaseQty(cartItem.id)}}> - </button>
                                <span>{cartItem.count}</span>
                                <button className="count" onClick={()=> {value.increaseQty(cartItem.id)}}> + </button>
                              </div>
                              <div className="col-2">
                                <span>{cartItem.price * cartItem.count}</span>
                              </div>
                              <div className="col-2">
                                <button  onClick={()=> {value.removeProduct(cartItem.id)}}> Remove </button>
                              </div>
                            </div>
                          </div>
    
                        )
                      })}
                      <div>
                        <button value="Total" onClick={()=>{value.getTotalAmount()}}> Get Total Amount</button>
                      </div>
                      <h5 id='tp'></h5>
                    </div>
                  )
    
                }
                else{
                  return(
                    <div>
                      <h2>Your Cart is Empty</h2>
                    </div>
                  )
                }
              }
            }
          </DataConsumer>
        </div>
      );
    }
   }
    
   v