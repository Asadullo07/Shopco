import { Link } from 'react-router-dom'
import { FiChevronDown, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import './header.css'

function Header() {
	return (
		<header className="site-header">
			<Link className="brand" to="/" aria-label="SHOP.CO home">
				SHOP.CO
			</Link>

			<nav className="main-nav" aria-label="Main navigation">
				<Link to="/category" className="shop-link">
					Shop <FiChevronDown />
				</Link>
				<Link to="/category">On Sale</Link>
				<Link to="/category">New Arrivals</Link>
				<Link to="/category">Brands</Link>
			</nav>

			<label className="search-box">
				<FiSearch />
				<input type="text" placeholder="Search for products..." aria-label="Search for products" />
			</label>

			<div className="header-actions">
				<Link to="/cart" aria-label="Shopping cart">
					<FiShoppingCart />
				</Link>
				<button type="button" aria-label="Account">
					<FiUser />
				</button>
			</div>

			<button className="mobile-menu" type="button" aria-label="Open menu">
				<span />
				<span />
				<span />
			</button>
		</header>
	)
}

export default Header
