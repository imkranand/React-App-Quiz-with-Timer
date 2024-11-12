import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategorySelectionPage from './pages/CategorySelectionPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategorySelectionPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
