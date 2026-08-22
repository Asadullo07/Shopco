import { FiChevronDown, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import './header.css'

function Header() {
	return (
		<header className="site-header">
			<a className="brand" href="/" aria-label="SHOP.CO home">
				SHOP.CO
			</a>

			<nav className="main-nav" aria-label="Main navigation">
				<a href="#shop" className="shop-link">
					Shop <FiChevronDown />
				</a>
				<a href="#sale">On Sale</a>
				<a href="#new-arrivals">New Arrivals</a>
				<a href="#brands">Brands</a>
			</nav>

			<label className="search-box">
				<FiSearch />
				<input type="text" placeholder="Search for products..." aria-label="Search for products" />
			</label>

			<div className="header-actions">
				<button type="button" aria-label="Shopping cart">
					<FiShoppingCart />
				</button>
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
