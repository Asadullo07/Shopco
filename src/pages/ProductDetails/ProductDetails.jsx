

		import { FaRegStar, FaRegStarHalf, FaCircleCheck }from "react-icons/fa6";
import { FaStar }from "react-icons/fa6";
import { FiMinus, FiPlus, FiCheck, FiChevronRight, FiSliders, FiChevronDown, FiMoreHorizontal } from "react-icons/fi";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import "./ProductDetailes.css";

const ProductDetails = () => {
  return (
    <div>
      <div className="product-page">
        <div className="breadcrumb">
          <span>Home</span>
          <FiChevronRight />
          <span>Shop</span>
          <FiChevronRight />
          <span>Men</span>
          <FiChevronRight />
          <b>T-shirts</b>
        </div>

        <div className="product-content">
          <div className="product-images">
            <div className="thumbnails">
              <div className="thumbnail active">
                <img src={img1} alt="" />
              </div>

              <div className="thumbnail">
                <img src={img2} alt="" />
              </div>

              <div className="thumbnail">
                <img src={img3} alt="" />
              </div>
            </div>

            <div className="main-image">
              <img src={img1} alt="" />
            </div>
          </div>

          <div className="product-info">
            <h1>ONE LIFE GRAPHIC T-SHIRT</h1>

            <div className="rating">
              <div className="stars">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStarHalf />
              </div>

              <span>4.5/5</span>
            </div>

            <div className="price">
              <strong>$260</strong>
              <del>$300</del>
              <span>-40%</span>
            </div>

            <p className="description">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>

            <div className="line"></div>

            <div className="section">
              <p>Select Colors</p>

              <div className="colors">
                <button className="color brown">
                  <FiCheck />
                </button>

                <button className="color green"></button>

                <button className="color blue"></button>
              </div>
            </div>

            <div className="line"></div>

            <div className="section">
              <p>Choose Size</p>

              <div className="sizes">
                <button>Small</button>
                <button>Medium</button>
                <button className="selected">Large</button>
                <button>X-Large</button>
              </div>
            </div>

            <div className="line"></div>

            <div className="bottom">
              <div className="quantity">
                <button>
                  <FiMinus />
                </button>

                <span>1</span>

                <button>
                  <FiPlus />
                </button>
              </div>

              <button className="cart">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews-page">
        <div className="review-tabs">
          <div>Product Details</div>
          <div className="active">Rating & Reviews</div>
          <div>FAQs</div>
        </div>

        <div className="reviews-top">
          <h2>
            All Reviews <span>(451)</span>
          </h2>

          <div className="review-actions">
            <button className="filter">
              <FiSliders />
            </button>

            <button className="latest">
              Latest
              <FiChevronDown />
            </button>

            <button className="write-review">
              Write a Review
            </button>
          </div>
        </div>

        <div className="reviews-list">
          <div className="review-card">
            <div className="review-header">
              <div className="review-stars">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStarHalf />
              </div>

              <FiMoreHorizontal className="more" />
            </div>

            <div className="review-name">
              Samantha D.
              <FaCircleCheck />
            </div>

            <p>
              "I absolutely love this t-shirt! The design is unique and the
              fabric feels so comfortable. As a fellow designer, I appreciate
              the attention to detail. It's become my favorite go-to shirt."
            </p>

            <div className="review-date">
              Posted on August 14, 2023
            </div>
          </div>

          <div className="review-card">
            <div className="review-header">
              <div className="review-stars">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>

              <FiMoreHorizontal className="more" />
            </div>

            <div className="review-name">
              Alex M.
              <FaCircleCheck />
            </div>

            <p>
              "The t-shirt exceeded my expectations! The colors are vibrant
              and the print quality is top-notch. Being a UI/UX designer
              myself, I'm quite picky about aesthetics, and this t-shirt
              definitely gets a thumbs up from me."
            </p>

            <div className="review-date">
              Posted on August 15, 2023
            </div>
          </div>

          <div className="review-card">
            <div className="review-header">
              <div className="review-stars">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStarHalf />
              </div>

              <FiMoreHorizontal className="more" />
            </div>

            <div className="review-name">
              Ethan R.
              <FaCircleCheck />
            </div>

            <p>
              "This t-shirt is a must-have for anyone who appreciates good
              design. The minimalist yet stylish pattern caught my eye, and
              the fit is perfect. I can see the designer's touch in every
              aspect of this shirt."
            </p>

            <div className="review-date">
              Posted on August 16, 2023
            </div>
          </div>

          <div className="review-card">
            <div className="review-header">
              <div className="review-stars">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>

              <FiMoreHorizontal className="more" />
            </div>

            <div className="review-name">
              Olivia P.
              <FaCircleCheck />
            </div>

            <p>
              "As a UI/UX enthusiast, I value simplicity and functionality.
              This t-shirt not only represents those principles but also
              feels great to wear. It's evident that the designer poured
              their creativity into making this t-shirt stand out."
            </p>

            <div className="review-date">
              Posted on August 17, 2023
            </div>
          </div>

          <div className="review-card">
            <div className="review-header">
              <div className="review-stars">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>

              <FiMoreHorizontal className="more" />
            </div>

            <div className="review-name">
              Liam K.
              <FaCircleCheck />
            </div>

            <p>
              "This t-shirt is a fusion of comfort and creativity. The fabric
              is soft, and the design speaks volumes about the designer's
              skill. It's like wearing a piece of art that reflects my
              passion for both design and fashion."
            </p>

            <div className="review-date">
              Posted on August 18, 2023
            </div>
          </div>

          <div className="review-card">
            <div className="review-header">
              <div className="review-stars">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStarHalf />
              </div>

              <FiMoreHorizontal className="more" />
            </div>

            <div className="review-name">
              Ava H.
              <FaCircleCheck />
            </div>

            <p>
              "I'm not just wearing a t-shirt; I'm wearing a piece of design
              philosophy. The intricate details and thoughtful layout of the
              design make this shirt a conversation starter."
            </p>

            <div className="review-date">
              Posted on August 19, 2023
            </div>
          </div>
        </div>

        <button className="load-more">
          Load More Reviews
        </button>
      </div>

 <div className="also-page">
      <h2>YOU MIGHT ALSO LIKE</h2>

      <div className="also-products">
        <div className="also-card">
          <div className="also-img">
            <img src={img1} alt="" />
          </div>

          <h3>Polo with Contrast Trims</h3>

          <div className="also-rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span>4.0/5</span>
          </div>

          <div className="also-price">
            <strong>$212</strong>
            <del>$242</del>
            <span>-20%</span>
          </div>
        </div>

        <div className="also-card">
          <div className="also-img">
            <img src={img2} alt="" />
          </div>

          <h3>Gradient Graphic T-shirt</h3>

          <div className="also-rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span>3.5/5</span>
          </div>

          <div className="also-price">
            <strong>$145</strong>
          </div>
        </div>

        <div className="also-card">
          <div className="also-img">
            <img src={img3} alt="" />
          </div>

          <h3>Polo with Tipping Details</h3>

          <div className="also-rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span>4.5/5</span>
          </div>

          <div className="also-price">
            <strong>$180</strong>
          </div>
        </div>

        <div className="also-card">
          <div className="also-img">
            <img src={img4} alt="" />
          </div>

          <h3>Black Striped T-shirt</h3>

          <div className="also-rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span>5.0/5</span>
          </div>

          <div className="also-price">
            <strong>$120</strong>
            <del>$150</del>
            <span>-30%</span>
          </div>
        </div>
      </div>

      <div className="newsletter">
        <div className="newsletter-title">
          STAY UPTO DATE ABOUT
          <br />
          OUR LATEST OFFERS
        </div>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button>Subscribe to Newsletter</button>
        </div>
      </div>
    </div>
    </div>
  
	)
}

export default ProductDetails