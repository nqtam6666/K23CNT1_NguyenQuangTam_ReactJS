import { Link, Route, Routes } from 'react-router-dom';
import NqtHome from './components/NqtHome';
import NqtAbout from './components/NqtAbout';
import NqtContact from './components/NqtContact';
import NqtProduct from './components/NqtProduct';
import NqtNew from './components/NqtNew';
import './App.css';

function NqtApp() {
  return (
    <div className="container border my-3">
      <header>
        <h1>React Router Demo</h1>
        <hr />
      </header>
      
      <nav className="navigation">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/new">New</Link></li>
        </ul>
      </nav>

      <main className="content alert alert-danger">
        <Routes>
          <Route path="/" element={<NqtHome />} />
          <Route path="/about" element={<NqtAbout />} />
          <Route path="/contact" element={<NqtContact />} />
          <Route path="/product" element={<NqtProduct />} />
          <Route path="/new" element={<NqtNew />} />
        </Routes>
      </main>
    </div>
  );
}

export default NqtApp;