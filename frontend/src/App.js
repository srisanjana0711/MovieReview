
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import MovieReviewPage from './pages/MovieReviewPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Router>
      <div>
        <nav>
          {isLoggedIn ? (
            <>
              <Link to="/">Home</Link> |{' '}
              <button onClick={() => {
                localStorage.removeItem('isLoggedIn');
                window.location.href = '/login';
              }}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link> |{' '}
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>

        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <MovieReviewPage /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

