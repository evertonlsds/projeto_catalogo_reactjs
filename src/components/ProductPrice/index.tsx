import { formatPrice } from 'util/formatters';
import './styles.css';



type Props = {
  price: number;
}

export default function ProductPrice({price} : Props) {
  return (
    <div className="product-price-container">
      <span>R$</span>
      <h3>{formatPrice(price)}</h3>
    </div>
  );
}
