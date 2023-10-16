import React, { Component } from 'react';

import Header from "./components/Header";
import Footer from './components/Footer';
import Game from "./module/Game"

function App(){
    return (
      <div className='d-flex flex-column align-items-center'>
        <Header />
        <Game />
        <Footer />
      </div>
    )
}

export default App;