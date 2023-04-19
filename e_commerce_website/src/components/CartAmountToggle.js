import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const CartAmountToggle = ({amount, setIncrease, setDecrease}) => {
  return (
    <div className='cart-button'>
        <div className='amount-toggle'>
            <button onClick={() => setDecrease()}><FaMinus /></button>
            <button className='amount-style'>{amount}</button>
            <button onClick={() => setIncrease()}><FaPlus /></button>
        </div>
    </div> 
  )
}

export default CartAmountToggle