import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function NavBar() {
    const {user,logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

  return (
    <nav style={{padding:"10px", background:"#eee"}}>
        <Link to="/" style={{marginRight:"10px"}}>Home</Link>
        {user ? (
            <>
            <Link to="/dashboard" style={{marginRight:"10px"}}>Dashboard</Link>
            <button type="submit" className="btn btn-outline-danger"onClick={handleLogout}>Logout</button>
            </>
        ) : (
            <Link to="/">Login</Link>
        )}
    </nav>
  );
}
