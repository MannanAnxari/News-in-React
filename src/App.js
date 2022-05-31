// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProgressBar from './components/ProgressBar';
import Button from 'react-bootstrap/Button';

// or less ideally




export default class App extends Component {

  render() {
    
    // let width = 40

    return (
      <Router>
        <div>
          <Navbar title="Helo" />
          {/* <ProgressBar width={parseInt(width)} /> */}
          {/* <ProgressBar /> */}
        </div>
        <Routes>
          <Route exact path="/" element={<News sourceC="dark" key="general" pageSize={12} country="in" category="general" />} ></Route>
          <Route exact path="/business" element={<News sourceC="primary" key="business" pageSize={12} country="in" category="business" />} ></Route>
          <Route exact path="/entertainment" element={<News sourceC="secondary" key="entertainment" pageSize={12} country="in" category="entertainment" />} ></Route>
          <Route exact path="/general" element={<News sourceC="danger" key="generala" pageSize={12} country="in" category="general" />} ></Route>
          <Route exact path="/health" element={<News sourceC="success" key="health" pageSize={12} country="in" category="health" />} ></Route>
          <Route exact path="/science" element={<News sourceC="warning" key="science" pageSize={12} country="in" category="science" />} ></Route>
          <Route exact path="/sports" element={<News sourceC="dark" key="sports" pageSize={12} country="in" category="sports" />} ></Route>
          <Route exact path="/technology" element={<News sourceC="info" key="technology" pageSize={12} country="in" category="technology" />} ></Route>
        </Routes>
      </Router>
    )
  }
}
