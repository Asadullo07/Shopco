import "./Cart.css"
import InCart from './CartComponents/InCart/InCart'
import Newsletter from './CartComponents/Newsletter/Newsletter'
import Order from './CartComponents/Order/Order'
import YourCart from './CartComponents/yourCart/YourCart'

const Cart = () => {
	return (
		<div>
			<YourCart/>
			<div className='df'>
				<InCart/>
			<Order/>
			</div>
			<Newsletter/>
		</div>
	)
}

export default Cart