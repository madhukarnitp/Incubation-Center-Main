import React from 'react';
import { facebook_url, instagram_url, linkedin_url } from '../../constants/const';
import "./styles.css";
import { useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  const navigate=useNavigate();
  const handlelogin=()=>{
    navigate('/login')
  }
  return (
    <div>
       <footer className="footer" id="footer"  data-aos="fade"  data-aos-duration="300">
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>IC NITP</h4>
          <ul>
            <li>
              <Link to="/professor">Our Team</Link>
            </li>
            <li><span>Our Programs</span></li>
            <li><span>privacy policy</span></li>
            <li><span>Partnership Opportunities</span></li>
            <li onClick={handlelogin}><span>Admin Notice</span></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li><span>FAQ</span></li>
            <li><span>Success Stories</span></li>
            <li><span>Application Process</span></li>
            <li><span>Funding & Investment</span></li>
            <li><span>Startup Resources</span></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Know More</h4>
          <ul>
            <li><span>Alumni Network</span></li>
            <li><span>Innovation Lab</span></li>
            {/* <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li> */}
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <a href={facebook_url}><i className="fab fa-facebook-f">< FaFacebook /></i></a>
            <span><i className="fab fa-twitter">< FaTwitter /></i></span>
            <a href={instagram_url}><i className="fab fa-instagram">< FaInstagram/></i></a>
            <a href={linkedin_url}><i className="fab fa-linkedin-in">< RiLinkedinBoxFill/></i></a>
          </div>
        </div>
      </div>
    </div>
    <div className="footer_container2">
      <div className="footer-text">
        <p>Copyright &copy;
          {year} by IC NITP | All Rights Reserved.
        </p>
      </div>

      <div className="footer-iconTop">
        <button onClick={() => window.scrollTo(0, 0)}><i className='bx bx-up-arrow-alt'></i></button>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer;