import React, { useEffect, useState } from 'react'
import bitcoinData from "../data/bitcoinData.json"
import CartLayout from '../components/CartLayout/CartLayout'
import "./Cart.css"
import CartSummary from '../components/CartSummary/CartSummary';
import TotalCartAmount from '../components/TotalCartAmount/TotalCartAmount';
function Cart() {
        const [cartItem, setCartItem] = useState([]);
        const [totalAmount, setTotalAmount] = useState(0);
        useEffect(()=>{

        })
        const addToCartHandler = (name,value,qty)=>{
            let amount = value*Number(qty)
            setCartItem(prev=> ([...prev,{name,value,qty, amount}]))
            setTotalAmount(prev=> prev+amount)
        }
        console.log(cartItem)
  return (
    <div className='cart'>
        <div className='cart-layout'>
        {bitcoinData.map((bitcoins,index)=>{
            return <CartLayout key={bitcoins.id} name={bitcoins.name} value={bitcoins.value} add = {addToCartHandler}/>
        })}
        </div>

        <div className='cartSummaryContainer'>
        <h2>My Cart</h2>
        <div>
        <CartSummary cartItem={cartItem}/>
        </div>
        <div>
            <TotalCartAmount total={totalAmount}/>
        </div>
        </div>
    </div>
  )
}

export default Cart