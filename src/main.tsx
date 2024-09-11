import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Yalico from './Yalico.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Yalico/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
