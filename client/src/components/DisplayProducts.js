import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { DataConsumer } from './Context';
import ProductCard from './ProductCard';

class DisplayProducts extends Component {
    render(){
        return (
            <div className="container">
                <div>
                    <h3>Products page</h3>
                </div>
                <div className="row">
                    <DataConsumer>
                            {(value)=>{
                                return value.products.map(product => {
                                    return <ProductCard key={product.id} product={product} />
                                })
                            }}
                    </DataConsumer>
                </div>
            </div>
        );
    }
}

export default DisplayProducts ;