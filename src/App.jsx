import './App.css';
import React, { Component } from 'react';
import Navbar from './Navbar';
import News from './News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    const apiKey =import.meta.env.REACT_APP_NEWS_API;
    

    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/newsapp" element={<News key="general"  apiKey={apiKey} pagesize={6} category="general" />} />
            <Route exact path="/business" element={<News key="business" apiKey={apiKey} pagesize={6} category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} pagesize={6} category="entertainment" />} />
            <Route exact path="/general" element={<News key="general" apiKey={apiKey} pagesize={6} category="general" />} />
            <Route exact path="/health" element={<News key="health"  apiKey={apiKey} pagesize={6} category="health" />} />
            <Route exact path="/science" element={<News key="science" apiKey={apiKey} pagesize={6} category="science" />} />
            <Route exact path="/sports" element={<News key="sports" pagesize={6} apiKey={apiKey} category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" pagesize={6} apiKey={apiKey} category="technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
