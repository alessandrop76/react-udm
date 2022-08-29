import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar />
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
           <Route path="/Contact" element={<Contact />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
