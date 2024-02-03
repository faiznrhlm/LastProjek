import React from 'react';
import './App.css';
import ProjectsPage from './components/ProjectsPage';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import HomePage from './components/home/HomePage';

function App() {
  return (
    <BrowserRouter>
    <header className='sticky'>
     

      <NavLink to='/' className="button rounded">
        <span className='icon-home'></span>
        Home
      </NavLink>

      <NavLink to='/projects' className="button rounded">
        Menu
      </NavLink>
    </header>

    <div className='container'>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="projects" element={<ProjectsPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    // <
  );
}

export default App;
