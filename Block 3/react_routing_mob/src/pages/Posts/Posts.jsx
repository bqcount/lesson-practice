import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllPosts, getPostsById } from '../../services/postsService.js'

import './Posts.css'

function Posts() {
  const [posts, setPosts] = useState([])

  const { userId } = useParams()

  const handlePosts = async () => {
    userId ? setPosts(await getPostsById(userId)) : setPosts(await getAllPosts())
  }

  useEffect(() => {
    handlePosts()
  }, [userId])

  const displayPosts = () => {
    return posts && posts.map((post) => {
      return (
        <article className="cardPost" key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </article>
      )
    })
  }

  return (
    <>
      <h1>Posts</h1>
      <p>{userId ?? 'hola'}</p>
      <section>{displayPosts()}</section>
    </>
  )
}

export default Posts
