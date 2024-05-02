import React from "react";
import Slider from "react-slick";
import "../Testimonial/testimonial.css";
import icon10 from "../../assets/quotes.png";

const AutoPlay=()=> {
  const settings = {
    dots: true,
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    arrow: false,
  };
  return (
    <div className="wholetesti">
      <div className="headtesti">
        <h1>What Our Client’s Say</h1>
      </div>
      <div className="container">
        <div className="boxestesti ">
          <Slider {...settings}>
            <div className="tcm  ">
              <img src={icon10} alt="" />
              <h2>The Chennai Mobiles</h2>
              <h6>CEO OF THE COMPANY</h6>
              <p>
                Alphagnito has been an invaluable partner in our journey to
                secure sensitive healthcare data. Their cybersecurity expertise
                and dedication to compliance have helped us maintain the highest
                standards in the industry.
              </p>
            </div>

            <div className="isrl ">
              <img src={icon10} alt="" />
              <h2>INDIASPEAKS Research Lab</h2>
              <h6>CO-FOUNDER</h6>
              <p>
                Cost efficiency is paramount for us, and Alphagnito has
                consistently delivered. Their managed IT services have
                streamlined our operations and saved us both time and money.
              </p>
            </div>

            <div className="pepy ">
              <img src={icon10} alt="" />
              <h2>PEPY Technologies</h2>
              <h6>CO-FOUNDER</h6>
              <p>
                Working with Alphagnito was a breeze. They kept us in the loop
                throughout the entire web development process and delivered a
                site that exceeded our expectations.
              </p>
            </div>

            <div className="annu">
              <img src={icon10} alt="" />
              <h2>Annular Technologies</h2>
              <h6>COMPANY FOUNDER</h6>
              <p>
                Working with Alphagnito has been a game- changer for our
                business. Their proactive IT management and cybersecurity
                services have not only improved our overall efficiency but also
                given us peace of mind. We couldn't be happier with the level of
                professionalism and expertise they bring to the table.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default AutoPlay;
