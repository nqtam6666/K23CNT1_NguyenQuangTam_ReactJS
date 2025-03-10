import React, { useEffect, useState } from 'react'

function NqtBai2() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(Response => Response.json())
    .then(data=>setPost(data))
  }, [])
  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <ul>
        {posts.slice(0, 10).map(post => (
          <li key={post.id}>{post.id} - { post.title}</li>
        ))}
      </ul>
    </div>
  )
}
export default NqtBai2