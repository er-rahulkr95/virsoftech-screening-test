import React from 'react'
import "./CartSummary.css"
function CartSummary({cartItem}) {
  return (
    <div>
        <section className="tableContianer">
        <table className="cartTable" >
          <thead>
            <tr>
              <th>COIN</th>
              <th>value</th>
              <th>QTY</th>
              <th>Amount</th>
            </tr>
          </thead>
          {cartItem.length > 0 && (
            <>
              <tbody className="cartTableBody">
                {cartItem.map((items, index) => (
                    <tr key = {index}>
                        <td>{items.name}</td>
                        <td>{items.value}</td>
                        <td>{items.qty}</td>
                        <td>{items.amount}</td>
                    </tr> 
                ))}
              </tbody>
            </>
          )}
          </table>

          </section>
    </div>
  )
}

export default CartSummary