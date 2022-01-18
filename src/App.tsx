import './assets/styles/custom.scss';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Admin from 'pages/Admin';
import ProductDetails from 'pages/ProductDetails';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/catalog:productId" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
