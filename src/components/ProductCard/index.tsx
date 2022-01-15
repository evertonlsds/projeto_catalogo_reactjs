import './styles.css';
import ProductImg from 'assets/images/product.png';
import ProductPrice from 'components/ProductPrice';

export default function ProductCard() {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="imagem" />
      </div>
      <div className="card-bottom-container">
        <h6>nome do produto</h6>
        <ProductPrice />
      </div>
    </div>
  );
}
