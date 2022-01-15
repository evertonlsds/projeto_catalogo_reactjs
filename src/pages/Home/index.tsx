import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import Navbar from 'components/Navbar';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-content-container">
            <div>
              <h1>Conheça o melhor catálogo de produtos</h1>
              <p>
                Ajudaremos você a encontrar os melhores produtos disponíveis no
                mercado.
              </p>
            </div>
            <Link to="/catalog">
              <ButtonIcon />
            </Link>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
    </div>
  );
}
