import './components/navbar/Some.css';
import './components/navbar/Internship.css';
import './components/navbar/Home.css';
import './components/navbar/Project.css'
  import Navbar1 from './components/navbar/Navbar1';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
  import Home1 from './components/navbar/Home';
 import Internship1 from './components/navbar/Internship';
 import Project1 from './components/navbar/Project';
 import Some1 from './components/navbar/some';
 import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    
     <BrowserRouter basename='/Assignment'> 
    
     <Navbar1/>
     <Routes>
      {/* <Route path='/' element={<Navbar1/>}/> */}
       <Route path='/' element={<Home1/>}/> 
      <Route path='/Internship' element={<Internship1/>}/>
      <Route path='/Project' element={<Project1/>}/>
      <Route path='/Some' element={<Some1/>}/> 
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
