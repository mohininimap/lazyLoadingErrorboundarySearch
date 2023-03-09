import React from 'react';

import './App.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home';
// import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Refsexample from './Refsexample';
import { UserefhookfunctionalCompo } from './UserefhookfunctionalCompo';
import Refform from './Refform';
import Parenterrorboundry from './errorboundary/Parenterrorboundry';
import SearchItemFromList from './searchItemFromList/SearchItemFromList';

const LazyAbout=React.lazy(()=>import('./About'))




function App() {
  return (
    <div className="App">
     <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils"/>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        {/* <Route path="/about" element={<About/>}>About</Route> */}

        <Route path="/about" element={
          <React.Suspense fallback="Loading ...">
           <LazyAbout/>
          </React.Suspense>
        }>About</Route>
        <Route path="/contact" element={<Contact/>}>Contact</Route>
        <Route path="/refs" element={<Refsexample/>}>REfs</Route>
        <Route path="/refsfunctional" element={<UserefhookfunctionalCompo/>}>REfs</Route>
        <Route path="/refsform" element={<Refform/>}>REfs</Route>
        <Route path="/errorboundary" element={<Parenterrorboundry/>}>ErrorBOundary</Route>

        <Route path="/searchitemfromlist" element={<SearchItemFromList/>}>Search</Route>
    
      </Routes>
     </Router>
    </div>
  );
}

export default App;
