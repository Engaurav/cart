import React from "react";

class CartItem extends React.Component {
    constructor(){
        super();
        this.state= {
            price : 999,
            title : "Mobile Phone",
            qty : 2,
            img: ''
        }
        // this.testing();
    }


    // testing () {
    //     //set state acts like Synchronous in promise function
    //     const promise = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         },5000);
    //     })

    //     promise.then(() => {
    //         this.setState({qty : this.state.qty + 10});
    //         this.setState({qty : this.state.qty + 10});
    //         this.setState({qty : this.state.qty + 10});

    //         console.log('state', this.state);
    //     });
    // }
    increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log("This",this);
        // call set state form 1
        // this.setState({
        //     qty : this.state.qty + 1
        // });

         // call set state form 2 if require previous state to use again
         this.setState((prevState) => {
            return {
                qty : prevState.qty + 1
            }
         });
    }
    decreaseQuantity = () => {
         // call set state  if require previous state to use again
         if(this.state.qty == 0){
             return;
         }

         //this.setState is Asynchrnous
         this.setState((prevState) => {
            return {
                qty : prevState.qty - 1 
            }
         },()   => {
            // console.log(this.state);
         });
        //  console.log(this.state)
    }
    render () {
        const {price,qty,title} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25}}>{title}</div>
                    <div style={ {color: "#777"} }>Rs {price}</div>
                    <div style={ {fontSize: 15,color:"#777"} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Button*/}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/812/812853.png"
                        />
                    </div>
                </div>
            </div>
        );
    }
}


const style = {
    image : {
        height: 125,
        width : 125,
        borderRadius: 4,
        background : "#ccc"
    }
}


export default CartItem;