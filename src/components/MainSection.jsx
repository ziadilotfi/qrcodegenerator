import React , {useState} from 'react'
import Qrcode from '../images/qr_code.png'
import QRCode from "react-qr-code";


function MainSection() {
  
  const [link , setLink] = useState('')
  const [qrcode , setQrCode ] = useState('')
  const [input , setInput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const linkInput = event.target.link;
    setLink (linkInput.value) 
    const qrcode = document.getElementById('qrcode')
    setQrCode (qrcode.classList.remove('d-none'))
  };

  const PasteLink = async () => {
    const Read = await navigator.clipboard.readText()
    var input = document.querySelector('#input')
    setInput(input.value = Read)
  }


  return (
    <div className='container' id="generator">
    <div className='row'>
        <div className='col-lg-12'>
            <h2 className="MainHeader text-white">Generate Qr Code From Link</h2>
        </div>
        <div className="col-lg-8 text-center mx-auto">
            <form className="search-bar" onSubmit={handleSubmit} id="qrlinkForm">
              <input type="text" autoFocus placeholder="Generate Qr Code" name="link" id="input"/>
              <button type="button" id="pasteButton" onClick={PasteLink}><i className="fas fa-paste text-white fa-2x"></i></button>
            </form>
        </div>
        <div className='col-lg-12 text-center mx-auto'>
          <button className='btn btn-outline-light btn-generate' type="submit" form="qrlinkForm"><i className="fa-solid fa-qrcode px-2"></i >Generate</button>
        </div>
        <div className='col-lg-6 text-center mx-auto mt-4'>
          <div className="qr-code-placeholder">
          <div id="qrcode" className="d-none">
          <QRCode value={link}/>
          </div>
            <h3 className="my-3 py-3 text-white" id="share">Share !</h3>
            <a href="http://www.facebook.com/sharer.php?u=https://www.l1gend.ml/qrcodegenerator/" target="_blank"><i className='fab fa-facebook fa-2x px-3'></i></a>
            <a href="https://twitter.com/share?url=https://www.l1gend.ml/qrcodegenerator/&amp;text=Qrcodegenerator&amp;hashtags=qrcodegenerator" target="_blank"><i className='fab fa-twitter fa-2x px-3'></i></a>
            <a href="mailto:?Subject=Qrcodegenerator&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 https://www.l1gend.ml/qrcodegenerator/"><i className='fas fa-envelope fa-2x px-3'></i></a>
            <a href="https://plus.google.com/share?url=https://www.l1gend.ml/qrcodegenerator/" target="_blank"><i className='fab fa-google-plus fa-2x px-3'></i></a>
          </div>
        </div>
    </div>
    </div>
  )
}

export default MainSection