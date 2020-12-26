import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPosts, postsSelector } from './slices/posts'

const App = () => {
  const dispatch = useDispatch()
  const { posts, loading, hasErrors } = useSelector(postsSelector)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Cannot display posts...</p>

    return posts.map(posts =>
      <div key={posts.title} className='tile'>
        <h2>{posts.title}</h2>
      </div>
    )
  }

  return (
    <section>
      <h1>Posts</h1>
      <div className='content'>
        {renderPosts()}
      </div>
    </section>
  )
}

export default App
