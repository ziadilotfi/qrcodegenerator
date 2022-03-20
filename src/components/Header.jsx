import React from 'react'
import Headerimg from "../images/logo.png"

function Header() {
  return (
    <div className='container header '>
        <div className='row align-items-center'>
        <div className='col-lg-6 py-2'>
            <h4 className="text-white">QrCodeGenerator</h4>
            <h1 className="text-white">LINK SHARING MADE EASY WITH <strong>QRCODES</strong></h1>
            <a className="btn btn-md btn-outline-light get-started-btn" href="#generator">Get Started<i className='fas fa-arrow-right px-2'></i></a>
        </div>
        <div className='col-lg-6 py-2 text-center'>
            <img src={Headerimg} className="header-img"/>
        </div>
        </div>
    </div>
  )
}

export default Header