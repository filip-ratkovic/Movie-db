import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <main className="nav" id='nav'>
      <Link to='/'>Home</Link>
      <Link to='/movies'>Movie</Link>
      <Link to='/series'>Series</Link>
      
    </main>
  )
}

export default Nav