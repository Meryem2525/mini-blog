import React from 'react'
import EmptyState from '../components/EmptyState'
import { Link } from 'react-router'

function Home({posts}) {
  return (
    <div className='container'>
      <h1>Blog Yazıları</h1>
      {posts.length === 0 ?(<EmptyState/>):(
        posts.map((post)=>(
          <div key={post.id} className="post-cart">
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}...</p>
            <Link to={`/detay/${post.id}`} className='detail-link '> Detaya Git</Link>
          </div>
        ))
      )} 
        

    </div>
  )
}

export default Home
