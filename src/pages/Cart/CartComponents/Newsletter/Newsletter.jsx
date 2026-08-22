import { FaRegEnvelope } from "react-icons/fa";
import "./Newsletter.css"
const Newsletter = () => {
	return (
		<div className="newsletter_container">
  <h1 className="newsletter_h1">
    STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
  </h1>

  <div className="newsletter_form">
    <div className="newsletter_in">
      <FaRegEnvelope className="newsletter_icon" />
      <input 
        type="email" 
        placeholder="Enter your email address" 
        className="newsletter_input" 
      />
    </div>

    <button className="newsletter_btn">
      Subscribe to Newsletter
    </button>
  </div>
</div>
	)
}

export default Newsletter