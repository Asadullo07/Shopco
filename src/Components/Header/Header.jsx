import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
	return (
		<header className='header'>
			<Link to='/' className='logo'>
				SHOP.CO
			</Link>

			<nav className='nav-links'>
				<Link to='/'>Home</Link>
				<Link to='/category'>Category</Link>
				<Link to='/cart'>Cart</Link>
			</nav>
		</header>
	)
}

export default Header
