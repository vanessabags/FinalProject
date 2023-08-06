/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  React Router Boiler Plate 
   FE Lab Week 16
*/

import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Home from './Components/Home.js'
import Photos from './Components/Photos.js'
import Posts from './Components/Posts.js'

import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/Navbar'

/** Instruction:
 *    This is a boiler plate, or a "starting point" for React Router.
 *    This boiler plate uses React Router 5.3. You MUST read and use the documentation
 *       for React Router 5.3 if you decide to use this boiler plate.
 *
 *    You are not required to use RR 5.3 for your final.
 *    You may use this boiler plate for your final if you want to.
 *
 */

/*------------------------ Creating a New Route ------------------------*/

/**
 * Step 1: npm install to install your node_modules folder
 * Step 2: npm start inside this project directory to see how the boiler plate is already set up.
 * Step 3: Rename: the Home and About components & routes to something you want
 *         to use for your final.
 * Step 4: Connect a third component so your nav now goes to three places instead
 *         of just two.
 *
 *         Make sure for this new component you have done the following:
 *           - Create a new <li></li> element in your nav component.
 *           - Put a <Link> component in that element with a name, and a to attribute.
 *           - Create a new <Route> component inside of your <Switch> component.
 *               It should sit on the upper level of the other two <Route> components.
 *               Make sure the syntax is the same as the other two components.
 *           - Test to make sure that all three components navigate correctly.
 */

export default function App() {
  return (
    // Your entire App.js is the router.
    <Router>
      {/* This is your Nav element, that users can see. */}
      <div>
        <NavBar sticky="top" collapseOnSelect expand="lg" bg='dark' data-bs-theme='dark'>
          <NavBar.Brand  style={{ padding: "15px"}}> Connection </NavBar.Brand>
          <NavBar.Toggle aria-controls='responsive-navbar-nav' />
          <NavBar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/photos'>Photos</Nav.Link>
              <Nav.Link href='/posts'>News Post</Nav.Link>
            </Nav>
          </NavBar.Collapse>
        </NavBar>
        

        {/* This is the logic that switches each path.
          1. Give your Route component a path attribute so users know where they are.
              This is linked directly with "to attribute" on your nav above.
          2. Inside that Route component, render the component you want users
              to see when they click on that route.
          <Route path="/">
            <Component/>
          </Route>  */}

        <Switch>

          <Route path='/posts'>
            <Posts />
          </Route>

          <Route path="/photos">
            <Photos />
          </Route>

          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  )
}
