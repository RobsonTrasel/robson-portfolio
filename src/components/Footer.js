import '../assets/styles/Footer.css'
import { FaHome, FaMailBulk, FaPhone, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: '#FFF', marginRight: '2rem'  }} />
            <div>
              <p>Foz do Iguaçu</p>
              <p>Paraná - Brasil</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: '#FFF', marginRight: '2rem'  }} />
              (45) 98806-4377
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: '#FFF', marginRight: '2rem'  }} />
              robson.trasel@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat aperiam distinctio vero quia earum voluptatum repellendus harum temporibus eveniet exercitationem sunt necessitatibus dolore, natus maxime, accusantium ipsum repudiandae consequatur?</p>
          <div className="social">
          <FaFacebook size={20} style={{ color: '#FFF', marginRight: '2rem'  }} />
          <FaTwitter size={20} style={{ color: '#FFF', marginRight: '2rem'  }} />
          <FaLinkedin size={20} style={{ color: '#FFF', marginRight: '2rem'  }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer