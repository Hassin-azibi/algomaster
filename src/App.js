import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Login from './Login.js';
import { Route, Routes, Navigate, Link, withRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Test from './Test';
import QCM from './Components/Chapters/Chapter1/Qcm.js';
import Concept from './Components/Chapters/Chapter1/concept';
import Scoreboard from './Components/Scoreboard/Scoreboard';
import { Table } from 'reactstrap'
import Scoreboardd from './Components/Scoreboard/Scoreboard2';
import Menu from './Components/HomePage/Menu';
import Profile from './Components/Profile/Profile';
import Chapters from './Components/Chapters/Chapters';
import Concept2 from './Components/Chapters/Chapter1/concept2.js';
import Concept3 from './Components/Chapters/Chapter1/concept3.js';
import Concept3_1 from './Components/Chapters/Chapter3/Concept3_1';
import Concept3_2 from './Components/Chapters/Chapter3/Concept3_2';
import Concept3_3 from './Components/Chapters/Chapter3/Concept3_3';
import Concept3_4 from './Components/Chapters/Chapter3/Concept3_4';
import Qcm3_1 from './Components/Chapters/Chapter3/Qcm3_1';
import Qcm3_2 from './Components/Chapters/Chapter3/Qcm3_2';
import Qcm3_3 from './Components/Chapters/Chapter3/Qcm3_3';
import Qcm3_4 from './Components/Chapters/Chapter3/Qcm3_4';

function App() {
  return (
    // <Router>
    //   <Routes>  
    //     <Navigate exact from="/" to="/login" />
    //     <Route path="/login" component={Login} />
    //     {/* <Route path="/menu" component={Menu} /> */}
    //   </Routes>
    // </Router>
    // <Login />
    // <QCM />
    // <Concept />
    // <Scoreboard />
    // <Scoreboardd />
    // <Menu />
    <div classname="test">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/Scoreboard" element={<Scoreboardd />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="/concept2" element={<Concept2 />} />
        <Route path="/concept3" element={<Concept3 />} />
        <Route path="/about" element={<QCM />} />
        <Route path="/Chapters" element={<Chapters />} />
        <Route path="/Concept3_1" element={<Concept3_1 />} />
        <Route path="/Concept3_2" element={<Concept3_2 />} />
        <Route path="/Concept3_3" element={<Concept3_3 />} />
        <Route path="/Concept3_4" element={<Concept3_4 />} />
        <Route path="/Qcm3_1" element={<Qcm3_1 />} />
        <Route path="/Qcm3_2" element={<Qcm3_2 />} />
        <Route path="/Qcm3_3" element={<Qcm3_3 />} />
        <Route path="/Qcm3_4" element={<Qcm3_4 />} />
      </Routes>
    </div>
  );
}

export default App;
