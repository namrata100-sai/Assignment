import { Container } from 'react-bootstrap'
import './Some.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Some1 =()=>
    {
useGSAP(()=>
{
  gsap.from("div tr",
    {
         y:10,
         opacity:0,
        
    }
  )
})

        return(
        <div className='div'>
            <Container>
                
   <table class='table table-bordered border-primary' id='table' >
    
  <thead>
  <caption>QUALIFICATION
  </caption>
    <tr>
      <th scope="col">Course</th>
      <th scope="col">Institute / College </th>
      <th scope="col">University /board</th>
      <th scope="col">Year of passing</th>
      <th scope='col'>% / CGPA</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>BCA</td>
      <td>Govindram SeksariaScience <br></br>College Belagavi.</td>
      <td>Rani Channamma University Belagavi </td>
      <td>2023- Pursuing</td>
      <td>8.3 - CGPA</td>
    </tr>
    <tr>
      <td>PUC</td>
      <td>Govindram Seksaria Science<br></br> PU College Belagavi.</td>
      <td>Karnataka Board</td>
      <td>2022 </td>
      <td>70%</td>
    </tr>
    <tr>
      <td>SSLC</td>
      <td>Balika Adarsha Vidyalaya <br></br>Tilakwadi, Belgaum</td>
      <td>Karnataka Secondary Education Examination Board</td>
      <td>2020</td>
      <td>77.92%</td>
    </tr>
  </tbody>
</table>
</Container>
  </div>
        )
        
    }
    export default Some1