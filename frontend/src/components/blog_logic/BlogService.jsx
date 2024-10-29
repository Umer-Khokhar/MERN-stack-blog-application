import React, { useState } from 'react'
import { FetchFromAPI } from '..';

const fetchUrl = 'http://localhost:3000/api/blog-post' || '192.168.1.5:3000/api/blog-post';
export const handleGetBlogs = async () => {
  try {
    const getData = await FetchFromAPI(fetchUrl)
    return getData
  } catch (err){
    throw new err("Can't able to fetch any blog 💀!")
  }
}


export const handlePostBlogs = async (blog) => {
  try {
    const postData = await fetch(fetchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify(blog)
    })
    if (!postData.ok) {
      console.log("Unable to post blog")
    }
    
    const json = await postData.json()
      return json
  } catch (error) {
    console.error("Error posting blog:", error.message);
    throw new Error("Error adding data to the DB");
  }
}
