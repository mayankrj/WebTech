import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { DataConsumer } from './Context';
import ProductCard from './ProductCard';

class DisplayProducts extends Component {
    render(){
        return (
            <div className="container">
                <div>
                    <br/>
                    <h1>Products Page</h1>
                    <br/>
                    <br/>
                </div>
                <div className="row">
                    <DataConsumer>
                            {(value)=>{
                                return value.products.map(product => {
                                    return <div className="col-3 my-3"><ProductCard key={product.id} product={product} /></div>
                                })
                            }}
                    </DataConsumer>
                </div>
            </div>
        );
    }
}

export default DisplayProducts ;