import img1 from "../../assets/landing-page2.png";
import "../../components/Body/body.css";

import React from "react";
const body=()=> {
  return (
    <div>
      <div className="oip">
      
          <img src={img1}/>
    
          <h1>ALPHAGNITO</h1>      
          <h2>A Trip to Tech World</h2>
          <p>We are experienced professionals who understand that It services is changing, and are 
             true partners who care about your success.</p>
            <h4 className="more">MORE ABOUT US</h4>
            <h4 className="our">OUR SERVICES</h4>

      </div>
    </div>
  );
}

export default body;
