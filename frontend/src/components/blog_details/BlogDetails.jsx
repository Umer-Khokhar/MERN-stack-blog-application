import React, { useState } from 'react'
import "./blogDetails.css"
import { useBlogContext } from '../blog_logic/BlogContext'
// eslint-disable-next-line react/prop-types
const BlogDetails = ({title, image, _id, dltBtn}) => {
  const { dltBlog } = useBlogContext()

  const handleDlt = async () => {
      const fetchUrl = `https://mern-stack-blog-application-server.vercel.app/api/blog-post/${_id}`;
    const response = await fetch(fetchUrl, {
      method : "DELETE",
    })
    const data = await response.json()
    if (response.ok) {
      dltBlog(data._id)
    }
  }
  return (
    <div className='blogs-detail'>
     <img src={image} alt="blog-image" className='blog-image' />
              <div className="post__info">
              <h2>{title}</h2>
              <div className="publish-time">
                  <span className="date">3 days ago</span>
              </div>

              </div>
              <div className="dlt-button">
              <img src={dltBtn} onClick={handleDlt} alt="delete button" className='dlt' width={20}/>
              </div>
    </div>
  )
}

export default BlogDetails