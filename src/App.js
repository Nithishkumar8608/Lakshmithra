import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer/Footer';
import AboutPage from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import FAQ from './Pages/FAQ';
import LoanCalculator from './Pages/LoanCalculator';
import Career from './Pages/Career';
import ServiceDetail from './Pages/ServiceDetails';
import Gallery from './Pages/Gallery';
import Blog from './Pages/Blog';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsConditions from './Pages/Terms&Conditions';



function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<AboutPage/>} /> 
        <Route path='/services' element={<Services/>}/>
        <Route path='/services/:id' element={<ServiceDetail/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/loancalculator' element={<LoanCalculator/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/terms-conditions' element={<TermsConditions/>}/>


      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
