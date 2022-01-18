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
  "imgUrl":"https://s2.glbimg.com/_Lgauxd5LWZmrqowNJAgr_2DdE0=/0x0:892x684/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/q/G/foCFi0RYO4LWucFnb9og/br-hd-j4300-un32j4300agxzd-010-r-perspective-blue.jpeg",
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
