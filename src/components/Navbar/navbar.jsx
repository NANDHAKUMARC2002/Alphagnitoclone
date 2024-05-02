import React from 'react';
import logonav from "../../assets/Alphagnitologo.png";
import "../Navbar/navbar.css";


const Navbar =()=> {
  return (
<div>

      <div className="navfull">

      
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="logo" href="#"><img src={logonav} alt="" /></a>



    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <li class="about">
          <a class="nav-link " href="/about">ABOUT</a>
        </li>

        <li class="service">
          <a class="nav-link" href="/service">SERVICE</a>
        </li>

        <li class="testi">
          <a class="nav-link" href="/testimonial">TESTIMONIAL</a>
        </li>

        <li class="contact">
          <a class="nav-link" href="/contact">CONTACT</a>
        </li>

        <li class="lets">
          <a class="nav-link" href="/connect">Let's Connect</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</div>
    </div>
  )
}

export default Navbar;

