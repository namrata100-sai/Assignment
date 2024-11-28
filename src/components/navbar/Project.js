import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Project.css'
import Image from 'react-bootstrap/Image';
import ph2 from './ph2.jpg';
// import React, { useEffect } from "react";
// import { gsap } from "gsap";

const Project1 =()=>
    {    
        return(
        <> 
         <div id='main'>  
        <div id="div"> 
        <Row>
            <Col>
            <h1 id='h1'className='offset-5'>projects</h1>
            </Col>
        </Row>
        
        <Container className='Container '>
               <div id='div1'>
               <Row className='d-flex justify-content-center align-items-center'id='Row1'>
                <Col md={2} >
                <Image id='img' src={ph2} roundedCircle style={{width:'180px',height:'180px'}} />
                </Col>
                <Col md={5} className='offset-1'>
                <h5><u>Solar System Visualizer- 2024
                </u></h5>
                <p>(NASA Space App Challenge)-A web-based application developed for NASA's Space App Challenge, providing an immersive 3D experience of the solar system. Users can explore and learn about planets, their rotation, and revolution around the sun.
                   <br/> <b>Tools:-HTML, CSS, JavaScript<br/>
                    Hosting -GitHub
                    </b>
                </p>
                </Col>
               </Row>
               </div>
               <div id='div2'>
               <Row className='d-flex justify-content-center align-items-center'id='Row1'>
                <Col md={2} >
                <Image id='img' src={ph2} roundedCircle style={{width:'180px',height:'180px'}} />
                </Col>
                <Col md={5} className='offset-1'>
                <h5><u>Portfolio - 2024</u></h5>
                <p>Designed, developed, and deployed a responsive single-page application (SPA) portfolio, showcasing  skills, projects, and internship experiences.
                Utilized HTML5, CSS3, JavaScript, Bootstrap,, React-Bootstrap and React Router</p>
                </Col>
               </Row>
               </div>
                <div id='div3'>
               <Row className='d-flex justify-content-center align-items-center'id='Row1'>
                <Col md={2} >
                <Image id='img' src={ph2} roundedCircle style={{width:'180px',height:'180px'}} />
                </Col>
                <Col md={5}className='offset-1'>
                <h5><u>Clone of Amazon- 2023</u></h5>
                <p>Created a clone of the Amazon website using HTML and 
                 and CSS. This project helped me learn how to effectively    
                 structure HTML components and style them using CSS  
                 properties, enhancing my web development skills.</p>
                </Col>
               </Row>
               </div>
        </Container> 
        </div>
        </div> 
        <div id='footer'>
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
        </>   
        )
        
    }
    export default Project1