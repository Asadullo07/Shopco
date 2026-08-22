import { Link } from 'react-router-dom'
import "./Yourcode.css"
const YourCart = () => {
	return (
		<div>
			<ul>
				<li className='lil'>
					<Link to='/' className='HomeLink'>Home / </Link>
					<Link to="." className='This'>  Cart</Link>
				</li>
			</ul>
			<h1 className='cart-h1'>YOUR CART</h1>
		</div>
	)
}

export default YourCart