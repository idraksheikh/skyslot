import React from "react";
import Container from "react-bootstrap/esm/Container";
import headerImage from "../../headerImage.png"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import "./Header.css";
const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="header" >
                <div className="innerHeader" >
                    <div className="row">
                        <div className="col">
                            <div style={{ marginLeft: "15%", justifyContent: "center", alignItems: "center", marginTop: "5%" }}>
                                <div className="headerText">Hello!!</div>
                                <div className="headerText">We Are <span style={{ color: "#259BAB" }}>Skyslot</span></div>

                                <div className="headerPara1" > "when you refuse to reuse,<br />
                                    its the earth you abuse its just one straw ,said 8 billion people "</div>

                                <div className="headerPara2" >As a Garbage collector Kindly <br />
                                    share your schedule </div>
                                <Button className="add-route" onClick={() => {
                                    navigate("/binman")
                                }}> Add Route</Button>{' '}


                            </div>

                        </div>
                        <div className="col" style={{display:"flex",justifyContent: "center", alignItems: "center"}}>

                            <img src={headerImage} style={{ width: "65%", marginLeft: "10%" }} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Header