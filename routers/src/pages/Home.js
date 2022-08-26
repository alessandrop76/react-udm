import React from 'react'
import Product from '../hooks/product';
import '../pages/Home.css';
import Search from '../pages/Search';


const Home = () => {
  return (
    <>
     <h1>React Router</h1>
     <Search />
        <h2>Lista de Produtos</h2>
       
        <Product />
    </>
  )
}

export default Home