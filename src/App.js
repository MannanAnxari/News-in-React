// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


// or less ideally




const App = () => {

  // apiKey = "7b0fb2ffe1b84d84ac011978578acce7"
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  const setProgres = (progress) => {
    setProgress(progress)
  }

  // let width = 10

  return (
    <Router>
      <div>

        <Navbar title="Helo" />
        <LoadingBar
          color='#fff'
          progress={progress}
          shadow="false"
        // loaderSpeed={5000}
        // onLoaderFinished={() => setProgress(0)}
        />
      </div>
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgres} apiKey={apiKey} sourceC="dark" key="general" pageSize={12} country="in" category="general" />} ></Route>
        <Route exact path="/business" element={<News setProgress={setProgres} apiKey={apiKey} sourceC="primary" key="business" pageSize={12} country="in" category="business" />} ></Route>
        <Route exact path="/entertainment" element={<News setProgress={setProgres} apiKey={apiKey} sourceC="secondary" key="entertainment" pageSize={12} country="in" category="entertainment" />} ></Route>
        <Route exact path="/general" element={<News setProgress={setProgres} apiKey={apiKey} sourceC="danger" key="generala" pageSize={12} country="in" category="general" />} ></Route>
        <Route exact path="/health" element={<News setProgress={setProgres} apiKey={apiKey} sourceC="success" key="health" pageSize={12} country="in" category="health" />} ></Route>
        <Route exact path="/science" element={<News setProgress={setProgres} apiKey={apiKey} sourceC="warning" key="science" pageSize={12} country="in" category="science" />} ></Route>
        <Route exact path="/sports" element={<News setProgress={setProgres} apiKey={apiKey} sourceC="dark" key="sports" pageSize={12} country="in" category="sports" />} ></Route>
        <Route exact path="/technology" element={<News setProgress={setProgres} apiKey={apiKey} sourceC="info" key="technology" pageSize={12} country="in" category="technology" />} ></Route>
      </Routes>
    </Router>
  )
}

export default App