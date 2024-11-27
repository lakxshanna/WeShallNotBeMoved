import React from 'react'
import video from 'encampmentarchive/src/images/DSC_0286.mp4'

const Landing = () => {
  return (
    <div className='landing'>
        <video src={video} autoPlay muted loop></video>
        <div className='overlay'></div>
        <div className='content'>
            <h1>We shall not be moved</h1>
            <p>some subheading about encampment archive</p>
            <p>names/credit?</p>
        </div> 

    </div>
  )
}

export default Landing