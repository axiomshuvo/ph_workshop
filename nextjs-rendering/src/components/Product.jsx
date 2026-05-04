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
      <div className="card bg-base-100 card-sm shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
