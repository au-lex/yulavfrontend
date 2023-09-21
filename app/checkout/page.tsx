import React from 'react'
import '../pages/style.css'
import Image from 'next/image'

export default function Checkout() {
  return (
  <div>
      <div className='checkout_container'>  
        <div className='check_bg'>
          <h3>Checkout</h3>
          <p>Cart type</p>

          <div>
            <img src="Images/Paypal.png" alt="Paypal_image" />
            <img src="Images/am_amex_06 1.png" alt="" />
            <img src="Images/download 1.png" alt="" />
          </div>

          <form action="text">
            <label htmlFor="">Card Number</label>
            <input type="text" placeholder='Enter Card number'/>

            <label htmlFor="">Name of card</label>
            <input type="text" placeholder='Name of card' />

            <label htmlFor="">Expiration Date MM/YY</label>
            <input type="text"  placeholder='Enter Expiration Date'/>

            <label htmlFor="">CVC</label>
            <input type="text" placeholder='Enter CVC' />

            <input type="checkbox" placeholder='save my information for faster checkout'/>

            <button>Submit</button>
          </form>

        </div>


        <div className='summary_bg'>
          <p>Summary</p>
          <div>
            <img src="/Images/confident-teacher-explaining-lesson-pupils 1.png" alt="" />
            <p>adipising elit, sed do eiusmod tempor</p>
            <p>Lorem ipsum dollar...</p>
            <p>$24.69</p>
          </div>

          <div>
            <img src="/Images/confident-teacher-explaining-lesson-pupils 1.png" alt="" />
            <p>adipising elit, sed do eiusmod tempor</p>
            <p>Lorem ipsum dollar...</p>
            <p>$24.69</p>
          </div>

          <div>
            <p>Subtotal</p>
            <p>$51.38</p>
          </div>
          <hr />

          <div>
            <p>Coupon Discount</p>
            <p>$51.38</p>
          </div>
          <hr />

          <div>
            <p>Tax</p>
            <p>$51.38</p>
          </div>
          <hr />

          <div>
            <p>Total</p>
            <p>$51.38</p>
          </div>
        </div>

      </div>

  </div>
  )
}
