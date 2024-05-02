import React, { useRef } from "react";
import "../Clients/clients.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/Annularlogo.png"
import img2 from "../../assets/meezarlogo.png"
import img3 from "../../assets/myincorplogo.png"
import img4 from "../../assets/pepy.png"
import img5 from "../../assets/spclogo.png"
import img6 from "../../assets/wrexalogo.png"
import img7 from "../../assets/isrl.png"
import img8 from "../../assets/tcm.png"


const AutoPlayMethods=()=> {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots:true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (




    
    <div className="container">




        <div className="headingclient">
            <h1>OUR CLIENTS</h1><br />
            <h5>OUR COMMITMENT TO DELIVERING TOP-NOTCH IT SERVICES HAS EARNED US THE TRUST OF ORGANIZATIONS ACROSS THE BOARD.</h5>
        </div> 

        <br /><br />
      

        
        <div className="images">
        <Slider ref={slider => (sliderRef = slider)} {...settings}>
        <div className="img2">
          <img src={img2} alt="" />
        </div>

        <div className="img7">
        <img src={img7} alt="" />
        </div>

        <div className="img8">
        <img src={img8} alt="" />
        </div>

        <div className="img6">
        <img src={img6} alt="" />
        </div>

        <div className="img5">
        <img src={img5} alt="" />
        </div>

        <div className="img4">
        <img src={img4} alt="" />
        </div>

        <div className="img1">
        <img src={img1} alt="" />
        </div>

        <div className="img3">
        <img src={img3} alt="" />
        </div>
        </Slider>
        </div>

        
     
    
    </div>
  );
}
export default AutoPlayMethods;
