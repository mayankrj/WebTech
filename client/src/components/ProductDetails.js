import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { DataConsumer } from './Context';

export default class ProductDetails extends Component{
    render() {
        return (
        <DataConsumer>
            {(value) => {
                const {id, title, src, description,content, price} = value.detailProduct;
                return (
                    <div className="container">
                            <div className="col-10 mx-auto text-center">
                                <h1>Your Product Details</h1>
                            </div>
                    
                    <div className="row">
                        <div className="col-4 mx-auto col-md-4">
                                <img src={src} className="img-fluid" />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 mx-auto col-md-4">
                                <h4>Product: {title}</h4>
                                <h5>Price: <span>INR </span>{price}</h5>
                                <p>Some information about this product: {description} </p>
                                <p>{content}</p>
                                
                        </div>
                        <div>
                            <Link to='/products'>Back to Product page</Link>
                        </div>
                        <button onClick={()=>{value.addToCart(id)}} value="addtocart">Add to cart</button>
                    </div>
                    </div>

                    
                )
            }}
        </DataConsumer>
        );
    }
}