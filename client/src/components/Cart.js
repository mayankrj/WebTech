import React, { Component } from "react";
import { DataConsumer } from './Context';
import cartimg from '../images/cart.jpg';

export default class Cart extends Component {
  render() {
    return (
      <div >
        <div id="stripe">
          <img id="cart" src={cartimg} alt="" />
        </div>
        <DataConsumer>
          {
            value => {
              if (value.cart.length > 0) {
                return (
                  <div>
                    <div><h1>Your Cart</h1>
                    <br/>
                    <br/></div>
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
                          <strong></strong>
                        </div>
                      </div>
                    </div>
                    {value.cart.map(cartItem => {
                      return (
                        <div className="container-fluid text-center">
                          <div className="row">
                            <div className="col-2">
                              <img style={{ width: "6rem", height: "8rem" }} src={cartItem.src} className="img-fluid" alt="" />
                            </div>
                            <div className="col-2">
                              {cartItem.title}
                            </div>
                            <div className="col-2">
                              {cartItem.price}
                            </div>
                            <div className="col-2">
                              <button className="qty-btn" onClick={() => { value.decreaseQty(cartItem.id) }}> - </button>
                              <span className="qty">{cartItem.count}</span>
                              <button className="qty-btn" onClick={() => { value.increaseQty(cartItem.id) }}> + </button>
                            </div>
                            <div className="col-2">
                              <span>{cartItem.price * cartItem.count}</span>
                            </div>
                            <div className="col-2">
                              <button className="remove-btn" onClick={() => { value.removeProduct(cartItem.id) }}> Remove </button>
                            </div>
                          </div>
                        </div>

                      )
                    })}
                    <div>
                      <button className="btn btn-success" value="Total" onClick={() => { value.getTotalAmount() }}> Get Total Amount</button>
                    </div>
                    <h5 id='tp'></h5>
                  </div>
                )

              }
              else {
                return (
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
