import './Home.css'
import rectangle from '../../assets/Rectangle2.png'
import frame from '../../assets/Frame32.png'
import image from '../../assets/image8.png'
import image2 from '../../assets/image9.png'
import image3 from '../../assets/image10.png'
import image4 from '../../assets/image7.png'
import image5 from '../../assets/image81.png'
import image6 from '../../assets/image91.png'
import image7 from '../../assets/Frame38.png'	
import image8 from '../../assets/image11.png'
import image9 from '../../assets/image13.png'
import image10 from '../../assets/image14.png'
import image11 from '../../assets/image15.png'
function Home() {
	return (
		<div className="home-page">
			<section className="hero-section">
				<div className="hero-copy">
					<h1>FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE</h1>
					<p>Browse through our diverse range of meticulously crafted garments, designed<br className="desktop-only" /> to bring out your individuality and cater to your sense of style.</p>
					<a className="shop-button" href="#new-arrivals">Shop Now</a>
					<div className="stats">
						<div><strong>200+</strong><span>International Brands</span></div>
						<div><strong>2,000+</strong><span>High-Quality Products</span></div>
						<div><strong>30,000+</strong><span>Happy Customers</span></div>
					</div>
				</div>
				<div className="hero-image">
					<img src={rectangle} alt="Models wearing modern clothing" />
				</div>
			</section>

			<section className="brand-strip" aria-label="Featured brands">
				<span>VERSACE</span><span>ZARA</span><span>GUCCI</span><span>PRADA</span><span>Calvin Klein</span>
			</section>

			<section className="products-section" id="new-arrivals">
				<h2>NEW ARRIVALS</h2>
				<div className="product-grid">
					<div className="product-card">
						<div className="product-image">
							<img src={frame} alt="T-shirt with Tape Details" />
						</div>
						<h3>T-shirt with Tape Details</h3>
						<p className="rating"><span>★★★★★</span> <small>4.5/5</small></p>
						<p className="price">$120</p>
					</div>
					<div className="product-card">
						<div className="product-image">
							<img src={image} alt="Skinny Fit Jeans" />
						</div>
						<h3>Skinny Fit Jeans</h3>
						<p className="rating"><span>★★★★<i>★</i></span> <small>3.5/5</small></p>
						<p className="price">$240</p>
					</div>
					<div className="product-card">
						<div className="product-image">
							<img src={image2} alt="Checkered Shirt" />
						</div>
						<h3>Checkered Shirt</h3>
						<p className="rating"><span>★★★★★</span> <small>4.5/5</small></p>
						<p className="price">$180</p>
					</div>
					<div className="product-card">
						<div className="product-image">
							<img src={image3} alt="Sleeve Striped T-shirt" />
						</div>
						<h3>Sleeve Striped T-shirt</h3>
						<p className="rating"><span>★★★★★</span> <small>4.5/5</small></p>
						<p className="price">$130</p>
					</div>
				</div>
				<a className="view-button" href="#top">View All</a>
			</section>

			<section className="products-section">
				<h2>TOP SELLING</h2>
				<div className="product-grid">
					<div className="product-card">
						<div className="product-image">
							<img src={image4} alt="Vertical Striped Shirt" />
						</div>
						<h3>Vertical Striped Shirt</h3>
						<p className="rating"><span>★★★★★</span> <small>5.0/5</small></p>
						<p className="price">$212</p>
					</div>
					<div className="product-card">
						<div className="product-image">
							<img src={image5} alt="Courage Graphic T-shirt" />
						</div>
						<h3>Courage Graphic T-shirt</h3>
						<p className="rating"><span>★★★★<i>★</i></span> <small>4.0/5</small></p>
						<p className="price">$145</p>
					</div>
					<div className="product-card">
						<div className="product-image">
							<img src={image6} alt="Loose Fit Bermuda Shorts" />
						</div>
						<h3>Loose Fit Bermuda Shorts</h3>
						<p className="rating"><span>★★★<i>★★</i></span> <small>3.0/5</small></p>
						<p className="price">$80</p>
					</div>
					<div className="product-card">
						<div className="product-image">
							<img src={image7} alt="Faded Skinny Jeans" />
						</div>
						<h3>Faded Skinny Jeans</h3>
						<p className="rating"><span>★★★★★</span> <small>4.5/5</small></p>
						<p className="price">$210</p>
					</div>
				</div>
				<a className="view-button" href="#top">View All</a>
			</section>

			<section className="style-section">
				<h2>BROWSE BY DRESS STYLE</h2>
				<div className="style-grid">
					<a href="#casual"><span>Casual</span><img src={image8} alt="Casual style" /></a>
					<a href="#formal"><span>Formal</span><img src={image9} alt="Formal style" /></a>
					<a href="#party"><span>Party</span><img src={image10} alt="Party style" /></a>
					<a href="#gym"><span>Gym</span><img src={image11} alt="Gym style" /></a>
				</div>
			</section>

			<section className="reviews-section">
				<div className="section-heading"><h2>OUR HAPPY CUSTOMERS</h2><div className="review-arrows">← →</div></div>
				<div className="reviews-grid">
					<article className="review-card"><div className="review-stars">★★★★★</div><h3>Sarah M. <span>✓</span></h3><p>“I’m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.”</p></article>
					<article className="review-card"><div className="review-stars">★★★★★</div><h3>Alex K. <span>✓</span></h3><p>“Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p></article>
					<article className="review-card"><div className="review-stars">★★★★★</div><h3>James L. <span>✓</span></h3><p>“As someone who’s always on the lookout for unique fashion pieces, I’m thrilled to have found Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p></article>
				</div>
			</section>
		</div>
	)
}

export default Home
