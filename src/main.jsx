import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home  from './Pages/home';
import Post from './Pages/post';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)