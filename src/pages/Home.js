import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-3">Welcome to Students Portal</h1>
      <p className="mb-4">This is the public home page</p>

{/* 'showLogin' is given dynamically i.e if i click login button only after that this showLogin works */}
      {!showLogin ? (
        <button className="btn btn-warning" onClick={() => setShowLogin(true)}> Login </button>
      ) : (
        <form onSubmit={handleSubmit} className="card p-4 mx-auto shadow-lg" style={{ maxWidth: "400px", textAlign: "left" }}>
          {error && <p className="text-danger">{error}</p>}

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control border-dark"value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control border-dark"value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success">Submit</button>
            <button type="button" className="btn btn-danger"onClick={() => setShowLogin(false)} >Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}
