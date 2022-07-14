import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Menu from './Menu';
import AboutUs from './AboutUs';
import Book from './Book';
import Footer from './Footer';

const App =  () => {
    return (
      <BrowserRouter>
        <Navbar />
          <main>
          
            <Routes>
                <Route exact path='/' element={<Menu />} />
            </Routes>
            
          </main>
      </BrowserRouter>
    )
    };


export default App;
