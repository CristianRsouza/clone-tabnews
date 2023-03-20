import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PostPage from './componetns/postPage/postpage';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/post/:postid' element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
