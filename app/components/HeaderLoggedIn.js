import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import ExampleContext from '../ExampleContext'

function HeaderLoggedIn(props) {
  const { setLoggedIn } = useContext(ExampleContext)

  function handleLogout() {
    setLoggedIn(false)
    localStorage.removeItem('complexAppToken')
    localStorage.removeItem('complexAppUsername')
    localStorage.removeItem('complexAppAvatar')
  }
  return (
    <div className="flex-row my-3 my-md-0">
      <a href="#" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </a>
      <span className="mr-2 header-chat-icon text-white">
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span>
      <a href="#" className="mr-2">
        <img className="small-header-avatar" src="https://www.gravatar.com/avatar/0bcdd2c3e59ec4a5be72e8d298444603" />
      </a>
      <Link className="btn btn-sm btn-success mr-2" to="/create-post">
        Create Post
      </Link>
      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  )
}

export default HeaderLoggedIn
