import "../assets/styles/HeroImg.css";
import Bg from '../assets/imgs/bg.jpg'
import {Link} from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Bg} alt="" />
      </div>
      <div className="content">
        <p>Olá, meu nome é Robson</p>
        <h1>Desenvolvedor Fullstack</h1>
        <div>
          <Link className="btn" to='/projects'>Projetos</Link>
          <Link className="btn btn-light" to='/contact'>Contato</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
