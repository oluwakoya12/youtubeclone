import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

function Home({sidebar}) {
  return (
    <div>
        <Sidebar sidebar={sidebar} />
        <div className={`${sidebar ? 'container2': 'large-container'}`}>
        <Feed />
        </div>
      
    </div>
  )
}

export default Home
