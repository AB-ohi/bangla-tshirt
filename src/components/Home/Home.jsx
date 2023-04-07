import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';
const Home = () => {
    const tshirt = useLoaderData();
    const [cart, setCart] = useState([]);

    const handelAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists){
            toast('you have already added this t-shirt')
        }
        else{
            const newCart = [...cart, tshirt];
                setCart(newCart);
        }
    }


    const handleRemoveFromCart = id =>{
        const remaining = cart.filter(ts=>ts._id !==id)
        setCart(remaining);
    }
    return (
        <div className='main-container'>
            <div className='t-shirt-container'>
            {
                tshirt.map(Tshirt => <TShirt
                key={Tshirt._id}
                TShirt={Tshirt}
                handelAddToCart ={handelAddToCart}
                ></TShirt>)
            }
            </div>
            <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
        </div>
    );
};

export default Home;