import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import logo from '../video/logo.jpg'

const Footer = () => {
    return ( 
    <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <img src={logo} className="logo" alt="" />
              <span className="logo_name">PackMyScrap</span>
            </div>
            <div className="media-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/packmyscrap/"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li><a href="#">Home</a></li>
              <li><Link to={'/contactus'}>Contact us</Link></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Get started</a></li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li><a href="#">Pick up </a></li>
              <li><a href="#">Web design</a></li>
              <li><a href="#">Logo design</a></li>
              <li><a href="#">Banner design</a></li>
            </ul>
            <ul className="box">
              <li className="link_name">Account</li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">My account</a></li>
              <li><a href="#">Prefrences</a></li>
              <li><a href="#">Purchase</a></li>
            </ul>
            {/* <ul className="box">
              <li className="link_name">Courses</li>
              <li><a href="#">HTML & CSS</a></li>
              <li><a href="#">JavaScript</a></li>
              <li><a href="#">Photography</a></li>
              <li><a href="#">Photoshop</a></li>
            </ul> */}
            <ul className="box input-box">
              <li className="link_name">Review</li>
              <li><input type="text" placeholder="whats your review?" /></li>
              <li><input type="button" value="Submit" /></li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">Copyright © 2024 <a href="#">Pack My Scrap</a>All rights reserved</span>
            <span className="policy_terms">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer> 
    );
}
 
export default Footer;