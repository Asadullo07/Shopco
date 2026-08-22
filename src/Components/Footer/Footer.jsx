import "./Footer.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { 
  FaCcVisa, 
  FaCcMastercard, 
  FaCcPaypal, 
  FaCcApplePay, 
  FaGooglePay 
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="footer_brand">
          <h1 className="footer_logo">SHOP.CO</h1>
          <p className="footer_desc">
            We have clothes that suits your style and which you're proud to wear. From women to men.
          </p>
          <div className="footer_socials">
            <a href="#" className="footer_social_link"><FaTwitter /></a>
            <a href="#" className="footer_social_link active"><FaFacebookF /></a>
            <a href="#" className="footer_social_link"><FaInstagram /></a>
            <a href="#" className="footer_social_link"><FaGithub /></a>
          </div>
        </div>

        <div className="footer_links_group">
          <div className="footer_col">
            <h4 className="footer_col_title">COMPANY</h4>
            <a href="#" className="footer_link">About</a>
            <a href="#" className="footer_link">Features</a>
            <a href="#" className="footer_link">Works</a>
            <a href="#" className="footer_link">Career</a>
          </div>

          <div className="footer_col">
            <h4 className="footer_col_title">HELP</h4>
            <a href="#" className="footer_link">Customer Support</a>
            <a href="#" className="footer_link">Delivery Details</a>
            <a href="#" className="footer_link">Terms & Conditions</a>
            <a href="#" className="footer_link">Privacy Policy</a>
          </div>

          <div className="footer_col">
            <h4 className="footer_col_title">FAQ</h4>
            <a href="#" className="footer_link">Account</a>
            <a href="#" className="footer_link">Manage Deliveries</a>
            <a href="#" className="footer_link">Orders</a>
            <a href="#" className="footer_link">Payments</a>
          </div>

          <div className="footer_col">
            <h4 className="footer_col_title">RESOURCES</h4>
            <a href="#" className="footer_link">Free eBooks</a>
            <a href="#" className="footer_link">Development Tutorial</a>
            <a href="#" className="footer_link">How to - Blog</a>
            <a href="#" className="footer_link">Youtube Playlist</a>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p className="footer_copy">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <div className="footer_cards">
          <span className="footer_card"><FaCcVisa color="#1A1F71" /></span>
          <span className="footer_card"><FaCcMastercard color="#EB001B" /></span>
          <span className="footer_card"><FaCcPaypal color="#003087" /></span>
          <span className="footer_card"><FaCcApplePay /></span>
          <span className="footer_card"><FaGooglePay /></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;