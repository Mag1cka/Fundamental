import React, { useState } from 'react';
import './styles/App.css'
// @ts-ignore
import { PostList } from './Components/UI/PostList.tsx';
// @ts-ignore
import { PostForm } from './Components/UI/PostForm.tsx';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      {posts.length !== 0
        ?
        <PostList remove={removePost} posts={posts} title='Посты про JS' />
        :
        <h1 style={{ textAlign: 'center' }}>
          Посты не найдены
        </h1>
      }
    </div>
  );
}

export default App;
