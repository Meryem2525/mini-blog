import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

function Detail({posts,setPosts}) {
  const {id}=useParams()
  const navigate=useNavigate()

  const post =posts.find((p)=>p.id===Number(id))

  if(!post){
    return <p>Blog Yazısı Bulunmadı</p>
  }
  
  const handleDelete=()=>{
     const updatedPosts=posts.filter((p)=>p.id !== Number(id))
     setPosts(updatedPosts)
     navigate('/')
  }
   
  
  const handleUpdate=(e)=>{
     
      const newContent = prompt("Yeni içeriğinizi düzenleyiniz lütfen :", post.content);

  if (!newContent) return;
     const updatedPosts=posts.map((p)=>p.id===Number(id)?{...p,content:newContent}:p)
     setPosts(updatedPosts)
    
   }


  return (
     <div className="container">
   
      <h2>{post.title}</h2> <br />
      <p>{post.content}</p>
         <br />
      <button onClick={handleDelete} className="delete-btn">Sil</button>
      <button onClick={handleUpdate} className="update-btn">Düzenle</button>
      
    </div>
  )
}

export default Detail
