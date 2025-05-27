import { useState } from 'react'
import ProductList from './ProductList';
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");

  const addPost = () => {
    if (title.trim() === "") return; 
    setPosts([...posts, { id: Date.now(), title }]);
    setTitle("");
  };

  return (
    <div className="blog_wrap">
      <h2>블로그 게시판</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={addPost}>글 작성</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
