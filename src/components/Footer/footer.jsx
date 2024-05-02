import React from "react";
import img23 from "../../assets/footerimg.png";
import img24 from "../../assets/Alphagnitologo.png";
import "../Footer/footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Footer=()=> {
  return (
    <div>
      <div className="fimg">
        <img src={img23} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 alphag">
            <img src={img24} alt="" />
            <p>
              Empowering Security, Extending Possibilities: Your Data, Our
              Priority!
            </p>
            <span>Copyright © 2023 Alphagnito. All Rights Reserved.</span>
            <h3>FOLLOW US</h3>
            <a href="#">
            <h6 className="b1">
              <FaFacebookF className="fb" />
            </h6>
            </a>
           
            <a href="#">
            <h6 className="b2">
              <FaTwitter className="twit" />
            </h6>
            </a>
            
            <a href="#">
            <h6 className="b3">
              <FaGoogle className="googl" />
            </h6>
            </a>
           
            <a href="#">
            <h6 className="b4">
              <FaInstagram className="insta" />
            </h6>
            </a>
            
            <a href="#">
            <h6 className="b5">
              <FaLinkedinIn className="linked" />
            </h6>
            </a>
            
          </div>

          <div className="col-lg-3 menu">
            <h2>
              MENU
            </h2>
          <p><a href="#">
            <MdKeyboardDoubleArrowRight className="arrow"/>
              About Us
            </a>
            </p>  
              <p>
              <a href="#">
          <MdKeyboardDoubleArrowRight className="arrow"/>
              Services
          </a>
              </p>
          
              <p>
              <a href="#">
           <MdKeyboardDoubleArrowRight className="arrow"/>
              Our Clients
           </a>
              </p>
           
              
              <p>
              <a href="#">
           <MdKeyboardDoubleArrowRight className="arrow"/>
              Testimonial
           </a>
              </p>
           
              
            <p>
            <a href="#">
            <MdKeyboardDoubleArrowRight className="arrow"/>
              Contact
            </a>
            </p>
           
              
            
          </div>




          <div className="col-lg-5 solutions">
            <h2>
              SOLUTIONS
            </h2>
          <p><a href="#">
            <MdKeyboardDoubleArrowRight className="arrow2"/>
              IT Management
            </a>
            </p>  
              <p>
              <a href="#">
          <MdKeyboardDoubleArrowRight className="arrow2"/>
          Cyber Security


          </a>
              </p>
          
              <p>
              <a href="#">
           <MdKeyboardDoubleArrowRight className="arrow2"/>
           Cloud Computing


           </a>
              </p>
           
              
              <p>
              <a href="#">
           <MdKeyboardDoubleArrowRight className="arrow2"/>
           IT Consulting


           </a>
              </p>
           
              
            <p>
            <a href="#">
            <MdKeyboardDoubleArrowRight className="arrow2"/>
            Software Dev


            </a>
            </p>
           
              
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
