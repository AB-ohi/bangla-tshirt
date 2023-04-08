import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h1>boroloxxxx</h1>
                  <p>thanx for west $</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length >= 2 ? 'blue' : 'red'}>order summary:{cart.length}</h2>
            <p className={`bold bordered ${cart.length===3 ? 'yellow': 'purple'}`}>something</p>
            {message}
            {
                cart.length > 2?
                <span className='orange'>5% discount</span>
                : <span>cudani gribs</span>
            }
            {
                cart.map(tshirt=> <p
                    key={tshirt._id}
                    >{tshirt.name}
                    <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button>
                    </p>)
            }
            {
                cart.length === 2 && <p>Double bonanza!!!</p>
            }
            {
                cart.length === 3 || <h3>Tinta to hoilo na!!</h3>
            }
        </div>
    );
};

export default Cart;



/**
 * CONDITIONAL RENDERING
 * 1. use if or if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed)
 * 
 */ 
