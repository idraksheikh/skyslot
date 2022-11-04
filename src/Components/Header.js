import React from "react";
import Container from "react-bootstrap/esm/Container";
import headerImage from "../headerImage.png"
import Button from 'react-bootstrap/Button';
const Header=()=>{
    return(
<>
    <div className="header" >
    <div style={{backgroundColor:"#FAFAFA",position:"absolute",marginTop:180,width:"65%",height:"55%",boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>
        <div className="row">
        <div className="col">
        <div style={{marginLeft:"15%",justifyContent:"center",alignItems:"center",marginTop:"5%"}}>
        <h2 className="headerText">Hello!!</h2>
        <h2 className="headerText">We Are <span style={{color:"#259BAB"}}>Skyslot</span></h2>

        <p>Lorem Ipsum is simply dummy text of the printing when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        
        <p className="headerPara" >As a Garbage collector Kindly <br/>
        share your schedule </p>
        <Button style={{backgroundColor:"#259BAB",border:"solid #259BAB 5px"}} > Add Route</Button>{' '}
        
        
        </div>
       
        </div>
        <div className="col">

<img src={headerImage } style={{width:"65%",marginLeft:"10%"}}/>
        </div>

        </div>
    </div>
    </div>
 
   

</>
    )
}
export default Header;