import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './QuestionData.css';
import App from './App';
import QuestionData from './QuestionData';
import ResultPage from './ResultPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/QuestionData" element={<QuestionData />} />
        <Route path="/result/:marks/:totalQuestions" element={<ResultPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
