import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { DataConsumer } from './Context';

export default class ProductCard extends Component {

    render(){
        const { id, title, src, price} = this.props.product;
        return (
            <div>
                <DataConsumer>
                    {(value) => (
                        <div className="card">
                            <img src={src} alt={title} />
                            <h3>{title}</h3>
                            <span>Price: ${price}</span>
                            <Link to={`/products/${id}`}>
                                <button value="View details" onClick={() => {value.handleDetails(id)}}>View details</button>
                            </Link>

                        </div> 
                    )}
                </DataConsumer>   
                
            </div>
        );
    }
}



