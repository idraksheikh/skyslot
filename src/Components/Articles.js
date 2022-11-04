import React from "react";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import BioWaste from "../BioWaste.jpeg"
import EWaste from "../E-waste.jpeg"
import DomesticWaste from "../DomesticWaste.jpeg"
import Chemical from "../Chemical.jpeg"
import Agriculture from "../Agriculture.jpeg"
const Articles=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
<>

<div className="container skill-sec" style={{marginTop:"15%"}}>
      <div className="row">
      <div className="s-heading"><h1> Waste Management<span> Techniques</span></h1></div>
    
      <div className="s-para"><p >Waste management is a practice which includes a series of steps right from the beginning to the disposal.
      </p>

      </div>
      </div>
     <div className="row" >
     <Carousel responsive={responsive}>
  <div>
  <figure className="snip1584">
        <img src={BioWaste} style={{height:238}}/>
        <figcaption>
          <h3>Biodegradable Waste</h3>
          <h5>How to manage?</h5>
        </figcaption><a href="https://www.omicsonline.org/open-access/management-of-biodegradable-waste-116518.html"></a>
      </figure>
  </div>
  <div>
  <figure className="snip1584">
        <img src={EWaste} style={{height:238}}/>
        <figcaption>
        <h3> E-Waste</h3>
          <h5>How to manage?</h5>
        </figcaption><a href="https://www.teriin.org/article/e-waste-management-india-challenges-and-opportunities"></a>
      </figure>
  </div>
  <div>
  <figure className="snip1584">
        <img src={DomesticWaste} style={{height:238}}/>
        <figcaption>
        <h3>Domestic Waste</h3>
          <h5>How to manage?</h5>
        </figcaption><a href="https://ergenvironmental.com/methods-of-domestic-waste-disposal/"></a>
      </figure>
  </div>
  <div>
  <figure className="snip1584">
        <img src={Chemical} style={{height:238}} />
        <figcaption>
        <h3>Chemical Waste</h3>
          <h5>How to manage?</h5>
        </figcaption><a href="https://www.britannica.com/technology/hazardous-waste-management/Treatment-storage-and-disposal"></a>
      </figure>
  </div>
  <div>
  <figure className="snip1584">
        <img src={Agriculture} style={{}}/>
        <figcaption>
        <h3>Agriculture Waste</h3>
          <h5>How to manage?</h5>
        </figcaption><a href="https://www.businesswaste.co.uk/agricultural-waste-management/"></a>
      </figure>
  </div>
</Carousel>;
     </div>

</div>
</>
    )
}
export default Articles