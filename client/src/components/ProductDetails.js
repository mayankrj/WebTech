import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataConsumer } from './Context';

export default class ProductDetails extends Component {
    render() {
        return (
            <DataConsumer>
                {(value) => {
                    const { id, title, src, description, content, price } = value.detailProduct;
                    return (
                        <div className="container">
                            <div className="col-10 mx-auto text-center">
                                <h1>Your Product Details</h1>
                                <br/>
                                <br/>
                            </div>

                            <div className="row">
                                <div className="col-4 mx-auto col-md-4">
                                    <img src={src} className="img-fluid" />

                                </div>
                                <div className="col-4 mx-auto col-md-4">
                                    <h4>Product: {title}</h4>
                                    <h5>Price: <span>INR </span>{price}</h5>
                                    <p>Some information about this product: {description} </p>
                                    <p>{content}</p>

                                </div>
                            </div>
                            <div className="row" >
                              
                                <div className="col-6" style={{ align: 'centre' }}>
                                <br/>
                                    <Link to='/products'>Back to Product page</Link>
                                </div>
                              
                                <div className="col-6">
                                    <span> <button class="btn btn-warning" onClick={() => { value.addToCart(id) }} value="addtocart">Add to cart</button></span>
                                </div>
                            </div>
                        </div>

                    )
                }}
            </DataConsumer>

        );
    }
}