import React from 'react'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <a href="https://github.com/victoriamcn" target="_blank" rel="noreferrer">
          <span className="icon">
            <i className="fas-brands fa-github"></i>
          </span>
          <span className="social">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/victoria-mcnorrill/" target="_blank" rel="noreferrer">
          <span className="icon">
            <i className="fas-brands fa-linkedin"></i>
          </span>
          <span className="social">LinkedIn</span>
        </a>
        <a href="https://www.instagram.com/victoriamcnorrill/" target="_blank" rel="noreferrer">
          <span className="icon">
            <i className="fas-brands fa-instagram"></i>
          </span>
          <span className="social">Instagram</span>
        </a>
        <a href="https://open.spotify.com/user/torilizabeth95" target="_blank" rel="noreferrer">
          <span className="icon">
            <i className="fas-brands fa-spotify"></i>
          </span>
          <span className="social">Spotify</span>
        </a>
        <a href="https://www.pinterest.com/vmcnorrill/" target="_blank" rel="noreferrer">
          <span className="icon">
            <i className="fas-brands fa-pinterest"></i>
          </span>
          <span className="social">Pinterest</span>
        </a>
      </div>
      <div className="content has-text-centered">
        <p className='byvictoria'>by Victoria</p>
      </div>
    </footer>
  )
}

export default Footer;