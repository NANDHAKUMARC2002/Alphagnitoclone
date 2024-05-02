import React from "react";
import img3 from "../../assets/Training.png"
import img1 from "../../assets/about-img.png";
import img2 from "../../assets/quotes.png";
import "../About/About.css";
import { FaCheckCircle } from "react-icons/fa";

const About=()=> {
  return (
    <div>
      <div className="about">
        <h2>ABOUT US</h2>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <img src={img1} alt="" className="aboutimg" />
          <p className="welcome">
            Welcome to Alphagnito, where we transcend expectations and aspire to
            fulfill not just needs but dreams. Despite our modest size, we
            possess a powerhouse of latent abilities, focusing on anticipating
            and exceeding customer dreams and thoughts.
          </p>
          <img src={img2} className="quote" alt="" />
        </div>

        <div className="col-lg-6">
          <div className="aboutright">
            <h2>WEB CONSULTANTS</h2>
            <br />
            <h3></h3>
            <p>
              Our expertise lies in software solutions, encompassing Web
              applications, Android applications, ERP, HRM, CRM, and server
              architecture. Alphagnito crafts bespoke solutions that journey
              with clients on the road to success.Whether you're launching a new
              website, refining an existing one, or enhancing your online
              presence, let Alphagnito be your guide to achieving objectives
              with flair. We go beyond conventional service by amplifying our
              impact in education, prioritizing student well-being. Alphagnito
              offers unparalleled opportunities in extensive training and
              internships, shaping the professional dreams of students and
              serving as the catalyst for academic and career ascent. Join us at
              Alphagnito, where innovation meets excellence, and together, we
              turn aspirations into accomplishments.
            </p>
            <br />
           <a href="#">Contact Us</a> 
          </div>

          <div className="points">
            <p>
               <FaCheckCircle className="icon1" />
              Delivered more than 450 client’s interactions
            </p>
            <p>
              <FaCheckCircle className="icon1" />
              Provided by experts to help challenge critical activities
            </p>
            <p>
              <FaCheckCircle className="icon1" />
              Complemented with peer perspectives and advice
            </p>
            <p>
              <FaCheckCircle className="icon1" />
              Improve Efficiency And Provide Better Experiences!
            </p>
          </div>
        </div>
      </div>

      <div className="certificate">
        <div className="row">
          <div className="col-lg-6">
            <h1>ALPHAGNITO'S </h1>
            <h2>Internship and Training</h2>
            <p>
              Unlock your potential with an internship at Alphagnito, where
              learning meets earning! We are thrilled to offer dynamic
              internship opportunities that not only provide invaluable hands-on
              training but also come with a stipend. At Alphagnito, we believe
              in investing in talent and fostering growth. Our internship
              program is designed to equip you with practical skills in IT
              Industries, ensuring a transformative experience that goes beyond
              the classroom. Join our team and gain real-world insights while
              receiving a competitive stipend. Seize the chance to kickstart
              your career with a company dedicated to your professional
              development. Apply now for an internship that values your
              contribution and rewards your dedication!
            </p>
          </div>

          <div className="col-lg-6">
            <img src={img3} alt="" className="certi" />
          </div>





        </div>
      </div>
    </div>
  );
}

export default About;
