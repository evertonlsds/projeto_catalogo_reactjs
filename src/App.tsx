import './assets/styles/custom.scss';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Admin from 'pages/Admin';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
