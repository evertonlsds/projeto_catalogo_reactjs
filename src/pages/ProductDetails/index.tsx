import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import Navbar from 'components/Navbar';
import ProductPrice from 'components/ProductPrice';
import './styles.css';

export default function ProductDetails() {
  return (
    <>
      <Navbar />
      <div className="product-details-container">
        <div className="base-card product-details-card">
          <div className="goback-container">
            <ArrowIcon />
            <h2>Voltar</h2>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="img-container">
                <img
                  src="https://s2.glbimg.com/_Lgauxd5LWZmrqowNJAgr_2DdE0=/0x0:892x684/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/q/G/foCFi0RYO4LWucFnb9og/br-hd-j4300-un32j4300agxzd-010-r-perspective-blue.jpeg"
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
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
