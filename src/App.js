import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home/>} />
        
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
