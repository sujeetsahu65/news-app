// in this project we will use class based components, the one of the two ways/methods of creating react app

import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import Home from './components/Home';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>

    <Route path='/' index element={<Home/>}/>
    <Route path='/general'  element={<News key="general" pageSize="5" category="general"/>}/>
    <Route path='/business'  element={<News key="business" pageSize="5" category="business"/>}/>
    <Route path='/entertainment' element={<News key="entertainment" pageSize="5" category="entertainment"/>}/>
    <Route path='/health'  element={<News key="health" pageSize="5" category="health"/>}/>

    </Route>
  )
);

export default class App extends Component { 
  render() {
    return (
      <>
  <RouterProvider router={Router}/>
   
    

      </>
    )
  }
}



