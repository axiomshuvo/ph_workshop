export default function Product({ product }) {
  const {
    id,
    name,
    price,
    category,
    stock,
    rating,
    image,
    description,
    brand,
  } = product;

  return (
    <div>
      <div className="card bg-emerald-900 card-sm shadow-sm text-center">
        <div className="card-body">
          <h2 className="text-xl">{name}</h2>
          <p>{description}</p>
          <p>Price: ${price}</p>
          <p>Category: {category}</p>
          <p>Stock: {stock}</p>
          <p>Rating: {rating} / 5</p>
          <p>Brand: {brand}</p>
          <div className="justify-center card-actions">
            <button className="btn btn-xs btn-warning">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
