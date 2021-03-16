import React, { Component } from 'react';
import { dataProducts } from '../productData';

export const DataContext = React.createContext();

class DataProvider extends Component {
    state = {
        products: dataProducts,
        detailProduct: null,
        cart: [],
        total: 0
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetails = (id) => {
        const product = this.getItem(id);
        this.setState({
            detailProduct: product
        })
    }

    addToCart = (id) => {
        const { products, cart } = this.state;
        const check = cart.every((item) => {
          return item.id !== id;
        });
        if (check) {
          const data = products.filter((product) => {
            return product.id === id;
          });
          this.setState({ cart: [...cart, ...data] });
        } else {
          alert("The product has been added to cart");
        }
    };
    
    decreaseQty = (id) => {
        const { cart } = this.state;
        cart.forEach((item) => {
          if (item.id === id) {
            item.count === 1 ? (item.count = 1) : (item.count -= 1);
          }
        });
        this.setState({ cart: cart });
    };
    
    increaseQty = (id) => {
        const { cart } = this.state;
        cart.forEach((item) => {
          if (item.id === id) {
            item.count += 1;
          }
        });
        this.setState({ cart: cart });
    };

    removeProduct = (id) => {
        if (window.confirm("Do you want to remove this product")) {
          const { cart } = this.state;
          cart.forEach((item, index) => {
            if (item.id === id) {
              cart.splice(index, 1);
            }
          });
          this.setState({ cart: cart });
        }
    };

    getTotalAmount = () => {
        const { cart } = this.state;
        let total = 0;
        cart.forEach((item) => {
          total += item.price * item.count;
        });
        this.setState({ total: total });
        document.getElementById("tp").innerHTML = "Total Amount: " +  this.state.total ;
    };
        
       
       

    render() {
        const {products,detailProduct,cart,total} = this.state;
        const {handleDetails,addToCart,decreaseQty,increaseQty,removeProduct,getTotalAmount} = this;
        return (
            <DataContext.Provider value={{
                ...this.state,handleDetails,addToCart,decreaseQty,increaseQty,removeProduct,getTotalAmount
                }}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

const DataConsumer = DataContext.Consumer;

export {DataProvider, DataConsumer};