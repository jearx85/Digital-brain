import './App.css';
// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RightBar from './components/SideBar/SideBar'; 
import Home from './components/Home/Home'; 
import EditorMark from './components/EditorMarkdown/EditorMark';
import MainNavBar from './components/NavBar/MainNavBar';

const App = () => {
  return (
    <BrowserRouter>
      < MainNavBar />
      <div style={{ display: 'flex', height: '100%' }}>
        {/* Barra lateral */}
        <RightBar />

        {/* Área central */}
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Editor" element={<EditorMark />} />
         
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
             
export default App;


