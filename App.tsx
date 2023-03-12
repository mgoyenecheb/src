import React, { useState } from 'react';
import {useEffect} from 'react';


import './App.css';

import Home from './Home';
import Explore from './Explore';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Events from './Events';
import Dashboard from './Dashboard';

const App: React.FC = () => {
  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add('bg-black');


    });


  return (

    <Router><Routes>
      <Route path="" element={<Home />} />
      <Route path="explore" element={<Explore />} />
      <Route path="events" element={<Events />} />
      <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
