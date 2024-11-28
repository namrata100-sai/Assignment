import './Internship.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 import {gsap} from "gsap"
 import { useGSAP } from '@gsap/react';
 import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




const Internship1 =()=>
    {
        
        useGSAP(()=>{
            gsap.from("#heading",{
                opacity:0,
                y:20,
                duration:1
              })

        })
        useGSAP(()=>{
            gsap.from(".div1 h1",{
                opacity:0.5,
                scale:0,
                duration:2,
               stagger:1,
               delay:0.5
              })
          })
          useGSAP(()=>{
            gsap.from(".Col2 .div2 h4",{
            duration:2,
            delay:1,
            y:20,
            scrollTrigger:" .Col2 .div2 h4"
              })
          })
          useGSAP(()=>{
            gsap.from(".footer p",{
           duration:2,
            y:20,
            opacity:0,
            scrollTrigger:".footer p"
              })
          })
        
        return(

        <div id="body"> 
        <h1 id='heading' className='d-flex justify-content-center align-items-center ' style={{paddingTop:'30px'}}>Internship</h1>
        <Row className='d-flex justify-content-center'>
            <Col md={5} className='Col1'>
              <div className='div1'>
                <h1>Wordpress</h1>
                <h1>Coding Website</h1>
              </div>
            </Col>
            <Col md={5} className='Col2'>
            <div className='div2'>
                <h4>Designed and developed a coding information website using WordPress, providing resources and tutorials on programming languages like Java, Python,  React  etc. also the users can comments on post they can share there thoughts. also then can contact by filling the form 
                 - Created and published blog posts on Java, Python, and React
- Plugins-WP File Manager, Wordfence Security , Elementor


            </h4>
                   <p>Internship Studio (Duration: [4-june-2024] - [9-july-2024])</p>
            </div>
            </Col>
            <Col sm={12}>
            <div className='div3'>
              <a href='https://drive.google.com/drive/folders/1n47UQIndX0u2fV7dDh8qsZQuYJGKGNUx?usp=sharing'>click here </a>
            </div> 
            </Col>
        </Row>
        <div className='footer'> <Row>
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
        
        </div>   
        )
        
    }
    export default Internship1