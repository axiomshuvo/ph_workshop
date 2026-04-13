import { useState } from "react";

export default function ProductForm({ handleAddProduct }) {
  const [error, setError] = useState("");

  const handleProductSubmit = (event) => {
    event.preventDefault();
    //     console.log(event.target);
    const name = event.target.name.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    //     console.log(name, price, quantity);

    // product validation
    if (name.length === 0) {
      setError("Please provide a product name");
      return;
    } else if (price.length === 0) {
      setError("Please provide a product price");
      return;
    } else if (isNaN(price) || price <= 0) {
      setError("Please provide a valid product price");
      return;
    } else if (quantity.length === 0) {
      setError("Please provide a product quantity");
      return;
    } else {
      setError("");
    }

    //     if( !name || !price || !quantity){
    //         alert('Please fill all the fields');
    //         return;
    //     }

    const newProduct = {
      name,
      price,
      quantity,
    };
    console.log(newProduct);
    handleAddProduct(newProduct);
  };

  return (
    <div>
      <h2>Product Form</h2>
      <form action="" onSubmit={handleProductSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="Product name"
          placeholder="write product name"
        />
        <br />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="Product price"
          placeholder="write product price"
        />
        <br />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          id="quantity"
          name="Product quantity"
          placeholder="write product quantity"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <small>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </small>
    </div>
  );
}
