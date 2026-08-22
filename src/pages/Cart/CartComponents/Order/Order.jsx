import "./Order.css"
const Order = () => {
	return (
		<div className='order'>
			<h2>Order Summary</h2>
			<div className="sum-title">
				<p>Subtotal</p>
				<p>Discount (-20%)</p>
				<p>Delivery Fee</p>
				<span>Total</span>
			</div>
			<div className="sum-price">
				<p>$565</p>
				<p>$113</p>
				<p>$15</p>
				<p>$467</p>
			</div>
			<div className="promo">
				<input type="text" placeholder='Add promo code' />	
				<button>Apply</button>
			</div>
			<button className="checkout-btn">
				Go to Checkout
			</button>
		</div>
	)
}

export default Order