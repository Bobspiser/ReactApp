//App
import "./App.css";
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Collection from "./pages/Collection"
import NekoPage from "./pages/NekoPage"

function App() {
  return (
    <div className="jumb">
      <div className="navbar navbar-expand-lg">
        <nav className="nav navbar-nav">
        <Link to="/"><img src="https://png.pngtree.com/png-clipart/20230407/original/pngtree-anime-girl-mascot-for-logo-png-image_9033456.png" className="nav-img" />  </Link>  
        <ul className="list">
          <li><a><Link to='/home' className="nav-item nav-link">Home</Link></a></li>
          <li><a><Link to='/nekoPage' className="nav-item nav-link">Start</Link></a></li>
          <li><a><Link to='/collection' className="nav-item nav-link">Collection</Link></a></li>
          </ul>
          <button className="search">Search</button>
        </nav>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />   
          <Route path='/home' element={<Home />} />   
          <Route path="/nekoPage" element={<NekoPage />} />
          <Route path='/collection' element={<Collection />} />   
      </Routes>

  </div>
  );
}

export default App;