import "../../components/Service/service.css";
import img1 from "../../assets/softwaredevelopment.png"
import img2 from "../../assets/Datamanagement.png"
import img3 from "../../assets/Consulting.png"
import img4 from "../../assets/Networksolutions.png"
import img5 from "../../assets/cloudcomputing.png"
import img6 from "../../assets/contact.png"

import React from 'react';

const service =()=> {
  return (
<div>
  <div className="container">
            <div className="heading">
            <br />
            <h1>World Best IT-Services We Provide</h1>
            <br />
            <p>Whether you're looking to streamline operations, enhance security, harness the power of data, or embark on a digital  
            transformation journey, our expert team is here to help.</p>
            </div>


      <div className="boxes1">

        <div className="row">


          <div className="col-lg-4  col-sm-1     software">
          <img src={img1} alt="" />
          <h2>SOFTWARE DEVELOPMENT</h2>
          <br />
          <p>From custom software solutions to web and mobile app development, we create tailored applications to meet your business needs.</p>
          </div>


          <div className="col-lg-4  col-sm-1 data">
          <img src={img2} alt="" />
          <h2>DATA MANAGEMENT</h2> <br />
          <p>Our data experts assist in data storage, backup, analytics, and data-driven insights to drive informed decisions.</p>
          </div>



            <div className="col-lg-4  col-sm-1 consulting ">
            <img src={img3} alt="" />
            <h2>CONSULTING</h2><br />
            <p>Rely on our IT consultants to provide strategic guidance, technology assessments, and digital transformation roadmaps.</p>
            </div>
      </div><br />

      <div className="boxes2">
        <div className="row">
          <div className="col-lg-4  col-sm-1 network">
          <img src={img4} alt="" />
          <h2>NETWORK SOLUTIONS</h2>
          <p>Our experts design, implement, and optimize network solutions to enhance connectivity and performance.</p>
          </div>

          <div className="col-lg-4  col-sm-1 cloud">
          <img src={img5} alt="" />
          <h2>CLOUD COMPUTING</h2>
          <p>We help you harness the power of the cloud with services like cloud migration, management, and optimization.</p>
          </div>

          <div className="col-lg-4 col-sm-1 support">
          <img src={img6} alt="" />
          <h2>24/7 SUPPORT</h2>
          <p>Our dedicated support team is available around the clock to resolve issues promptly and minimize downtime.</p>
          </div>

        </div>
          
          
          
      </div>        





  </div>
</div>
      
 






    </div>
   







  )
}

export default service
