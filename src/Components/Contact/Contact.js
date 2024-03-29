import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TextField, TextareaAutosize } from '@mui/material';
import contactGreen from '../../contactGreen.gif';
import app from '../initfirebase';
import { getFirestore, doc, collection, setDoc } from 'firebase/firestore/lite';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useNavigate } from 'react-router-dom';
import "./Contact.css";


function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [number, setNumber] = useState();
  const [issue, setIssue] = useState('');
  const [locality, setLocality] = useState('');
  const [loading, setLoading] = useState(false);

  async function submitIssue() {
    try {
      if (!((name === '') || (number === null) || (issue === "") || (locality === ""))) {
        const issueData = ({ name, number, issue, locality });
        console.log(issueData);
        setLoading(true);
        const db = getFirestore(app);
        const docref = doc(collection(db, 'userIssue'));
        await setDoc(docref, issueData);
        setLoading(false);
        alert("Data Send Successfully.");
        navigate("/");
      }
      else {
        alert("Please Enter values in fields.");
      }

    } catch (error) {
      setLoading(false);
      alert("Something went wrong.");
      console.log(error);
    }




  }


  return (
    <>
      <Container>
    <Row>
    <Col className='Contact-desDis'>
      <img src={contactGreen} style={{width:"75%", marginLeft:"15%",marginTop:"25%"}} alt='mail'/>
    </Col>
    <Col className='Contact-form'>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'1rem'}}><h1 style = {{marginLeft:"14%"}}><span style={{color:"#256D85", fontWeight:"bold",fontFamily:"Roboto Slab, serif"}}>Do you have</span><span style={{color:"black", fontWeight:"bold",fontFamily:"Roboto Slab, serif"}}> any issue ??</span></h1><img src={contactGreen} style={{width:"20%"}} className="Contact-mobDis" alt='mail'/></div>
    <TextField id="outlined-basic" label="Your Name" variant="outlined" style = {{ width: "70%",marginLeft:"15%",marginTop:40}} name="name" onChange={event=>setName(event.target.value)} />
    <br/>
    <TextField id="outlined-basic" label="Contact Number" variant="outlined" style = {{ width:"70%", marginLeft:"15%",marginTop:30}} name="number" onChange={event=>setNumber(event.target.value)}/>
    <br/>
    <TextareaAutosize aria-label="empty textarea" placeholder="Your issue" style={{ width: "70%", height: '10%',marginLeft:"15%", marginTop:30}} name="issue" onChange={event=>setIssue(event.target.value)}/>
    <br/>
    <TextField id="outlined-basic" label="Locality" variant="outlined" style={{width:"70%", marginLeft:"15%", marginTop:30}} name="locality" onChange={event=>setLocality(event.target.value)} />
    <br/>
    {loading? <CircularProgressbar  />:<Button style = {{backgroundColor:'#259BAB',border:'solid #259BAB 5px',marginTop:'5%',marginLeft:'40%',marginBottom:'10%',fontFamily:"Roboto Slab, serif"}} onClick={event=>submitIssue()}>Submit</Button>}

  </Col>
  </Row>
  </Container>

      {/* <div className='Contact-super-container'>
        <div className='Contact-image'>
          <img src={contactGreen} style={{ width: "75%" }} />
        </div>
        <div className='Contact-main-container'>
          <div className='Contact-heading'>
            <h1 ><span style={{ color: "#256D85", fontWeight: "bold", fontFamily: "Roboto Slab, serif" }}>Do you have</span><span style={{ color: "black", fontWeight: "bold", fontFamily: "Roboto Slab, serif" }}> any issue ??</span></h1>
          </div>
          <div className='Contact-form'>
            <form>
              <div className='Contact-fields'>
                <TextField
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                  className='Contact-Textfield'
                  name="name"
                  onChange={event => setName(event.target.value)} />

                <TextField
                  id="outlined-basic"
                  label="Contact Number"
                  variant="outlined"
                  className='Contact-Textfield'
                  name="number"
                  onChange={event => setNumber(event.target.value)} />

                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Your issue"
                  className='Contact-Textfield'
                  name="issue"
                  onChange={event => setIssue(event.target.value)} />

                <TextField
                  id="outlined-basic"
                  label="Locality"
                  variant="outlined"
                  className='Contact-Textfield'
                  name="locality"
                  onChange={event => setLocality(event.target.value)} />
              </div>
              {loading ? <CircularProgressbar /> : <Button style={{ backgroundColor: '#259BAB', border: 'solid #259BAB 5px', fontFamily: "Roboto Slab, serif" }} onClick={event => submitIssue()}>Submit</Button>}
            </form>
          </div>

        </div>
      </div> */}
    </>


  );
}

export default Contact;