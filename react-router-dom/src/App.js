import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import SubmittedForm from './pages/SubmittedForm';

function App() {
  return (
    <React.Fragment>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/post'>Post</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='/form-submitted' element={<SubmittedForm/>} />
          <Route path='/post' element={<PostPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
