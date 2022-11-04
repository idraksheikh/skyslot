import React from "react";
import { Link } from "react-router-dom";

const Footer=()=>{

    return(
<footer class="footer-distributed">

<div class="footer-left">

    <h3>Sky<span>slot</span></h3>

    <p class="footer-links">
    <Link to="/" style={{textDecoration:"none"}}><a href="#" class="link-1">Home</a></Link>
        
    <Link to="/show-timing" style={{textDecoration:"none"}}><a href="#">Bin Man Timings</a></Link>
    
    <Link to="/add-locality" style={{textDecoration:"none"}}><a href="#">Add your Locality</a></Link>
    
    <Link to="/contact" style={{textDecoration:"none"}}><a href="#">Share your Issue</a></Link>
        
        
    </p>

    <p class="footer-company-name">copyright©2022</p>
</div>

<div class="footer-center">

    <div>
        <i class="fa fa-map-marker"></i>
        <p><span>58 Telephone Nagar</span> Indore (M.P)</p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>+91 8319855396</p>
    </div>

    <div>
        <i class="fa fa-envelope"></i>
        <p>E-mail:-<a href="gehloth03@gmail.com">gehloth03@gmail.com</a></p>
    </div>

</div>

<div class="footer-right">

    <p class="footer-company-about">
        <span style={{fontweight:"bold",fontSize:20}}>Important Infomations</span>
    </p>
   
   <li style={{color:"rgb(6, 116, 110)"}}><a href="https://swachhbharatmission.gov.in/sbmcms/index.htm" style={{textDecoration: "none",color:"rgb(6, 116, 110)"}}>swachh bharat mission</a></li> 
   <li style={{color:"rgb(6, 116, 110)"}}> <a href="https://www.smartcityindore.org/311-app/" style={{textDecoration: "none",color:"rgb(6, 116, 110)"}}>311</a></li>
   <li style={{color:"rgb(6, 116, 110)"}}><a href="https://www.mpenagarpalika.gov.in/irj/portal/anonymous" style={{textDecoration: "none",color:"rgb(6, 116, 110)"}}>Nagar Nigam</a></li>
   <li style={{color:"rgb(6, 116, 110)"}}> <a href="https://imcindore.mp.gov.in/" style={{textDecoration: "none",color:"rgb(6, 116, 110)"}}>Municipal Corporation</a></li>
    {/* <div class="footer-icons">

        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>

    </div> */}

</div>

</footer>
    )
}
export default Footer

