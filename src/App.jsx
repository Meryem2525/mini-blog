import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import Detail from "./pages/Detail";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/yeni" element={<NewPost posts={posts} setPosts={setPosts} />} />
        <Route path="/detay/:id" element={<Detail posts={posts} setPosts={setPosts} />} />
      </Routes>
    </Router>
  );
}

export default App;
