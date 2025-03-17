import { Link, Route, Routes } from 'react-router-dom';
import NqtHome from './components/NqtHome'
import NqtAbout from './components/NqtAbout'
import NqtContact from './components/NqtContact'
import './App.css';

function NqtApp() {
  return (
    <div className='container border my-3'>
        <h1>React Router Demo</h1>
        <hr />
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
            <div className='alert alert-danger'>
              <Routes>
                  <Route path="/" element={<NqtHome />} />
                  <Route path="/about" element={<NqtAbout />} />
                  <Route path="/contact" element={<NqtContact />} />
              </Routes>
            </div>
          </div>
    </div>
  )
}

export default NqtApp;
