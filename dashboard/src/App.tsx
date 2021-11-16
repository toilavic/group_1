
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import LoginAdmin from './pages/login/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<LoginAdmin />}/>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
