import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor(){
        super();
        this.state= {
            products : [
            {
                price : 99,
                title : "Watch",
                qty : 10,
                img: '',
                id: 1
            },
            {
                price : 999,
                title : "Mobile Phone",
                qty : 4,
                img: '',
                id: 2
            },
            {
                price : 999,
                title : "Laptop",
                qty : 2,
                img: '',
                id: 3
            }
        ]}
        // this.testing();
    }

    handleIncreaseQuantity = (product) => {
        // console.log("Hey this is inc",product);
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        this.setState ({
            products:products
        })
    }
    handleDecreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        if(products[index].qty>0){
            products[index].qty -= 1;
        }
        this.setState ({
            products
        })
    }

    handleDeleteProduct = (id) =>{
        const { products } = this.state;
        const items = products.filter((item)=> item.id !== id);

        this.setState({
            products: items
        })
    }

    render () {
        
        const { products } = this.state; 
        //    const arr = [1,2,4,5];
        return(
            <div className="cart">
                    {/* {
                        arr.map((item)=>{
                            return item +5;
                        })
                    } */}
                    {/* Render a List Using Item */}

                {
                    products.map((product)=>{
                            return <CartItem 
                                product = { product}
                                key = {product.id}
                                onIncreaseQuantity = {this.handleIncreaseQuantity}
                                onDecreaseQuantity = {this.handleDecreaseQuantity}
                                onDeleteProduct = { this.handleDeleteProduct}
                            />
                    })
                }
                    
            </div>
                
        );
    }
}



export default Cart;