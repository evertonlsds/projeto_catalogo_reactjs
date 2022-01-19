import Navbar from 'components/Navbar';
import ProductCard from 'components/ProductCard';
import { Product } from 'types/product';
import './styles.css';

export default function Catalog() {


const product: Product= {
  "id": 2,
  "name": "Smart Tv",
  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, modi hic! Omnis maiores, sed ab consequatur enim et officiis inventore!",
  "price":2190.0,
  "date": "2020-07-14T10:00:00Z",
  "imgUrl":"https://images-shoptime.b2w.io/produtos/01/00/img/1803603/2/1803603260_1GG.jpg",
  "categories":[
    {
      "id": 1,
      "name": "Livros"
    },
    {
      "id": 3,
      "name": "Computadoes"
    }
  ]
}

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard product={product}/>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard product={product}/>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard product={product}/>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard product={product}/>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard product={product}/>
          </div>
        </div>
      </div>
    </>
  );
}
