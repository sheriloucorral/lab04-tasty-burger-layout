import './Product.css';

interface ProductProps {
  id: number;
  prodname: string;
  desc: string;
  price: number;
  rating: number;
  src: string;
  onAddToCart: () => void;
}

function Product(props: ProductProps) {
  return (
    <div className="product-card">
    <div className="product-image">
    <img src={props.src} alt={props.prodname} loading="lazy" />
    </div>
    <div className="rating-stars">{'★'.repeat(Math.floor(props.rating))}
    {props.rating % 1 !== 0 && '★'}
        </div>
    <h3 className="product-name">{props.prodname}</h3>
    <p className="product-desc">{props.desc}</p>
    <div className="price-btn-row">
        <span className="product-price">P{props.price}</span>
        <button className="add-to-cart-btn" onClick={props.onAddToCart}>
          Add to Cart
        </button>
        </div>
        </div>
  );
}
export default Product; //