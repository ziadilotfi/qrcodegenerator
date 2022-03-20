import React from 'react'
import logo from '../images/logo.png'

function MainNav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className='container-fluid'>
  <a className="navbar-brand" href="#">
    <img src={logo} height="50px" width="50px"/>
    <span className="nav-brand-text">QrCodeGenerator</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link text-white" href="#generator">Generate</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#share">Share</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="https://www.l1gend.ml/portfolio">Contact Developer</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    </>
  )
}

export default MainNav