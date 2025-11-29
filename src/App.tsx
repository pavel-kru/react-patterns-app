import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import PatternDetail from './pages/PatternDetail.tsx';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark' : 'light'}`}>
        <header className="app-header">
          <div className="header-content">
            <Link to="/" className="logo">
              <h1>📚 JS Patterns</h1>
            </Link>
            <nav>
              <button
                className="theme-toggle"
                onClick={() => setDarkMode(!darkMode)}
                aria-label={
                  darkMode ? 'Switch to light mode' : 'Switch to dark mode'
                }
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pattern/:id" element={<PatternDetail />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>Learn JavaScript Patterns • Built with React & Netlify</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
