import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import NavbarP from 'components/NavbarP';
import ProductPrice from 'components/ProductPrice';
import { Link } from 'react-router-dom';
import './styles.css';

export default function ProductDetails() {
  return (
    <>
      <NavbarP />
      <div className="product-details-container">
        <div className="base-card product-details-card">
          <Link to="/catalog">
            <div className="goback-container">
              <ArrowIcon />
              <h2>Voltar</h2>
            </div>
          </Link>
          <div className="row">
            <div className="col-xl-6">
              <div className="img-container">
                <img
                  src="https://images-shoptime.b2w.io/produtos/01/00/img/1803603/2/1803603260_1GG.jpg"
                  alt="produto"
                />
              </div>
              <div className="name-price-container">
                <h1>nome do produto</h1>
                <ProductPrice price={2345.67} />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="description-container">
                <h2>Descrição do Produto</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, ut!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, ut!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, ut!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, ut!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
