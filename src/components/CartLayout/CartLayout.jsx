import React, { useState } from 'react'
import "./CartLayout.css"
function CartLayout({name,value, add}) {
    const [qty, setQty] = useState("")
    const qtyHandler = (e) =>{
        setQty(e.target.value)
    }
    return (
    <section className='cartItem'>
        <div className='cartDetail'>
            <p>{name}</p>
            <p>${value}</p>
        </div>
        <div>
            <input className='qty' type='number' value={qty} onChange={(e)=>qtyHandler(e)} required min="0" placeholder='Enter Qty'/>
        </div>
        <div>
            <button className='addToCartButton' onClick={()=>{add(name,value,qty); setQty("")}}>ADD</button>
        </div>
    </section>
  )
}

export default CartLayout