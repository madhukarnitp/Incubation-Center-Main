import React from 'react';
import { facebook_url, instagram_url, linkedin_url } from '../../constants/const';
import "./styles.css";
//import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaXTwitter, FaFacebook, FaLinkedin, FaArrowUp, FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  //const navigate=useNavigate();
  //const handlelogin=()=>{
  //  navigate('/login')
  //}
  return (
    <div>
      <footer className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col" data-aos="fade">
            <h4>IC NITP</h4>
            <ul>
              <li><Link to="/professor">Our Team</Link></li>
              <li><Link to="/">Our Programs</Link></li>
              <li><Link to="/">privacy policy</Link></li>
              <li><Link to="/">Partnership Opportunities</Link></li>
              <li><Link to="/login">Admin Notice</Link></li>
            </ul>
          </div>
          <div className="footer-col" data-aos="fade">
            <h4>get help</h4>
            <ul>
              <li><Link to="/">FAQ</Link></li>
              <li><Link to="/">Success Stories</Link></li>
              <li><Link to="/">Application Process</Link></li>
              <li><Link to="/">Funding & Investment</Link></li>
              <li><Link to="/">Startup Resources</Link></li>
            </ul>
          </div>
          <div className="footer-col" data-aos="fade">
            <h4>Know More</h4>
            <ul>
              <li><Link to="/">Alumni Network</Link></li>
              <li><Link to="/">Innovation Lab</Link></li>
              {/* <li><Link to="#">shoes</Link></li>
              <li><Link to="#">dress</Link></li> */}
            </ul>
          </div>
          <div className="footer-col" data-aos="fade">
            <h4>Contact Us</h4>
            <ul className="contact-info-list">
              <li><FaLocationDot className="contact-icon"/> <span>Incubation Center, NIT Patna, Ashok Rajpath Patna, Bihar- 800005</span></li>
              <li className="email-info-item"><FaEnvelope className="contact-icon" style={{marginTop: '0'}}/> <a href="mailto:Incubation@nitp.ac.in" className="email-link">Incubation@nitp.ac.in</a></li>
            </ul>
          </div>

          <div className="footer-col" data-aos="fade">
            <h4>Follow Us</h4>
            <div className="social-links">
              <Link to={facebook_url} target="_blank" className="social-icon facebook"> <FaFacebook fill='#1877f2' size={32} /> </Link>
              <Link to="/" className="social-icon twitter" > <FaXTwitter fill='#ffffff' size={32} /> </Link>
              <Link to={instagram_url} target="_blank" className="social-icon instagram" > <FaInstagram fill='#e1306c' size={32} /> </Link>
              <Link to={linkedin_url} target="_blank" className="social-icon linkedin" > <FaLinkedin fill='#0077b5' size={32} /> </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_container2" data-aos="fade">
        <div className="footer-text">
          <p>Copyright &copy; {year} by IC NITP | All Rights Reserved. </p>
        </div>

        <div className="footer-iconTop">
          <button
            onClick={() => window.scrollTo({
              top: 0,
              behavior: "smooth"
            })}
            className="scroll-top-btn"
          >
          <FaArrowUp size={28} fill='white'/>
          </button>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer;