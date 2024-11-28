
import  './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Home1 =()=>
{
    useGSAP(()=>
    {
        gsap.from("#card1",{
          y:20,
          duration:2,
          scrollTrigger:"#card1"

        }
        )
        gsap.from("#card2",{
            y:20,
            duration:3,
            scrollTrigger:"#card2"
  
          }
          )
          gsap.from(".footer p",{
            y:20,
            duration:3,
            scrollTrigger:".footer p"
  
          }
          )  
          gsap.from("#cards",{
            y:20,
            duration:3,
            scrollTrigger:"#cards"
  
          }
          )
    })
    return(
    <div>
    <Container fluid>
    <Row >      
    <Col lg={12} md={6} sm={6}  id='col-1' className='main'>
    {/* <div id='main'> */}
        <div id='inside'>
           <h1>Hii I am Namrata Kumbhar</h1>
           <h2 style={{fontFamily:"fantasy",letterSpacing:2,paddingTop:10,fontSize:40}}>Student</h2>
           <p style={{fontFamily:"cursive",paddingTop:30,fontSize:20}}>"I am an ambitious student looking for work. I am from Belgaum and currently pursuing a BCA from Govindram Seksaria Science College. I have an interest in web development."</p>

        </div>

    {/* </div> */}
    </Col>
    </Row >
    </Container>
   { /* second Container */}
    <Container className='container-2'>
        <Row id='cards'className="d-flex justify-content-around align-items-center">
            <Col lg={3} id='ani'>
            <div style={{marginBottom:'25px'}}>
             <h1>skills</h1>   
             <h5>1. HTML , CSS</h5>
             <ProgressBar striped variant="success" now={95} />
             <h5>2.JS</h5>
             <ProgressBar striped variant="info" now={85} />
             <h5>3.REACT</h5>
             <ProgressBar striped variant="warning" now={60} />
             <h5>4.BOOTSTRAP, REACT BOOTSTRAP</h5>
             <ProgressBar striped variant="danger" now={85} />
             <h5>5.PYTHON</h5>
             <ProgressBar striped variant="secondary" now={60} />
             <h5>6.DBMS,SQL</h5>
             <ProgressBar striped variant="primary" now={50}/>

            </div>
            </Col>
            <Col lg={3} md={6}>
            <Card id='card1' style={{ width: '18rem', height:'400px' }}>
            <Card.Body>
            <Card.Title style={{fontFamily:"fantasy"}}>recentaly did work</Card.Title>
            <Card.Text>
            <h5 style={{fontFamily:"cursive"}}> participated in nasa Space app Challenge</h5> 
              <p style={{fontFamily:"-moz-initial"}}>(NASA Space App Challenge)-A web-based application developed for NASA's Space App Challenge, providing an immersive 3D experience of the solar system. Users can explore and learn about planets, their rotation, and revolution around the sun.</p>
            </Card.Text>
            <div id='button' variant="primary" style={{fontFamily:"cursive" }}>
                <a style={{textDecoration:"none",color:"white",textAlign:"center"}} href='https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/arch_destroyers/?tab=project'>
                See More</a>
            </div>  
            </Card.Body>
            </Card>
            </Col>
            <Col lg={3} md={6}>
            <Card id='card2' style={{ width: '18rem' , height:'400px'}}>
            <Card.Body>
            <Card.Text>
            <h1 style={{color:"white",fontFamily:"-moz-initial",textAlign:"center",paddingTop:"90px"}}>NAMRATA KUMBHAR</h1>
            </Card.Text>
            </Card.Body>
            </Card>
            </Col>
            
        </Row>
    </Container>
    <Container fluid>
        <div className='footer'>
        <Row>
            <Col>
                <p><b>linkdin</b></p>
                <a  href="https://www.linkedin.com/in/namrata-kumbhar-314b64250"  rel="noopener noreferrer">https://www.linkedin.com/in/namrata-kumbhar-314b64250</a>
            </Col>
            <Col>
                <p><b>Certificates</b></p>
                <a href='https://drive.google.com/file/d/1p6XzdbhYn9WD0eyDeh7I0Z-h7YEKnfoZ/view?usp=drive_link'>Unstop- TATA crucible campus quiz
                </a><br/>
                <a href='https://achieveramrit.github.io/Nasaspace_app/'>Hackathon-NASA International Space Apps Challenge</a>
            </Col>
            <Col>
            <p><b>Contact info</b></p>
            <p>Phone - 8310578781</p>
            <p>email - nkumbhar581@gmail.com</p>
             </Col>
            <Col>
            <p><b>Location</b></p>
            <p>Majagaon Belgaum, Karnataka</p>
            </Col>
            </Row>
            
  

        </div>
    </Container>
    </div>
    )
    
}
export default Home1