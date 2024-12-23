import React from 'react'
import Navbar from '../Navbar'

const Home = () => {
  return (
    <>
        <Navbar/>
        <div>
            <p># Repurpose video with AI</p>
            <h1>Now Repurpose long video, 10x faster</h1>
            <p>Sierra allows you to create new video content in just a few clicks saving your time and effort </p>

            <lable>Video link Here</lable>
            <input type='url' placeholder='Paste your video link' />
            <label>Keywords</label>
            <textarea placeholder='Keywords to include relevant data'>

            </textarea>

            <button>Call to Action</button>
        </div>
      
    </>
  )
}

export default Home
