// in this project we will use class based components, the one of the two ways/methods of creating react app

import './App.css';
import Navbar from './components/Navbar';



import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component { 
  render() {
    return (
      <>
      <Navbar></Navbar>
      <News></News>

      </>
    )
  }
}



