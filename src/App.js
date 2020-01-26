import React,{useEffect,useState} from 'react';
import './App.css';
import {BrowserRouter,Route,Redirect,Switch} from "react-router-dom"
import Home from "./Pages/Home"
import  'semantic-ui-css/semantic.min.css';
import SingleItem from "./Pages/SingleItem"
import {UserProvider} from "./context/context"



function App() {
  
  return (
    <BrowserRouter>
      <UserProvider>
        <Route exact path='/users/:userId' component={SingleItem}/>
        <Route exact path='/' component={Home}/>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
