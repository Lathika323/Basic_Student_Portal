import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='container-fluid text-center'>
    <div className='min-vh-100 bg-info'>
    <AuthProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route 
          path="/dashboard" 
          element={ 
          <ProtectedRoute>
            <Dashboard />
            </ProtectedRoute>
          } 
          /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
    </div>
    </div>
  );
}

export default App;
