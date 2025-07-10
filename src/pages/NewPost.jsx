import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewPost({ posts, setPosts }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
    };
    setPosts([newPost, ...posts]);
    navigate('/'); // burası anasayfaya yönlendirir
  };

  return (
    <div className="container">
      <h2>Yeni Yazı Ekle</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text" placeholder="Başlık"
          value={title} onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="İçerik" value={content}
          onChange={(e) => setContent(e.target.value)} required
        ></textarea>
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
}

export default NewPost;
