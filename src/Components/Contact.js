import {React,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {TextField, TextareaAutosize} from '@mui/material';
import contactGreen from '../contactGreen.gif';
import app from './initfirebase';
import { getFirestore, doc,collection,setDoc } from 'firebase/firestore/lite';
import { CircularProgressbar } from 'react-circular-progressbar';


function Contact() {

  const[name,setName]=useState('');
  const[number,setNumber]=useState();
  const[issue,setIssue]=useState('');
  const[locality,setLocality]=useState('');
  const[loading,setLoading]=useState(false); 

  async function submitIssue() {
    try {
        if(!((name==='')||(number===null)||(issue==="")||(locality===""))){
            const issueData=({name,number,issue,locality});
            console.log(issueData);
            setLoading(true);
            const db=getFirestore(app);
            const docref=doc(collection(db,'userIssue'));
            await setDoc(docref,issueData);
            setLoading(false);
            alert("Data Entered Successfully.");
        }
        else{
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
    <Col>
      <img src={contactGreen} style={{width:"75%", marginLeft:"15%",marginTop:"25%"}}/>
    </Col>
    <Col className='Contact-form'>
    <h1 style = {{marginLeft:"14%"}}><span style={{color:"#256D85", fontWeight:"bold",fontFamily:"Roboto Slab, serif"}}>Do you have</span><span style={{color:"black", fontWeight:"bold",fontFamily:"Roboto Slab, serif"}}> any issue ??</span></h1>
    <TextField id="outlined-basic" label="Your Name" variant="outlined" style = {{ width: "70%",marginLeft:"15%",marginTop:40}} name="name" onChange={event=>setName(event.target.value)} />
    <br/>
    <TextField id="outlined-basic" label="Contact Number" variant="outlined" style = {{ width:"70%", marginLeft:"15%",marginTop:30}} name="number" onChange={event=>setNumber(event.target.value)}/>
    <br/>
    <TextareaAutosize aria-label="empty textarea" placeholder="Your issue" style={{ width: "70%", height: 45,marginLeft:"15%", marginTop:30}} name="issue" onChange={event=>setIssue(event.target.value)}/>
    <br/>
    <TextField id="outlined-basic" label="Locality" variant="outlined" style={{width:"70%", marginLeft:"15%", marginTop:30}} name="locality" onChange={event=>setLocality(event.target.value)} />
    <br/>
    {loading? <CircularProgressbar  />:<Button style = {{backgroundColor:'#8EC3B0',border:'solid #259BAB 5px',marginTop:'5%',marginLeft:'40%',marginBottom:'10%',fontFamily:"Roboto Slab, serif"}} onClick={event=>submitIssue()}>Submit</Button>}

  </Col>
  </Row>
  </Container>
</>
    

  );
}

export default Contact;