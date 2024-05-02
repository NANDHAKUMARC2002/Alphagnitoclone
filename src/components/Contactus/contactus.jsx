import React from "react";
import "../Contactus/contactus.css";
import { CiMail } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const contactus=()=> {
  return (
    <div>
      <div className="wholecontactus">
        <div className="headofc">
          <h1>Contact Us</h1>
        </div>
        <div className="row">
          <h2 className="outerbox"></h2>
          <h3 className="innerbox"></h3>
          <div className="col-lg-1"></div>

          <div className="col-lg-4  get">
            <h1>Get in Touch</h1>
            <p className="getp">
              Our dedicated support team is available around the clock to
              resolve issues promptly and minimize downtime.
            </p>

            <div className="chat">
              <CiMail className="mail" />
              <h4>CHAT TO US</h4>
              <p>Our friendly team is here to help.</p>
              <span>alphagnitoo@gmail.com</span>
            </div>

            <div className="office">
              <IoLocationSharp className="locat" />

              <h4>OFFICE</h4>
              <p>Come say hello at our office.</p>
              <span>5/517, Thiruvalluvar Street Anna Nagar Madurai-20</span>
            </div>

            <div className="phone">
              <MdOutlineLocalPhone className="cell" />

              <h4>PHONE</h4>
              <p>Mon-Sat from 9am to 6pm</p>
              <h6>+91 63697 36093 +91 79049 68313</h6>
            </div>
            <div className="ficon">
          <a href="#">
            <FaTwitter className="twit" />
          </a>
          <a href="#">
            <FaInstagram className="insta" />
          </a>
          <a href="#">
            <FaLinkedinIn className="linked" />
          </a>
          <a href="#">
            <FaFacebookF className="fb" />
          </a>
          <a href="#">
            <FaThreads className="threads " />
          </a>
        </div>
          </div>
        <div className="col-lg-6 leftalpha">
            <h2>Level up with ALPHAGNITO</h2>
            <p>You can reach us anytime via alphagnitoo@gmail.com</p>
            <input type="text"  placeholder="Name"/>
            <input type="text"  placeholder="Email"/>
            <input type="text"  placeholder="Phone"/>
            <textarea name="" placeholder="Queries?" id="" cols="30" rows="7"></textarea><br /> <br />
            <a className="sumi" href="#">SUBMIT</a>
         
          </div>
          <div className="col-lg-1"></div>
        </div>

        
      </div>
    </div>
  );
}

export default contactus;
