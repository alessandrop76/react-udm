import './App.css';
import React from 'react';



//1-  Config React Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

//Components
import Navbar from './components/Navbar';


//Renderizando com CompenentDidMount .......................................................................
// class MyComponent extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: []
//     };
//   }
  
// componentDidMount(){
//   fetch(url)
//   .then(res => res.json())
//   .then((result) => {
//     this.setState({
//       isLoaded: true,
//       items: result      
//     });
//   },
//   (error) => {
//     this.setState({
//       isLoaded: true,
//       error
//     });
//   }
//   )
// }
// render(){
//   const {error, isLoaded, items} = this.state;
//   if(error){
//     return <div>Error:{error.message}</div>;
//   }
//   else if(!isLoaded){
//     return <div>Loading...</div>
//   }
//   else{
//     return (
//        <ol>
//         {items.map(item =>(
//         <li key={item.id}>{item.name} {item.price}</li>
//         ))}      
//        </ol>   
//       );
//     }
//   }
// }

function App() {
return(
  <> 
  <div className="App">
   <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
           
        {/* 6 -  Nested Routes - rotas aninhadas */}
        <Route path="/products/:id/info" element={<Info />} />
     
        {/* 4 -  Rota Dinâmica */}
        <Route path="/products/:id" element={<Products />} />

        {/* 8 - Busca de produto com Search Params*/}
        <Route path="/search" element={<Search />} />

        {/* 7 - No Match Routes */}
        <Route path="*" element={<NotFound />} />

        {/* 10 - Redirect  */}
        <Route path="/company" element={<Navigate to="/about" />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  </>
 
  )  
}

export default App;
