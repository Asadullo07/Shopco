import './Incart.css'
import tshirt from "../../../../assets/image 8 (3).png"
import red from "../../../../assets/image 8 (4).png"
import jeans from "../../../../assets/image 9 (2).png"
function Products({ image , text , size , color , price }) {
	return <div className='product-div'>
		<img className='product_img' src={image} alt='Product' />
		<div className='product_text'>
			<h3>{text}</h3>
			<p>{size}</p>
			<p>{color}</p>
			<h2>{price}</h2>
		</div>
		<div className="btns">
			<i className="fa-solid fa-trash"></i>
			<div className='count'>
				<button>-</button>
				<span>1</span>
				<button>+</button>
			</div>
		</div>
	</div>
}

const InCart = () => {
	return <div className='bordery'>
		<Products image={tshirt} text="Gradient Graphic T-shirt" size="Size: Large" color="Color: White" price="$145"/>
		<Products image={red} text="Checkered Shirt" size="Size: Medium" color="Color: Red" price="$180"/>
		<Products image={jeans} text="Skinny Fit Jeans" size="Size: Large" color="Color: Blue" price="$240"/>
	</div>
}

export default InCart
