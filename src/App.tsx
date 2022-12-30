import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProjectHome from "./Pages/ProjectHome"
import ExampleLayout from './Pages/ExampleLayout'
import Playground from './Components/Playground'
import DocsHome from './Pages/DocsPage/DocsHome'
import ProductHome from './Pages/ProductPages/ProductHome'
import DocsTemplate from './Pages/DocsTemplate';


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<ProjectHome/>}/>
      <Route path="/Pages/DocsPage/DocsHome" element={<DocsHome/>}/>
      <Route path="/Pages/ProductPages/ProductHome" element={<ProductHome/>}/>
      <Route path="/Pages/ExampleLayout" element={<ExampleLayout/>}/>
      <Route path="/Pages/DocsTemplate" element={<DocsTemplate/>}/>
      <Route path="/Components/Playground" element={<Playground/>}/>
      </Routes>
    </div>
  );
}

export default App;
